// deno-lint-ignore-file react-no-danger -- trusted local markdown
import { FunctionalComponent } from "preact";

const Experience: FunctionalComponent = () => {
  return (
    <div
      className="content-container"
      dangerouslySetInnerHTML={{
        __html:
          "<h2>software engineer @ Meta</h2>\n<h3><em>(2025 - 2026)</em></h3>\n<p>I built ads-based shopping experiences in the Facebook app. My main project was\na new ad format that I ran more or less solo: the UI on iOS, the server-side\nad-fetching code, the rollout, and the analysis afterwards. It was successful,\ndoubling ad revenue for the specific flow it was built for.</p>\n<p>I also spent a stretch on loading performance, redesigning how the client\nfetches ads so that long loading states dropped from about a fifth of sessions\nto 7%. Along the way I built the tools my team uses to debug sessions and wrote\nour first standards for using LLMs in product.</p>\n<h2>software engineer @ PayPal</h2>\n<h3><em>(2022 - 2025)</em></h3>\n<p>I spent two and a half years on the front end of PayPal&#39;s consumer login. I\nhelped rebuild it in TypeScript, React, and Next.js, worked on passkey and\npasswordless login (part of a 1% improvement in login success, which at PayPal&#39;s\nscale was worth about $80M in 2023), and looked after the embeddable login\ncomponent other teams used to sign people in without a redirect.</p>",
      }}
    />
  );
};

export default Experience;
