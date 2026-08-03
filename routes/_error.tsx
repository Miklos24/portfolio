import { HttpError, type PageProps } from "fresh";
import { Head } from "fresh/runtime";
import notFoundContent from "../content/404.json" with { type: "json" };

export default function ErrorPage({ error }: PageProps) {
  const isNotFound = error instanceof HttpError && error.status === 404;

  return (
    <>
      <Head>
        <title>
          {isNotFound ? notFoundContent.title : "500 - Something Went Wrong"}
        </title>
      </Head>
      <header className="main-header error-header">
        <h1>
          {isNotFound
            ? notFoundContent.message
            : "Sorry, something went wrong on my end."}
          <br />
          <a href="/">{notFoundContent.return}</a>
        </h1>
      </header>
    </>
  );
}
