import { HttpError, type PageProps } from "fresh";
import SitePage from "../components/SitePage.tsx";
import tabComponents from "../components/gen/index.ts";

const tabNames = tabComponents.map(({ name }) => name);

export default function TabPage({ params }: PageProps) {
  const tab = params.tab;
  if (!tabNames.includes(tab)) {
    throw new HttpError(404);
  }
  return <SitePage tab={tab} />;
}
