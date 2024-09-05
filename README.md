# miklos.codes

## Description

This website is a lightweight little landing page for anyone who might be
interested in learning more about me. It's built with
[Fresh](https://fresh.deno.dev), a lightweight web framework for
[Deno](https://deno.com), and leverages [Preact](https://preactjs.com) for
rendering UI and Markdown for content.

The design of the website itself is intended to evoke my development
environment. I use VSCode with the
[Tomorrow Night Blue](https://github.com/chriskempson/tomorrow-theme) theme and
[Fira Code](https://github.com/tonsky/FiraCode) font, and so you'll see those
colors and font used throughout the site. I also opted to go as minimal as
possible with the design of individual elements to create that sense of a
text-only environment. For example, the tab buttons are simply text with a hover
effect, and I use the `<mark>` tag on the currently selected tag to emulate
being highlighted in a text editor.

Another design choice worth mentioning is that I write all the site content in
Markdown files. This allows me to keep the content separate from the code, and
it makes it easy to update things without needing to touch the codebase. When
it's time for the site to be built, the Markdown files are converted to Preact
components and injected into the site.

## TODOs

- [x] Design and build a responsive mobile layout
- [ ] Improve mobile layout (swipe between tabs, etc.)
- [] Add a blog section (If I find I have anything worth writing about)

## Running Locally

...why would you want to run my portfolio website locally? Have you evolved
beyond doing bugfixes on small open source projects and now want to do bugfixes
on small personal websites? I'm not judging, I'm just curious.

Regardless, if you'd like to run this locally, you can clone the repo and run
the following command:

`deno task start`

Other relevant scripts can be found in `deno.json`.
