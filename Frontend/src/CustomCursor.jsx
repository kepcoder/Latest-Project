import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hideCursor, setHideCursor] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current && !hideCursor) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleCursorToggle = (e) => {
      setHideCursor(e.detail); // true or false
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("cursor-toggle", handleCursorToggle);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("cursor-toggle", handleCursorToggle);
    };
  }, [hideCursor]);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor transition-opacity duration-300 ${
        hideCursor ? "opacity-0" : "opacity-100"
      }`}
    />
  );
};

export default CustomCursor;

// Utility function to use in other components
export const toggleCursor = (shouldHide) => {
  window.dispatchEvent(new CustomEvent("cursor-toggle", { detail: shouldHide }));
};
