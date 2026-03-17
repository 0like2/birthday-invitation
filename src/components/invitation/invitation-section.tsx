import Image from "next/image";
import { invitationContent } from "@/content/invitation";

export function InvitationSection() {
  return (
    <section className="relative px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-md">
        {/* Top-right: 영락 confused drifting */}
        <div className="animate-drift-left pointer-events-none absolute -right-3 top-0 sm:right-2">
          <Image
            src="/stickers/yeongrak-confused.png"
            alt=""
            width={300}
            height={300}
            quality={85}
          />
        </div>

        {/* Bottom-left: cat spinning slow */}
        <div className="animate-spin-slow pointer-events-none absolute -left-2 bottom-6 sm:left-2">
          <Image
            src="/stickers/party-horn.gif"
            alt=""
            width={80}
            height={80}
            unoptimized
          />
        </div>

        {/* Bottom-right: 형빈 shy floating */}
        <div className="animate-float pointer-events-none absolute bottom-10 -right-2 sm:right-0">
          <Image
            src="/stickers/hyeongbin-shy.png"
            alt=""
            width={300}
            height={300}
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
              src="/stickers/three-princes-new.png"
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
