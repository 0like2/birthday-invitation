import { invitationContent } from "@/content/invitation";
import { SectionShell } from "@/components/invitation/section-shell";

export function InvitationSection() {
  return (
    <SectionShell
      eyebrow="invitation"
      title={invitationContent.invitation.sectionTitle}
    >
      <div className="rounded-[28px] border border-[color:var(--line-soft)] bg-[linear-gradient(180deg,rgba(255,250,244,0.96),rgba(247,243,236,0.8))] p-5">
        <div className="space-y-3 text-[15px] leading-7 text-[color:var(--foreground)]/76">
          {invitationContent.invitation.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-6 border-t border-[color:var(--line-soft)] pt-4 font-serif-display text-xl italic text-[color:var(--accent-deep)]">
          {invitationContent.invitation.pullQuote}
        </p>
      </div>
    </SectionShell>
  );
}
