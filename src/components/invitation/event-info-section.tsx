import { invitationContent } from "@/content/invitation";
import { SectionShell } from "@/components/invitation/section-shell";

export function EventInfoSection() {
  return (
    <SectionShell
      eyebrow="event details"
      title={invitationContent.eventInfo.sectionTitle}
      description="초대장에서 가장 빨리 확인해야 할 정보를 카드처럼 정리했습니다."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {invitationContent.eventInfo.cards.map((card) => (
          <article
            key={card.label}
            className="rounded-[24px] border border-[color:var(--line-soft)] bg-[color:var(--surface)] px-4 py-4"
          >
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
              {card.label}
            </p>
            <h3 className="mt-3 font-serif-display text-[1.7rem] leading-tight text-[color:var(--foreground)]">
              {card.value}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--foreground)]/66">
              {card.note}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
