import { Head } from "$fresh/runtime.ts";
import notFoundContent from "../content/404.json" with { type: "json" };

export default function Error404() {
  return (
    <>
      <Head>
        <title>{notFoundContent.title}</title>
      </Head>
      <header className="main-header">
        <h1>
          {notFoundContent.message}
          <br />
          <a href="/">{notFoundContent.return}</a>
        </h1>
      </header>
    </>
  );
}
