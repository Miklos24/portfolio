// deno-lint-ignore-file react-no-danger -- trusted local markdown
import { FunctionalComponent } from "preact";

const Contact: FunctionalComponent = () => {
  return (
    <div
      className="content-container"
      dangerouslySetInnerHTML={{
        __html:
          '<p>I&#39;m currently looking for my next role. If you think I&#39;d be a fit for your team,\nreach out on <a href="https://www.linkedin.com/in/miklosbowling/">LinkedIn</a> or email me\nat <a href="mailto:miklos.bowling@gmail.com">miklos.bowling@gmail.com</a>. My resume is\n<a href="/resume.pdf">here</a> if you&#39;d like it.</p>',
      }}
    />
  );
};

export default Contact;
