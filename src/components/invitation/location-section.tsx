"use client";

import { useState } from "react";
import { invitationContent } from "@/content/invitation";
import { SectionShell } from "@/components/invitation/section-shell";

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  async function handleCopyAddress() {
    await navigator.clipboard.writeText(invitationContent.location.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <SectionShell
      eyebrow="where to find the princes"
      title={invitationContent.location.sectionTitle}
      description="카카오톡에서 바로 열어도 길을 잃지 않도록 주소와 이동 동선을 간결하게 안내합니다."
    >
      <div className="overflow-hidden rounded-[28px] border border-[color:var(--line-soft)] bg-[linear-gradient(180deg,rgba(17,24,39,0.95),rgba(31,41,55,0.92))] text-[color:var(--surface)]">
        <div className="border-b border-[color:var(--line-strong)] p-5">
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[color:var(--accent-soft)]">
            venue
          </p>
          <h3 className="mt-3 font-serif-display text-[2rem] text-[color:var(--surface)]">
            {invitationContent.location.venueName}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[color:var(--surface)]/78">
            {invitationContent.location.address}
          </p>
          <p className="mt-2 text-sm leading-6 text-[color:var(--surface)]/60">
            {invitationContent.location.addressNote}
          </p>
        </div>

        <div className="space-y-5 p-5">
          <div className="rounded-[24px] border border-[color:var(--line-strong)] bg-white/6 p-4">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[color:var(--accent-soft)]">
              direction note
            </p>
            <p className="mt-3 text-sm leading-6 text-[color:var(--surface)]/76">
              {invitationContent.location.directionNote}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => window.open(`https://map.kakao.com/link/search/${encodeURIComponent("을지로 파티룸")}`, "_blank")}
              type="button"
              className="rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-[color:var(--foreground-on-accent)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              {invitationContent.location.ctaPrimary}
            </button>
            <button
              onClick={() => void handleCopyAddress()}
              type="button"
              className="rounded-full border border-[color:var(--line-strong)] px-5 py-3 text-sm font-medium text-[color:var(--surface)] transition-colors duration-300 hover:bg-white/8"
            >
              {copied ? "복사됐어요!" : invitationContent.location.ctaSecondary}
            </button>
          </div>

          <p className="text-sm leading-6 text-[color:var(--surface)]/56">
            {invitationContent.location.fallback}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
