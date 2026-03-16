import Image from "next/image";
import { invitationContent } from "@/content/invitation";

const emojiMap: Record<string, string> = {
  door: "🚪",
  crown: "👑",
  drink: "🥂",
  cake: "🎂",
  gift: "🎁",
  game: "🎲",
  book: "📖",
  camera: "📸",
  music: "🎵",
};

const dotColors = [
  "bg-[color:var(--accent)]",
  "bg-[color:var(--accent-soft)]",
  "bg-[color:var(--mint-deep)]",
  "bg-[color:var(--lavender-deep)]",
  "bg-[color:var(--peach)]",
  "bg-[color:var(--accent)]",
  "bg-[color:var(--mint-deep)]",
  "bg-[color:var(--lavender-deep)]",
  "bg-[color:var(--accent-soft)]",
];

export function TimetableSection() {
  return (
    <section className="relative px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-md">
        {/* Top-left: 상욱 throne swaying */}
        <div className="animate-sway pointer-events-none absolute -left-3 top-2 sm:left-0">
          <Image
            src="/stickers/sanguk-throne.png"
            alt=""
            width={350}
            height={350}
            quality={85}
          />
        </div>

        {/* Mid-right: cat drifting */}
        <div className="animate-drift-left pointer-events-none absolute -right-2 top-1/3 sm:right-0">
          <Image
            src="/stickers/cute-cat.gif"
            alt=""
            width={200}
            height={200}
            unoptimized
          />
        </div>

        {/* Bottom-left: party horn twinkling */}
        <div className="animate-twinkle pointer-events-none absolute bottom-8 -left-1 sm:left-2">
          <Image
            src="/stickers/party-horn.gif"
            alt=""
            width={200}
            height={200}
            unoptimized
          />
        </div>

        <h2 className="text-center font-serif-display text-2xl text-[color:var(--foreground)]">
          {invitationContent.timetable.sectionTitle}
        </h2>

        <div className="mt-6 rounded-3xl border border-[color:var(--lavender)] bg-white p-5 shadow-lg shadow-[rgba(232,218,248,0.15)]">
          <div className="space-y-0">
            {invitationContent.timetable.items.map((item, index) => (
              <div key={`${item.time}-${item.title}`} className="flex gap-4">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`h-8 w-8 shrink-0 rounded-full ${dotColors[index]} flex items-center justify-center text-sm`}
                  >
                    {emojiMap[item.emoji] ?? "🎉"}
                  </div>
                  {index !== invitationContent.timetable.items.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[color:var(--lavender)]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-6">
                  <p className="text-xs font-bold tracking-wider text-[color:var(--accent-deep)]">
                    {item.time}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[color:var(--foreground)]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-[color:var(--muted-foreground)]">
          {invitationContent.timetable.note}
        </p>
      </div>
    </section>
  );
}
