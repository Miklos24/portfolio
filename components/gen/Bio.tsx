// deno-lint-ignore-file react-no-danger -- trusted local markdown
import { FunctionalComponent } from "preact";

const Bio: FunctionalComponent = () => {
  return (
    <div
      className="content-container"
      dangerouslySetInnerHTML={{
        __html:
          "<p>I&#39;m a software engineer who spent the last few years building consumer products\nat PayPal and Meta. Most recently, I worked on everyone&#39;s favorite part of\nFacebook: ads. The product itself wasn&#39;t the most inspiring to me, but I really\nenjoyed owning my features and figuring out how to improve them through\nexperimentation and data analysis.</p>\n<p>In early 2026, I left Meta to build Mythrun, an AI-powered platform for D&amp;D 5e.\nAI coding tools had gotten good enough that it felt possible to do this as a\nsolo dev, and as a longtime DM, I thought I could do better than the existing\nofferings. It was one of the most enjoyable coding experiences I&#39;ve ever had,\nbut even after extensive cost optimization, a two-hour session cost almost $20\nin API calls. I mothballed it in August, though I plan to open source some of\nthe more interesting pieces.</p>\n<p>I&#39;ve also become increasingly concerned about AI alignment and safety. AI could\ndo enormous good for humanity, but it could also go very wrong in some very\nscary ways, and I want to help make sure we get the good outcomes. I&#39;m open to\nsoftware engineering roles broadly, but AI safety is the direction I want to\nwork towards.</p>\n<p>When I&#39;m not coding (or telling Claude what to code for me), I enjoy hitting the\nclimbing gym, getting out into the woods, and rolling d20s with some friends.</p>",
      }}
    />
  );
};

export default Bio;
