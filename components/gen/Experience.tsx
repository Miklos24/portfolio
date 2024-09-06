import { FunctionalComponent } from "preact";

const Experience: FunctionalComponent = () => {
  return (
    <div className="content-container">
      <h2>software engineer @ PayPal</h2>
      <h3>
        <em>(2022 - present)</em>
      </h3>
      <p>
        I work on{" "}
        <a href="https://paypal.com/login">PayPal login</a>, where I build the
        front end with <a href="https://reactjs.org">React</a> and&nbsp;
        <a href="https://www.typescriptlang.org">TypeScript</a>,
        leveraging&nbsp;
        <a href="https://nextjs.org">Next.js</a>{" "}
        for server-side rendering. I&#39;ve also had a hand in implementing a
        {" "}
        <a href="https://graphql.org">GraphQL</a>{" "}
        midlayer and ensuring strong unit and end-to-end test coverage.
      </p>
    </div>
  );
};

export default Experience;
