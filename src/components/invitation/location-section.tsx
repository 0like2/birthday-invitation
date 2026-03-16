"use client";

import { useState } from "react";
import { invitationContent } from "@/content/invitation";

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  async function handleCopyAddress() {
    await navigator.clipboard.writeText(invitationContent.location.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl border border-[color:var(--mint)] bg-white p-6 shadow-lg shadow-[rgba(184,232,208,0.15)]">
          <div className="text-center">
            <div className="text-3xl">🗺️</div>
            <h2 className="mt-3 font-serif-display text-2xl text-[color:var(--foreground)]">
              {invitationContent.location.sectionTitle}
            </h2>
          </div>

          <div className="mt-5 rounded-2xl bg-[color:var(--mint)]/20 p-4 text-center">
            <h3 className="font-serif-display text-xl text-[color:var(--foreground)]">
              {invitationContent.location.venueName}
            </h3>
            <p className="mt-2 text-sm text-[color:var(--foreground)]/70">
              {invitationContent.location.address}
            </p>
            <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">
              {invitationContent.location.addressNote}
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-dashed border-[color:var(--mint-deep)]/30 p-3">
            <p className="whitespace-pre-line text-center text-sm leading-6 text-[color:var(--foreground)]/70">
              {invitationContent.location.directionNote}
            </p>
          </div>

          <div className="mt-5 grid gap-2">
            <button
              onClick={() =>
                window.open(
                  `https://map.kakao.com/link/search/${encodeURIComponent("을지로 파티룸")}`,
                  "_blank",
                )
              }
              type="button"
              className="rounded-full bg-[color:var(--mint-deep)] px-5 py-3 text-sm font-bold text-white shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
            >
              {invitationContent.location.ctaPrimary}
            </button>
            <button
              onClick={() => void handleCopyAddress()}
              type="button"
              className="rounded-full border-2 border-[color:var(--mint)] px-5 py-3 text-sm font-medium text-[color:var(--mint-deep)] transition-colors duration-300 hover:bg-[color:var(--mint)]/10"
            >
              {copied ? "복사 완료!" : invitationContent.location.ctaSecondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
