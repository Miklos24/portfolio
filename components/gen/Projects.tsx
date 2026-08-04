// deno-lint-ignore-file react-no-danger -- trusted local markdown
import { FunctionalComponent } from "preact";

const Projects: FunctionalComponent = () => {
  return (
    <div
      className="content-container"
      dangerouslySetInnerHTML={{
        __html:
          "<h2>mythrun — currently building</h2>\n<p>Mythrun is a multiplayer AI Dungeon Master for D&amp;D 5e. You describe a world in a\nsentence, it generates the full setting in minutes, and then you and your\nfriends play in real time while it runs the narrative, skill checks, and\ntactical combat on generated voxel battle maps.</p>\n<p>Technically, it&#39;s essentially a big AI orchestration project powered by\nAnthropic&#39;s Claude API. There are a few different models playing different\nroles: one writes the story the players actually read, a smarter one watches\nfrom behind the curtain and nudges the narrative, and small cheap ones handle\nrouting and bookkeeping. The hard part has been deciding what each model is\nallowed to know and do. The storyteller never sees the plot, so it can&#39;t spoil\nanything, and anything involving dice or rules happens in deterministic code.</p>\n<p>It&#39;s in closed playtesting now. If you&#39;d like a peek before launch, ask me.</p>",
      }}
    />
  );
};

export default Projects;
