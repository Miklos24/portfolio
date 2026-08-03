import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import tabComponents from "../components/gen/index.ts";

export default function TabNav() {
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
              <button
                type="button"
                ref={tabButtonRef}
                onClick={() => {
                  selected.value = idx;
                }}
              >
                {selected.value === idx ? <mark>{name}</mark> : name}
              </button>
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
