import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import tabComponents from "../components/gen/index.ts";

interface TabNavProps {
  initialTab: string;
}

function tabIndexFromName(name: string): number {
  const idx = tabComponents.findIndex((tab) => tab.name === name);
  return idx === -1 ? 0 : idx;
}

export default function TabNav({ initialTab }: TabNavProps) {
  const selected = useSignal(tabIndexFromName(initialTab));
  const tabButtonHeight = useSignal(0);
  const tabButtonRef = useRef<HTMLAnchorElement>(null);
  const isMobile = useSignal(globalThis.innerWidth < 768);

  useEffect(() => {
    const onResize = () => {
      isMobile.value = globalThis.innerWidth < 768;
    };
    globalThis.addEventListener("resize", onResize);
    return () => {
      globalThis.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    // Keep the selected tab in sync with back/forward navigation.
    const onPopState = () => {
      selected.value = tabIndexFromName(location.pathname.slice(1) || "bio");
    };
    globalThis.addEventListener("popstate", onPopState);
    return () => {
      globalThis.removeEventListener("popstate", onPopState);
    };
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      tabButtonHeight.value = tabButtonRef.current?.clientHeight ?? 0;
    });
    if (tabButtonRef.current) {
      resizeObserver.observe(tabButtonRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [tabButtonRef]);

  const SelectedTab = tabComponents[selected.value].component;

  return (
    <div className="main-container">
      <nav>
        <ul>
          {tabComponents.map(({ name }, idx) => (
            <li key={name}>
              <a
                href={`/${name}`}
                ref={tabButtonRef}
                onClick={(e) => {
                  // Let modified clicks (new tab, etc.) fall through to the browser.
                  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                  e.preventDefault();
                  selected.value = idx;
                  history.pushState(null, "", `/${name}`);
                }}
              >
                {selected.value === idx ? <mark>{name}</mark> : name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {!isMobile.value && (
        <span
          style={{
            transform: `translateY(${((0.5 + selected.value) *
              tabButtonHeight.value)}px)`,
          }}
          className="tab-indicator"
        >
        </span>
      )}
      <SelectedTab />
    </div>
  );
}
