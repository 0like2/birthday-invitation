"use client";

import Image from "next/image";
import { invitationContent } from "@/content/invitation";
import { ShareActions } from "@/components/invitation/share-actions";

export function FooterSection() {
  return (
    <footer className="relative px-4 pb-12 pt-8 sm:px-6">
      <div className="mx-auto max-w-md text-center">
        {/* Top-left: 영락 gift spinning */}
        <div className="hidden sm:block animate-spin-slow pointer-events-none absolute left-0 -top-2 sm:left-6">
          <Image
            src="/stickers/yeongrak-gift.png"
            alt=""
            width={350}
            height={350}
            quality={85}
          />
        </div>

        {/* Top-right: party horn drifting */}
        <div className="animate-drift-left pointer-events-none absolute -right-1 top-0 sm:right-6">
          <Image
            src="/stickers/party-horn.gif"
            alt=""
            width={80}
            height={80}
            unoptimized
          />
        </div>

        {/* Bottom-left: cat swaying */}
        <div className="animate-sway pointer-events-none absolute bottom-2 -left-1 sm:left-4">
          <Image
            src="/stickers/cute-cat.gif"
            alt=""
            width={80}
            height={80}
            unoptimized
          />
        </div>

        <div className="rounded-3xl border border-[color:var(--accent-soft)] bg-white p-6 shadow-lg shadow-[rgba(255,107,138,0.08)]">
          <p className="whitespace-pre-line font-serif-display text-xl leading-relaxed text-[color:var(--foreground)]">
            {invitationContent.footer.closing}
          </p>

          <div className="mx-auto mt-5 h-px w-16 bg-[color:var(--accent-soft)]" />

          <p className="mt-4 text-sm font-medium text-[color:var(--accent-deep)]">
            {invitationContent.footer.signoff}
          </p>
          <p className="mt-2 text-xs text-[color:var(--muted-foreground)]">
            {invitationContent.footer.note}
          </p>

          <div className="mt-6">
            <ShareActions compact />
          </div>
        </div>
      </div>
    </footer>
  );
}
