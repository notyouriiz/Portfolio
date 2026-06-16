"use client";

import { useEffect, useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectTabs({ projects }) {
    const tabs = useMemo(
        () => [...new Set(projects.map((project) => project.category))],
        [projects]
      );

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    const updateTabFromHash = () => {
      const hash = window.location.hash;

      const matchingTab = tabs.find(
        (tab) => `#projects-${slugify(tab)}` === hash
      );

      if (matchingTab) {
        setActiveTab(matchingTab);

        const projectsSection = document.getElementById("projects");

        if (projectsSection) {
          projectsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    updateTabFromHash();

    window.addEventListener("hashchange", updateTabFromHash);

    return () => {
      window.removeEventListener("hashchange", updateTabFromHash);
    };
  }, [tabs]);

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);

              window.history.replaceState(
                null,
                "",
                `#projects-${slugify(tab)}`
              );
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${
                activeTab === tab
                  ? "bg-gray-200 text-[var(--color-ink)]"
                  : "text-[var(--color-ink-muted)] hover:bg-gray-100"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.number}
            project={project}
          />
        ))}
      </div>
    </>
  );
}