import React from "react";

export default function useEscapeKey(callback) {
  React.useEffect(() => {
    const handleKeyDown = (ev) => {
      if (ev.key === "Escape") {
        callback([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
}
