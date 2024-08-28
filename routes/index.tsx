import { FunctionalComponent } from "preact";
import TabNav from "../islands/TabNav.tsx";
import homeContent from "../content/home.json" with { type: "json" };
import tabOrder from "../components/gen/tabOrder.json" with { type: "json" };

interface Tab {
  name: string;
  component: FunctionalComponent;
}

async function importTabComponents(): Promise<Tab[]> {
  const tabComponents: Tab[] = [];
  const tabComponentDir = "./components/gen";

  for await (const file of Deno.readDir(tabComponentDir)) {
    if (file.isFile && file.name.endsWith(".tsx")) {
      const { default: component } = await import(
        `../${tabComponentDir}/${file.name}`
      ) as { default: FunctionalComponent };
      const name = file.name.replace(".tsx", "").toLowerCase();
      tabComponents.push({ name, component });
    }
  }

  tabComponents.sort((a, b) => {
    return tabOrder.order.indexOf(a.name) - tabOrder.order.indexOf(b.name);
  });
  return tabComponents;
}

export default async function Home() {
  const tabComponents = await importTabComponents();
  const tabNames = tabComponents.map(({ name }) => name);
  const tabElements = tabComponents.map(({ component: Component }) => (
    <Component />
  ));

  return (
    <>
      <header className="main-header">
        <h1>
          {homeContent.name}
          <br />
          <i>{homeContent.tagline}</i>
        </h1>
      </header>
      <TabNav tabNames={tabNames}>
        {tabElements}
      </TabNav>
    </>
  );
}
