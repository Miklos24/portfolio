import { FunctionalComponent } from "preact";

interface Tab {
  name: string;
  component: FunctionalComponent;
}

import Bio from "./Bio.tsx";
import Projects from "./Projects.tsx";
import Experience from "./Experience.tsx";
import Skills from "./Skills.tsx";
import Contact from "./Contact.tsx";

const tabComponents: Tab[] = [
  { name: "bio", component: Bio },
  { name: "projects", component: Projects },
  { name: "experience", component: Experience },
  { name: "skills", component: Skills },
  { name: "contact", component: Contact },
];

export default tabComponents;
