"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

type ThemeId = "dark" | "light" | "ember" | "aurora";

type ThemeOption = {
  id: ThemeId;
  label: string;
  ground: string;
  accent: string;
};

const themes: ThemeOption[] = [
  { id: "dark", label: "Dark", ground: "#18181b", accent: "#bb86fc" },
  { id: "light", label: "Light", ground: "#fafaf9", accent: "#7c3aed" },
  { id: "ember", label: "Ember", ground: "#140d10", accent: "#f72585" },
  { id: "aurora", label: "Aurora", ground: "#070b1c", accent: "#3ee594" },
];

const COOKIE_NAME = "theme";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const ThemeSwitcher = ({ initialTheme }: { initialTheme?: string }) => {
  const [active, setActive] = useState<ThemeId>(
    themes.some((t) => t.id === initialTheme)
      ? (initialTheme as ThemeId)
      : "dark",
  );
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<ThemeId | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const applyTheme = useCallback((id: ThemeId) => {
    setActive(id);
    document.documentElement.setAttribute("data-theme", id);
    document.cookie = `${COOKIE_NAME}=${id};path=/;max-age=${COOKIE_MAX_AGE};SameSite=Lax`;
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const focusDot = (index: number) => {
    const next = (index + themes.length) % themes.length;
    dotRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        setOpen(true);
        focusDot(index + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        setOpen(true);
        focusDot(index - 1);
        break;
      case "Home":
        e.preventDefault();
        setOpen(true);
        focusDot(0);
        break;
      case "End":
        e.preventDefault();
        setOpen(true);
        focusDot(themes.length - 1);
        break;
      case "Escape":
        setOpen(false);
        break;
    }
  };

  return (
    <div
      ref={wrapRef}
      className="fixed bottom-5 right-5 z-50"
      onMouseLeave={() => setHovered(null)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setOpen(false);
          setHovered(null);
        }
      }}
    >
      {hovered && (
        <div className="pointer-events-none absolute right-0 bottom-full mb-2 rounded-md border border-divider bg-background px-2 py-1 text-xs whitespace-nowrap text-link shadow-lg">
          {themes.find((t) => t.id === hovered)?.label}
        </div>
      )}
      <div
        role="radiogroup"
        aria-label="Color theme"
        className="flex items-center rounded-full border border-divider bg-background/90 p-1.5 shadow-lg backdrop-blur transition-all"
      >
        {themes.map((theme, index) => {
          const isActive = theme.id === active;
          const visible = open || isActive;
          return (
            <button
              key={theme.id}
              ref={(el) => {
                dotRefs.current[index] = el;
              }}
              type="button"
              role="radio"
              aria-checked={isActive}
              aria-label={`${theme.label} theme`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => {
                if (!open) {
                  setOpen(true);
                } else {
                  applyTheme(theme.id);
                  setOpen(false);
                }
              }}
              onKeyDown={(e) => onKeyDown(e, index)}
              onMouseEnter={() => setHovered(theme.id)}
              onFocus={() => setHovered(theme.id)}
              style={{
                background: `linear-gradient(135deg, ${theme.ground} 50%, ${theme.accent} 50%)`,
              }}
              className={`h-6 shrink-0 rounded-full border border-black/25 transition-all duration-200 ${
                visible ? "w-6 opacity-100" : "w-0 opacity-0"
              } ${open ? "mx-1" : "mx-0"} ${
                visible ? "" : "pointer-events-none"
              } ${
                isActive
                  ? "ring-2 ring-secondary ring-offset-1 ring-offset-background"
                  : ""
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
