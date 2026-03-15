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
        className="rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-[color:var(--foreground-on-accent)] transition-transform duration-300 hover:-translate-y-0.5"
        onClick={() => void handleShare()}
        type="button"
      >
        카톡으로 보내기 좋게 공유하기
      </button>
      <button
        className="rounded-full border border-[color:var(--line-soft)] bg-[color:var(--surface)] px-5 py-3 text-sm font-medium text-[color:var(--foreground)] transition-colors duration-300 hover:bg-[color:var(--surface-strong)]"
        onClick={() => void handleCopy()}
        type="button"
      >
        {copied ? "링크가 복사됐어요" : "링크 복사하기"}
      </button>
    </div>
  );
}
