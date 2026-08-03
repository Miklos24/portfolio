import TabNav from "../islands/TabNav.tsx";
import homeContent from "../content/home.json" with { type: "json" };

export default function Home() {
  return (
    <>
      <header className="main-header">
        <h1>
          {homeContent.name}
          <br />
          <i>{homeContent.tagline}</i>
        </h1>
      </header>
      <TabNav />
    </>
  );
}
