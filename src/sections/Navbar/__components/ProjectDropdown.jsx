"use client";

import { useState } from "react";
import { projectsLocales } from "../../Projects/locales";

export default function ProjectDropdown() {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);

  const tabs = [
    ...new Set(projectsLocales.projects.map((project) => project.category)),
  ];

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const handleClick = () => {
    setPinned(!pinned);
    setOpen(!open);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        if (!pinned) {
          setOpen(false);
        }
      }}
    >
      <button
        onClick={handleClick}
        className="flex items-center gap-1.5 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors duration-200"
      >
        Projects
        <span
          className={`inline-block w-1.5 h-1.5 border-r border-b border-current transition-transform duration-200 ${
            open ? "-rotate-135" : "rotate-45"
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="min-w-[200px] rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg p-2">
            {tabs.map((tab) => (
              <a
                key={tab}
                href={`#projects-${slugify(tab)}`}
                onClick={() => {
                  setOpen(false);
                  setPinned(false);
                }}
                className="block px-3 py-2 rounded-lg text-sm text-[var(--color-ink-muted)] hover:bg-gray-100 hover:text-[var(--color-ink)] transition-colors"
              >
                {tab}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
