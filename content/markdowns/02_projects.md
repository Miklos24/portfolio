## mythrun — currently building

Mythrun is a multiplayer AI Dungeon Master for D&D 5e. You describe a world in a
sentence, it generates the full setting in minutes, and then you and your
friends play in real time while it runs the narrative, skill checks, and
tactical combat on generated voxel battle maps.

Technically, it's essentially a big AI orchestration project powered by
Anthropic's Claude API. There are a few different models playing different
roles: one writes the story the players actually read, a smarter one watches
from behind the curtain and nudges the narrative, and small cheap ones handle
routing and bookkeeping. Most of my time goes into deciding what each model is
allowed to know and do. The storyteller never sees the plot, so it can't spoil
anything, and anything involving dice or rules happens in deterministic code.

It's in closed playtesting now. If you'd like a peek before launch, ask me.
