"use client";

import { useState } from "react";

import { getAbsoluteUrl, siteConfig } from "@/lib/site";

type ShareActionsProps = {
  compact?: boolean;
};

export function ShareActions({ compact = false }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = getAbsoluteUrl();

  async function handleShare() {
    if (navigator.share) {
      await navigator.share({
        title: siteConfig.name,
        text: siteConfig.description,
        url: shareUrl,
      });
      return;
    }

    await handleCopy();
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={compact ? "grid gap-2" : "grid gap-3 sm:grid-cols-2"}>
      <button
        className="rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-bold text-white shadow-md shadow-[rgba(255,107,138,0.25)] transition-transform duration-300 hover:-translate-y-0.5"
        onClick={() => void handleShare()}
        type="button"
      >
        카톡으로 공유하기
      </button>
      <button
        className="rounded-full border-2 border-[color:var(--accent-soft)] px-5 py-3 text-sm font-medium text-[color:var(--accent-deep)] transition-colors duration-300 hover:bg-[color:var(--surface-strong)]"
        onClick={() => void handleCopy()}
        type="button"
      >
        {copied ? "복사 완료!" : "링크 복사하기"}
      </button>
    </div>
  );
}
