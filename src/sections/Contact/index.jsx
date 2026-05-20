import { contactLocales } from "./locales";
import EmailBlock from "./__components/EmailBlock";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-14 bg-[var(--color-surface-soft)] border-t border-[var(--color-border)]">
      <div className="container-lg section-pad">
        <p className="text-xs font-medium text-[var(--color-ink-muted)] uppercase tracking-widest mb-5">
          {contactLocales.sectionLabel}
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-ink)] mb-4">
          {contactLocales.heading}
        </h2>
        <p className="text-sm text-[var(--color-ink-muted)] max-w-md mb-10 leading-relaxed">
          {contactLocales.subheading}
        </p>
        <EmailBlock />
        <div className="flex flex-wrap gap-4 mt-10 pt-10 border-t border-[var(--color-border)]">
          {contactLocales.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors duration-200">
              <span className="font-medium">{link.label}</span>
              <span className="text-[var(--color-ink-faint)]">{link.handle}</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1.5 8.5L8.5 1.5M8.5 1.5H4M8.5 1.5V6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-[var(--color-border)]">
        <div className="container-lg py-5">
          <p className="text-xs text-[var(--color-ink-faint)]">{contactLocales.footer.copy}</p>
        </div>
      </div>
    </section>
  );
}