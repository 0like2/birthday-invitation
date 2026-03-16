import { invitationContent } from "@/content/invitation";

const iconMap: Record<string, string> = {
  calendar: "📅",
  clock: "⏰",
  location: "📍",
  people: "👥",
};

const cardColors = [
  "bg-[color:var(--surface-strong)]",
  "bg-[color:var(--cream)]",
  "bg-[color:var(--mint)]/30",
  "bg-[color:var(--lavender)]/30",
];

export function EventInfoSection() {
  return (
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-serif-display text-2xl text-[color:var(--foreground)]">
          {invitationContent.eventInfo.sectionTitle}
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {invitationContent.eventInfo.cards.map((card, index) => (
            <article
              key={card.label}
              className={`rounded-2xl border border-[color:var(--line-soft)] p-4 text-center ${cardColors[index]}`}
            >
              <div className="text-2xl">
                {iconMap[card.icon] ?? "🎉"}
              </div>
              <p className="mt-2 text-xs font-medium tracking-wider text-[color:var(--muted-foreground)]">
                {card.label}
              </p>
              <h3 className="mt-1 font-serif-display text-lg leading-tight text-[color:var(--foreground)]">
                {card.value}
              </h3>
              <p className="mt-2 text-xs leading-5 text-[color:var(--foreground)]/60">
                {card.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
