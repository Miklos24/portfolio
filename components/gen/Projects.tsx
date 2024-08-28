export default function Projects() {
  return (
    <div className="content-container">
      <h2>
        personal website <a href="https://github.com/Miklos24/portfolio">↗</a>
      </h2>
      <p>You&#39;re looking at it!</p>
      <p>
        This website was built using{" "}
        <a href="https://fresh.deno.dev">Fresh</a>, a lightweight web framework
        for <a href="https://deno.com">Deno</a>. It leverages&nbsp;
        <a href="https://preactjs.com">Preact</a>{" "}
        for rendering UI and Markdown for content, and contains all the
        information I might want a curious visitor to know about me.
      </p>
      <hr />
      <h2>
        hairbypage.com <a href="https://github.com/Miklos24/hair-by-page">↗</a>
      </h2>
      <p>
        I built <a href="https://hairbypage.com">hairbypage.com</a>{" "}
        for my partner&#39;s hairdressing business, Hair By Page. It&#39;s built
        with <a href="https://nextjs.org">Next.js</a> and&nbsp;
        <a href="https://reactjs.org">React</a>, and calls the&nbsp;
        <a href="https://developers.facebook.com/docs/instagram-basic-display-api/">
          Instagram
        </a>
        &nbsp;and <a href="https://www.twilio.com/docs/messaging">Twilio</a>
        {" "}
        APIs to display her latest posts and allow clients to book appointments.
      </p>
    </div>
  );
}
