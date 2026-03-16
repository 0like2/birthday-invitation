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
        {/* Floating prince sticker */}
        <div className="animate-float-reverse pointer-events-none absolute -right-1 top-2 sm:right-6">
          <Image
            src="/stickers/prince-stickers-c.png"
            alt=""
            width={70}
            height={70}
            className="object-contain object-[50%_50%]"
            quality={85}
          />
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
