import { useEffect, useRef, useState } from "react";
import pawIcon from "@/assets/paw.svg";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "[role='button']",
  "input",
  "textarea",
  "select",
  "label[for]",
  "[data-cursor='interactive']",
].join(", ");

const HOTSPOT_X = 16;
const HOTSPOT_Y = 16;

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const syncEnabledState = () => {
      const nextEnabled = mediaQuery.matches;
      setEnabled(nextEnabled);
      setVisible(false);
      setInteractive(false);
      setPressed(false);
      document.body.classList.toggle("has-custom-cursor", nextEnabled);
    };

    syncEnabledState();
    mediaQuery.addEventListener("change", syncEnabledState);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      mediaQuery.removeEventListener("change", syncEnabledState);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const hideCursor = () => setVisible(false);
    const showCursor = () => setVisible(true);

    const moveCursor = (event: MouseEvent) => {
      const x = event.clientX - HOTSPOT_X;
      const y = event.clientY - HOTSPOT_Y;

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });

      setVisible(true);

      const target = event.target instanceof Element ? event.target : null;
      setInteractive(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };

    const pressCursor = () => setPressed(true);
    const releaseCursor = () => setPressed(false);
    const handleDocumentLeave = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        setVisible(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", pressCursor);
    window.addEventListener("mouseup", releaseCursor);
    window.addEventListener("blur", hideCursor);
    document.addEventListener("mouseleave", handleDocumentLeave);
    document.addEventListener("mouseenter", showCursor);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", pressCursor);
      window.removeEventListener("mouseup", releaseCursor);
      window.removeEventListener("blur", hideCursor);
      document.removeEventListener("mouseleave", handleDocumentLeave);
      document.removeEventListener("mouseenter", showCursor);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={[
        "custom-cursor",
        visible ? "is-visible" : "",
        interactive ? "is-interactive" : "",
        pressed ? "is-pressed" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="custom-cursor__visual">
        <div className="custom-cursor__shadow" />
        <img src={pawIcon} alt="" className="custom-cursor__pointer" />
      </div>
    </div>
  );
};

export default CustomCursor;
