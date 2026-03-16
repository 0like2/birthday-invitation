import Image from "next/image";
import { invitationContent } from "@/content/invitation";

export function InvitationSection() {
  return (
    <section className="relative px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-md">
        {/* Decorative prince sticker */}
        <div className="animate-wiggle pointer-events-none absolute -right-2 top-4 sm:right-8">
          <Image
            src="/stickers/prince-stickers-a.png"
            alt=""
            width={80}
            height={80}
            className="object-contain object-[0%_0%]"
            quality={85}
          />
        </div>

        <div className="rounded-3xl border border-[color:var(--accent-soft)] bg-white p-6 shadow-lg shadow-[rgba(255,107,138,0.08)]">
          <h2 className="text-center font-serif-display text-2xl text-[color:var(--accent-deep)]">
            {invitationContent.invitation.sectionTitle}
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-[color:var(--accent-soft)]" />

          {/* Three Princes Transparent Illustration */}
          <div className="mx-auto mt-4 w-48">
            <Image
              src="/stickers/three-princes-transparent.png"
              alt="세 왕자님"
              width={400}
              height={400}
              className="w-full"
              quality={90}
            />
          </div>

          <div className="mt-4 space-y-4 text-center text-[15px] leading-7 text-[color:var(--foreground)]/80">
            {invitationContent.invitation.body.map((line) => (
              <p key={line} className="whitespace-pre-line">
                {line}
              </p>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-[color:var(--surface-strong)] p-4 text-center">
            <p className="whitespace-pre-line font-serif-display text-lg leading-relaxed text-[color:var(--accent-deep)]">
              {invitationContent.invitation.pullQuote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
