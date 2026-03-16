import Image from "next/image";
import { invitationContent } from "@/content/invitation";

const frameColors = [
  "border-[color:var(--accent-soft)] bg-[color:var(--surface-strong)]",
  "border-[color:var(--lavender)] bg-[color:var(--lavender)]/20",
  "border-[color:var(--mint)] bg-[color:var(--mint)]/20",
  "border-[color:var(--peach)] bg-[color:var(--cream)]",
];

export function ArchiveSection() {
  return (
    <section className="relative px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-md">
        {/* Top-right: 영락 walking zigzag */}
        <div className="animate-zigzag pointer-events-none absolute -right-3 top-0 sm:right-0">
          <Image
            src="/stickers/yeongrak-4.png"
            alt=""
            width={85}
            height={85}
            quality={85}
          />
        </div>

        {/* Mid-left: party horn orbiting */}
        <div className="pointer-events-none absolute -left-2 top-1/2 sm:left-0">
          <div className="animate-orbit">
            <Image
              src="/stickers/party-horn.gif"
              alt=""
              width={60}
              height={60}
              unoptimized
            />
          </div>
        </div>

        <h2 className="text-center font-serif-display text-2xl text-[color:var(--foreground)]">
          {invitationContent.archive.sectionTitle}
        </h2>
        <p className="mt-2 text-center text-sm text-[color:var(--muted-foreground)]">
          {invitationContent.archive.intro}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {invitationContent.archive.frames.map((frame, index) => (
            <article
              key={frame.title}
              className={`overflow-hidden rounded-2xl border-2 p-3 ${frameColors[index]}`}
            >
              <div className="aspect-[4/5] rounded-xl bg-white/60" />
              <h3 className="mt-2 text-sm font-bold text-[color:var(--foreground)]">
                {frame.title}
              </h3>
              <p className="mt-1 text-xs leading-4 text-[color:var(--muted-foreground)]">
                {frame.caption}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-[color:var(--muted-foreground)]">
          {invitationContent.archive.note}
        </p>
      </div>
    </section>
  );
}
