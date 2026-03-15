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
    <section className="px-5 py-7 sm:px-6">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-[color:var(--line-soft)] bg-[color:var(--surface)] px-5 py-6 shadow-[0_28px_60px_rgba(17,24,39,0.08)] md:px-7 md:py-7">
        <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--accent)]">
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-xl font-serif-display text-[2rem] leading-tight text-[color:var(--foreground)] md:text-[2.4rem]">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--foreground)]/68 md:text-[15px]">
            {description}
          </p>
        ) : null}
        <div className="mt-5">{children}</div>
      </div>
    </section>
  );
}
