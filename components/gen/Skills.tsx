// deno-lint-ignore-file react-no-danger -- trusted local markdown
import { FunctionalComponent } from "preact";

const Skills: FunctionalComponent = () => {
  return (
    <div
      className="content-container"
      dangerouslySetInnerHTML={{
        __html:
          "<p>Most of my work is React and TypeScript on the web, with detours into native\nmobile and backend when a project needs them.</p>\n<hr />\n<h2>ai-assisted development</h2>\n<p>The skill I use most in 2026. Agentic coding workflows (mostly Claude Code), LLM\nevals and judges, CI guardrails for AI-written code, and prompt and caching\nstandards. I was an early adopter at Meta and helped my team ramp up; most of\nthese practices I&#39;ve built out and refined on Mythrun.</p>\n<hr />\n<h2>languages</h2>\n<ul>\n<li>daily: TypeScript/JavaScript</li>\n<li>recent professional: Hack/PHP, Objective-C</li>\n<li>prior experience: Python, SQL, C++, CSS/SASS</li>\n</ul>\n<hr />\n<h2>tools and frameworks</h2>\n<ul>\n<li>daily: React, Relay/GraphQL, Node.js, Next.js, Jest, Cypress, Git</li>\n<li>recent professional: ComponentKit (iOS), Fastify, Postgres, Redis, Docker,\nAWS/Terraform</li>\n</ul>",
      }}
    />
  );
};

export default Skills;
