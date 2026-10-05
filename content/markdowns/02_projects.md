## mythrun — to be continued?

Mythrun was my attempt to build an AI Dungeon Master for D&D 5e that I'd
actually want to play with. I've been a DM forever, and the existing AI
offerings weren't getting some pretty basic things right. The lack of a
traditional session structure made play sessions feel rambling and structurally
incoherent. The models were too willing to let players do things their
characters weren't capable of. And an AI chat interface is a bad fit for D&D
combat, which should play almost like a traditional video game.

My idea was to have the AI do what a good DM does: prep sessions ahead of time,
keep track of the world, and hold firm to the rules. The roleplaying happened
through chat, but when combat started, the game switched to a tactical UI with a
deterministic rules engine and AI-generated voxel battlemaps. I'm particularly
proud of the battlemaps; voxels are great for D&D combat, and I'm surprised that
there aren't more VTTs trying this.

Underneath all of this was a fairly involved orchestration setup powered by
Claude. Different models handled storytelling, planning, and bookkeeping, with
explicit limits on what each could see and do. Dice rolls and rules were handled
by deterministic code.

One of the more interesting architectural moves that I came up with was
something I called “enforced ignorance.” The storyteller didn't have access to
the planned plot. If an AI knows that an NPC has a plot hook to share, it tends
to barrel straight towards it, making the conversation feel stilted and
scripted. Instead, a higher-level overseer watched the conversation and waited
until enough rapport had been established before giving the storyteller what I
called “stage directions”: something like “NPC X knows more about Y, lead the
conversation in that direction.” The idea was for an NPC to feel like a person
who happens to bring up something interesting for you to do.

![Mythrun architecture. A world builder creates a durable world store from a free-text prompt. Before each session, a session prepper reads the world and sends the full prep to the overseer and only limited context to the storyteller. During play, the overseer retrieves world information and sends the storyteller stage directions. A scribe records the facts the storyteller improvises back into the world store, and a deterministic combat engine exchanges scene information and results with the storyteller.](diagrams/mythrun-architecture.svg)

Unfortunately, keeping the narrative quality where I wanted it meant that a
two-hour session cost almost $20 in API calls, even after extensive cost
optimization. I couldn't make that work as a product, so I mothballed Mythrun in
August 2026. I plan to open source some of the more interesting pieces of the
architecture for anyone in the D&D community who could get some value out of
them.
