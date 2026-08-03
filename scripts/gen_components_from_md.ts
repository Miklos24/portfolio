import { emptyDir, ensureDir } from "@std/fs";
import { basename, join } from "@std/path";
import { marked } from "marked";

interface IndexLabel {
  idx: number;
  name: string;
  componentName: string;
}

// Self-close void elements so the generated HTML is valid JSX.
marked.use({ renderer: { hr: () => "<hr />\n" } });

const contentDir = "./content/markdowns";
const componentsDir = "./components/gen";

await ensureDir(componentsDir);
await emptyDir(componentsDir);

async function generateComponents() {
  const indexLabels: IndexLabel[] = [];

  // Generate individual components from markdown files
  for await (const file of Deno.readDir(contentDir)) {
    if (file.isFile && file.name.endsWith(".md")) {
      const filePath = join(contentDir, file.name);
      const markdown = await Deno.readTextFile(filePath);
      const html = await marked.parse(markdown);

      const baseName = basename(file.name, ".md");
      const [indexPart, lowercaseName] = baseName.split("_");
      const componentName = lowercaseName.replace(
        /(^\w|-\w)/g,
        (c) => c.replace("-", "").toUpperCase(),
      );

      indexLabels.push({
        idx: parseInt(indexPart, 10),
        name: lowercaseName,
        componentName,
      });

      // Embed the HTML via dangerouslySetInnerHTML rather than inline JSX:
      // JSX whitespace rules differ between the server and client compilers,
      // which silently drops spaces at line breaks after hydration.
      const componentContent = `
        // deno-lint-ignore-file react-no-danger -- trusted local markdown
        import { FunctionalComponent } from "preact";

        const ${componentName}: FunctionalComponent = () => {
          return (
            <div
              className="content-container"
              dangerouslySetInnerHTML={{ __html: ${
        JSON.stringify(html.trim())
      } }}
            />
          );
        };

        export default ${componentName};
      `;

      const outputFilePath = join(componentsDir, `${componentName}.tsx`);
      await Deno.writeTextFile(outputFilePath, componentContent);
    }
  }

  // Sort components based on the index from the filenames
  indexLabels.sort((a, b) => a.idx - b.idx);

  // Generate the barrel file (index.ts) for static component exports
  const barrelFilePath = join(componentsDir, "index.ts");
  const imports: string[] = [];
  const exports: string[] = [];

  for (const { name, componentName } of indexLabels) {
    imports.push(`import ${componentName} from "./${componentName}.tsx";`);
    exports.push(`  { name: "${name}", component: ${componentName} }`);
  }

  const barrelFileContent = `
import { FunctionalComponent } from "preact";

interface Tab {
  name: string;
  component: FunctionalComponent;
}

${imports.join("\n")}

const tabComponents: Tab[] = [
${exports.join(",\n")}
];

export default tabComponents;
`;

  await Deno.writeTextFile(barrelFilePath, barrelFileContent);
  console.log("Barrel file generated at:", barrelFilePath);

  console.log(
    "Markdown components generated and barrel file created successfully.",
  );
}

await generateComponents();
