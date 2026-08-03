import { type PageProps } from "fresh";

const description =
  "Software engineer in Seattle. Previously Meta and PayPal; currently building Mythrun, an AI dungeon master for D&D 5e.";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>miklos bowling — software engineer</title>
        <meta name="description" content={description} />
        <meta
          property="og:title"
          content="miklos bowling — software engineer"
        />
        <meta property="og:description" content={description} />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
        <footer>built with Fresh + Preact</footer>
      </body>
    </html>
  );
}
