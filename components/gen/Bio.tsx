import { FunctionalComponent } from "preact";

const Bio: FunctionalComponent = () => {
  return (
    <div className="content-container">
      <p>
        I work on product engineering for{" "}
        <a href="https://facebook.com/">Facebook</a>{" "}
        at Meta, and I&#39;m passionate about building engaging, performant, and
        clean user experiences.
      </p>
      <p>
        When I&#39;m not coding, I enjoy hitting the climbing gym, getting out
        into the woods, and rolling d20s with some friends.
      </p>
    </div>
  );
};

export default Bio;
