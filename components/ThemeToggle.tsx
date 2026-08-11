"use client";

import { useEffect, useState } from "react";
import type { Theme } from "@/lib/content";

/**
 * The site's single piece of client state.
 * The real theme is applied to <html data-theme> before paint by the
 * inline script in the layout (no flash of wrong theme). This button
 * flips that attribute, persists the choice to localStorage, and keeps
 * its own label ("dark"/"light") in sync.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light" || current === "dark") setTheme(current);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("akv-theme", next);
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="akv-toggle"
      style={{
        fontFamily: "var(--ff-mono)",
        fontSize: 12,
        color: "var(--ink2)",
        background: "transparent",
        border: "1px solid var(--line)",
        borderRadius: 20,
        padding: "6px 12px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
      }}
    >
      <span aria-hidden="true">&#9680;</span>
      <span suppressHydrationWarning>{theme}</span>
    </button>
  );
}
