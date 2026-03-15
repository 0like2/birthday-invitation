import { invitationContent } from "@/content/invitation";
import { SectionShell } from "@/components/invitation/section-shell";

const toneClasses = {
  gold:
    "bg-[linear-gradient(180deg,rgba(214,179,106,0.28),rgba(255,250,244,0.96))] text-[color:var(--foreground)]",
  navy:
    "bg-[linear-gradient(180deg,rgba(17,24,39,0.96),rgba(31,41,55,0.92))] text-[color:var(--surface)]",
  wine:
    "bg-[linear-gradient(180deg,rgba(110,59,68,0.9),rgba(40,28,36,0.92))] text-[color:var(--surface)]",
} as const;

function getToneClass(tone: string) {
  return toneClasses[tone as keyof typeof toneClasses] ?? toneClasses.gold;
}

export function ArchiveSection() {
  return (
    <SectionShell
      eyebrow="archive"
      title={invitationContent.archive.sectionTitle}
      description={invitationContent.archive.intro}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {invitationContent.archive.frames.map((frame, index) => (
          <article
            key={frame.title}
            className={`overflow-hidden rounded-[28px] border border-[color:var(--line-soft)] p-4 shadow-[0_24px_48px_rgba(17,24,39,0.08)] ${getToneClass(frame.tone)}`}
          >
            <div className="rounded-[22px] border border-white/20 p-3">
              <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.28em] opacity-75">
                <span>frame 0{index + 1}</span>
                <span>35mm mood</span>
              </div>
              <div className="mt-4 aspect-[4/5] rounded-[18px] border border-white/15 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(17,24,39,0.18))]" />
              <h3 className="mt-4 font-serif-display text-[1.7rem] leading-tight">
                {frame.title}
              </h3>
              <p className="mt-2 text-sm leading-6 opacity-80">{frame.caption}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-[color:var(--muted-foreground)]">
        {invitationContent.archive.note}
      </p>
    </SectionShell>
  );
}
