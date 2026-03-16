"use client";

import Image from "next/image";
import { invitationContent } from "@/content/invitation";
import { ShareActions } from "@/components/invitation/share-actions";

export function FooterSection() {
  return (
    <footer className="relative px-4 pb-12 pt-8 sm:px-6">
      <div className="mx-auto max-w-md text-center">
        {/* Floating stickers */}
        <div className="animate-float pointer-events-none absolute left-4 top-0 sm:left-12">
          <Image
            src="/stickers/prince-stickers-a.png"
            alt=""
            width={65}
            height={65}
            className="object-contain object-[33%_0%]"
            quality={85}
          />
        </div>
        <div className="animate-float-reverse pointer-events-none absolute right-4 top-4 sm:right-12">
          <Image
            src="/stickers/party-horn.gif"
            alt=""
            width={55}
            height={55}
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
