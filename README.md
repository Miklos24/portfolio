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

- Design and build a responsive mobile layout
- Add a blog section (If I find I have anything worth writing about)

## Running Locally

...why would you want to run my portfolio website locally? Have you evolved
beyond doing bugfixes on small open source projects and now want to do bugfixes
on small personal websites? I'm not judging, I'm just curious.

Regardless, if you'd like to run this locally, you can clone the repo and run
the following command:

`deno task start`

Other relevant scripts can be found in `deno.json`.

## Website Content for Those Who Prefer to Consume Information Through READMEs Instead of Interacting With the Lovely Website I Built

If, for some reason, you'd prefer to see all my website content in one place,
here it is in glorious markdown:

### Bio

I work on the front end of [PayPal login](https://paypal.com/login), and I'm
passionate about building accessible, performant, and delightful user
experiences.

When I'm not coding, I enjoy hitting the climbing gym, getting out into the
woods, and rolling dice with some friends.

### Projects

#### personal website [↗](https://github.com/Miklos24/portfolio)

You're looking at it!

This website was built using [Fresh](https://fresh.deno.dev), a lightweight web
framework for [Deno](https://deno.com). It leverages
[Preact](https://preactjs.com) for rendering UI and Markdown for content, and
contains all the information I might want a curious visitor to know about me.

---

#### hairbypage.com [↗](https://github.com/Miklos24/hair-by-page)

I built [hairbypage.com](https://hairbypage.com) for my partner's hairdressing
business, Hair By Page. It's built with [Next.js](https://nextjs.org) and
[React](https://reactjs.org), and calls the
[Instagram](https://developers.facebook.com/docs/instagram-basic-display-api/)
and [Twilio](https://www.twilio.com/docs/messaging) APIs to display her latest
posts and allow clients to book appointments.

### Skills

I specialize in building performant, testable, and scalable web applications
with a focus on React and TypeScript.

---

#### languages

##### use on a daily basis

- JavaScript (ES6+)
- TypeScript
- CSS/SASS
- Python

##### significant prior experience with

- C++
- Java
- SQL

---

#### tools and frameworks

##### use on a daily basis

- React
- Redux
- Jest
- Cypress
- GraphQL
- Node.js
- Next.js
- Git/GitHub

##### significant prior experience with

- MongoDB
- Express
- Redis
- Amazon S3
- Docker

---

#### methodologies

- Agile
- Scrum
- Test-Driven Development
- Continuous Integration/Continuous Deployment
- RESTful API Design
- Microservices Architecture

### Contact

Feel free to reach out to me on
[LinkedIn](https://www.linkedin.com/in/miklosbowling) or email me at
[miklos.bowling@gmail.com](mailto:miklos.bowling@gmail.com).

I'm always interested in hearing about new opportunities or fielding any
questions you might have. Look forward to hearing from you!
