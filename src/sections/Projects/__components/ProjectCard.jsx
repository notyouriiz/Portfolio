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
    if (domain.includes("figma.com")) return "/assets/figma-icon.png";
    if (domain.includes("datastudio.google.com")) return "/assets/datastudio-icon.png";
    if (
      ["vercel.app", "netlify.app", "streamlit.app"].some((platform) =>
        domain.includes(platform)
      )
    ) {
      return "/assets/live-icon.png";
    }

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
                  style={{
                    width: "16px",
                    height: "16px",
                  }}
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

        {/* MEDIA */}
        {project.media?.type === "gallery" && (() => {
          const allItems = project.media.images; // can now include { type: "video", src: "..." }
          const videos   = allItems.filter(item => item.type === "video");
          const portrait = allItems.filter(item => item.type !== "video" && item.aspect === "portrait");
          const landscape = allItems.filter(item => item.type !== "video" && item.aspect !== "portrait");

          return (
            <div className="flex flex-col gap-4 mb-5">
              {/* Videos: full width, autoplay like a GIF */}
              {videos.map((item, index) => (
                <video
                  key={`vid-${index}`}
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-auto max-h-[520px] max-w-full rounded-xl border border-[var(--color-border)]"
                />
              ))}

              {/* Landscape images: full width */}
              {landscape.map((img, index) => (
                <Image
                  key={`land-${index}`}
                  src={typeof img === "string" ? img : img.src}
                  alt={`${project.name} landscape ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl border border-[var(--color-border)]"
                  unoptimized
                />
              ))}

              {/* Portrait images: side by side */}
              {portrait.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {portrait.map((img, index) => (
                    <Image
                      key={`port-${index}`}
                      src={typeof img === "string" ? img : img.src}
                      alt={`${project.name} portrait ${index + 1}`}
                      width={400}
                      height={600}
                      className="w-full h-auto rounded-xl border border-[var(--color-border)]"
                      unoptimized
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })()}

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