import { invitationContent } from "@/content/invitation";
import { SectionShell } from "@/components/invitation/section-shell";

export function InvitationSection() {
  return (
    <SectionShell
      eyebrow="party invitation"
      title={invitationContent.invitation.sectionTitle}
    >
      <div className="rounded-[28px] border border-[color:var(--line-soft)] bg-[linear-gradient(180deg,rgba(255,250,244,0.96),rgba(255,232,216,0.72))] p-5 shadow-[0_24px_50px_rgba(255,91,91,0.08)]">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[rgba(255,91,91,0.1)] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--accent)]">
          <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
          특별 초대문
        </div>
        <div className="space-y-3 text-[15px] leading-7 text-[color:var(--foreground)]/78">
          {invitationContent.invitation.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-6 border-t border-[color:var(--line-soft)] pt-4 font-serif-display text-[1.4rem] italic text-[color:var(--accent-deep)]">
          {invitationContent.invitation.pullQuote}
        </p>
      </div>
    </SectionShell>
  );
}
