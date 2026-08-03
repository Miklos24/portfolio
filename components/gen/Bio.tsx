// deno-lint-ignore-file react-no-danger -- trusted local markdown
import { FunctionalComponent } from "preact";

const Bio: FunctionalComponent = () => {
  return (
    <div
      className="content-container"
      dangerouslySetInnerHTML={{
        __html:
          "<p>I&#39;m a software engineer who spent the last few years building consumer products\nat Meta and PayPal — most recently ads-based shopping experiences in the\nFacebook app, where I&#39;d take an experiment the whole way myself: UI, native\nclients, rollout, and the analysis afterward.</p>\n<p>I left Meta in early 2026 because I felt AI had crossed a threshold: agentic\ncoding tools had gotten good enough that going all-in on them seemed like the\nmost valuable thing I could do with a year, and that&#39;s hard to do properly\ninside a big company. So right now I&#39;m building Mythrun, an AI-powered platform\nfor D&amp;D 5e, learning as much as I can about this new way of making software, and\nkeeping an eye out for my next full-time thing.</p>\n<p>When I&#39;m not coding, I enjoy hitting the climbing gym, getting out into the\nwoods, and rolling d20s with some friends.</p>",
      }}
    />
  );
};

export default Bio;
