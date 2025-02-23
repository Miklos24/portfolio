import { FunctionalComponent } from "preact";

const Experience: FunctionalComponent = () => {
  return (
    <div className="content-container">
      <h2>software engineer @ Meta</h2>
      <h3>
        <em>(2025 - present)</em>
      </h3>
      <p>
        I recently joined <a href="https://www.meta.com">Meta</a>{" "}
        to build visual search advertising on{" "}
        <a href="https://www.facebook.com">Facebook</a>, helping users discover
        products they&#39;re interested in directly from images. I work across
        the product stack, from crafting the UI with{" "}
        <a href="https://reactjs.org">React</a>{" "}
        to integrating with object recognition systems.
      </p>
      <h2>software engineer @ PayPal</h2>
      <h3>
        <em>(2022 - 2025)</em>
      </h3>
      <p>
        I worked on{" "}
        <a href="https://paypal.com/login">PayPal login</a>, where I built the
        front end with React and&nbsp;{" "}
        <a href="https://www.typescriptlang.org">TypeScript</a>,
        leveraging&nbsp; <a href="https://nextjs.org">Next.js</a>{" "}
        for server-side rendering. I also had a hand in implementing a{" "}
        <a href="https://graphql.org">GraphQL</a>{" "}
        midlayer and ensuring strong unit and end-to-end test coverage.
      </p>
    </div>
  );
};

export default Experience;
