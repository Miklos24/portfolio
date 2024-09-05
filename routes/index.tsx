import TabNav from "../islands/TabNav.tsx";
import homeContent from "../content/home.json" with { type: "json" };
import tabComponents from "../components/gen/index.ts";

export default function Home() {
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
