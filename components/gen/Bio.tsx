import { FunctionalComponent } from "preact";

const Bio: FunctionalComponent = () => {
  return (
    <div className="content-container">
      <p>
        I work on the front end of{" "}
        <a href="https://paypal.com/login">PayPal login</a>, and I&#39;m
        passionate about building accessible, performant, and delightful user
        experiences.
      </p>
      <p>
        When I&#39;m not coding, I enjoy hitting the climbing gym, getting out
        into the woods, and rolling dice with some friends.
      </p>
    </div>
  );
};

export default Bio;
