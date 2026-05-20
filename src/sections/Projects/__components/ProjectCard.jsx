import Image from "next/image";

export default function ProjectCard({ project }) {
  const isValidLink = (url) => !!url && url !== "#";

  const hasPrimary = isValidLink(project.primaryLink);
  const hasSecondary = isValidLink(project.secondaryLink);

  // Get domain safely
  const getDomain = (url) => {
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return "";
    }
  };

  // Icon resolver
  const getIcon = (url) => {
    if (!url) return "/assets/link.svg";

    const domain = getDomain(url);

    if (domain.includes("github.com")) return "/assets/github-icon.png";
    if (domain.includes("drive.google.com")) return "/assets/drive-icon.png";
    if (domain.includes("growithm.id")) return "/assets/growithm-icon.png";
    if (domain.includes("vercel.app") || domain.includes("netlify.app"))
      return "/assets/research-icon.jpg";

    return "/assets/research-icon.jpg";
  };

  return (
    <article className="group flex flex-col sm:flex-row gap-6 sm:gap-10 py-10 border-t border-[var(--color-border)] hover:bg-[var(--color-surface-soft)] -mx-4 px-4 rounded-xl transition-colors duration-200">
      
      {/* NUMBER */}
      <div className="shrink-0">
        <span className="text-xs font-mono text-[var(--color-ink-faint)]">
          {project.number}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex-1 min-w-0">
        
        {/* HEADER */}
        <div className="flex items-start justify-between gap-4 mb-2">

          {/* LEFT */}
          <div className="flex-1 min-w-0">
            <span className="tag mb-2 inline-block">{project.type}</span>

            <h3 className="text-lg font-semibold text-[var(--color-ink)] tracking-tight">
              {project.name}
            </h3>

            <p className="text-xs text-[var(--color-ink-muted)] mt-0.5">
              {project.role}
            </p>
          </div>

          {/* RIGHT (ICONS) */}
          <div className="flex gap-2 shrink-0">

            {hasPrimary && (
              <a
                href={project.primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] rounded-full group-hover:border-[var(--color-ink)] transition-colors"
              >
                <Image
                  src={getIcon(project.primaryLink)}
                  alt="Project link"
                  width={16}
                  height={16}
                />
              </a>
            )}

            {hasSecondary && (
              <a
                href={project.secondaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] rounded-full group-hover:border-[var(--color-ink)] transition-colors"
              >
                <Image
                  src={getIcon(project.secondaryLink)}
                  alt="Project link"
                  width={16}
                  height={16}
                />
              </a>
            )}

          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed mb-4 max-w-2xl">
          {project.description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}