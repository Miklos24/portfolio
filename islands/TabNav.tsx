import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import { ComponentChild } from "preact";

interface TabNavProps {
  tabNames: string[];
  children: ComponentChild[];
}

export default function TabNav({ tabNames, children }: TabNavProps) {
  const selected = useSignal(0);
  const tabButtonHeight = useSignal(0);
  const tabButtonRef = useRef<HTMLButtonElement>(null);
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
    tabButtonHeight.value = tabButtonRef.current?.clientHeight ?? 0;
  }, [tabButtonRef]);

  return (
    <div className="main-container">
      <nav>
        <ul>
          {tabNames.map((tab, idx) => (
            <li key={tab}>
              <button
                ref={tabButtonRef}
                onClick={() => {
                  selected.value = idx;
                }}
              >
                {selected.value === idx ? <mark>{tab}</mark> : tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {!isMobile.value && (
        <span
          style={{
            transform:
              `translateY(${((0.5 + selected.value) *
                tabButtonHeight.value)}px)`,
          }}
          className="tab-indicator"
        >
        </span>
      )}
      {children[selected.value]}
    </div>
  );
}
