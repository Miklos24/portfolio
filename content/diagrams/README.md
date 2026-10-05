# Diagrams

SVGs in this directory can be dropped into any markdown file in
`content/markdowns/` with ordinary image syntax, on a line of its own:

```md
![Short description for screen readers](diagrams/my-diagram.svg "Optional caption")
```

The alt text becomes the diagram's screen-reader label. The quoted title is
optional; when present it is shown as a caption under the diagram.

`deno task generate-components` inlines the SVG into the page (wrapped in
`<figure class="diagram">`) instead of emitting an `<img>`. Inlining is what
lets a diagram use the site's font and color variables, so the SVG files carry
no fonts or colors of their own. They are styled by the `.diagram` rules in
`static/styles.css`.

## Authoring

- Set a `viewBox` and leave off `width`/`height`; the diagram scales to the
  content column.
- Don't set `fill`, `stroke`, `font-family`, or `font-size`. Use these classes:

  | Element                | Class    | Result                                      |
  | ---------------------- | -------- | ------------------------------------------- |
  | `<rect>`               | `box`    | outlined box                                |
  | `<polyline>`, `<path>` | `line`   | connector                                   |
  | `<polygon>`            | `head`   | arrowhead                                   |
  | `<text>`               | (none)   | centered label                              |
  | `<text>`               | `title`  | larger label                                |
  | `<text>`               | `start`  | left-aligned instead of centered            |
  | `<text>`               | `end`    | right-aligned instead of centered           |
  | any of the above       | `accent` | primary color instead of secondary          |
  | any of the above       | `alt`    | tertiary color (white) instead of secondary |

- Avoid `id` attributes (and so `<marker>`/`<defs>` references): inlined SVGs
  share the page's id namespace.
