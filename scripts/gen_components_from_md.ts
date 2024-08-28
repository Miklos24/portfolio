import { emptyDir, ensureDir } from "$std/fs/mod.ts";
import { marked } from "$marked/mod.ts";
import { basename, join } from "$std/path/mod.ts";

interface IndexLabel {
  idx: number;
  name: string;
}

const renderer = new marked.Renderer();
renderer.hr = () => "<hr />\n";
marked.setOptions({ renderer });

const contentDir = "./content/markdowns";
const componentsDir = "./components/gen";

await ensureDir(componentsDir);
await emptyDir(componentsDir);

async function generateComponents() {
  const indexLabels: IndexLabel[] = [];

  for await (const file of Deno.readDir(contentDir)) {
    if (file.isFile && file.name.endsWith(".md")) {
      const filePath = join(contentDir, file.name);
      const markdown = await Deno.readTextFile(filePath);
      const html = marked(markdown);

      const baseName = basename(file.name, ".md");
      const [indexPart, lowercaseName] = baseName.split("_");
      indexLabels.push({ idx: parseInt(indexPart, 10), name: lowercaseName });

      const componentName = lowercaseName.replace(
        /(^\w|-\w)/g,
        (c) => c.replace("-", "").toUpperCase(),
      );

      const componentContent = `
        export default function ${componentName}() {
          return <div className="content-container">${html}</div>;
        }`;

      const outputFilePath = join(componentsDir, `${componentName}.tsx`);
      await Deno.writeTextFile(outputFilePath, componentContent);
    }
  }

  indexLabels.sort((a, b) => a.idx - b.idx);
  const outputFilePath = join(componentsDir, "tabOrder.json");
  await Deno.writeTextFile(
    outputFilePath,
    JSON.stringify({
      order: indexLabels.map(({ name }) => name),
    }),
  );
  console.log("Markdown components generated successfully.");
}

await generateComponents();
