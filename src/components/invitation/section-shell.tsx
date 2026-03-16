import { ReactNode } from "react";

type SectionShellProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionShell({
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section className="px-4 py-7 sm:px-6">
      <div className="mx-auto max-w-md rounded-3xl border border-[color:var(--line-soft)] bg-white p-5 shadow-lg shadow-[rgba(255,107,138,0.06)]">
        <p className="text-center text-xs font-medium tracking-wider text-[color:var(--accent)]">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-center font-serif-display text-2xl leading-tight text-[color:var(--foreground)]">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 text-center text-sm leading-6 text-[color:var(--foreground)]/65">
            {description}
          </p>
        ) : null}
        <div className="mt-5">{children}</div>
      </div>
    </section>
  );
}
