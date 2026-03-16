"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { GuestEntry } from "@/lib/guest-store";
import { getGuests } from "@/lib/guest-store";

const boxColors = [
  { bg: "bg-[color:var(--accent-soft)]", ribbon: "bg-[color:var(--accent)]" },
  { bg: "bg-[color:var(--lavender)]", ribbon: "bg-[color:var(--lavender-deep)]" },
  { bg: "bg-[color:var(--mint)]", ribbon: "bg-[color:var(--mint-deep)]" },
  { bg: "bg-[color:var(--cream)]", ribbon: "bg-[color:var(--peach)]" },
];

const statusEmojis: Record<string, string> = {
  "갈게요!": "🎉",
  "고민 중이에요": "🤔",
  "늦게 갈 수도!": "🏃",
};

function GiftBox({ guest, index }: { guest: GuestEntry; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const color = boxColors[index % boxColors.length];

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className="w-full text-left transition-all duration-500"
    >
      {isOpen ? (
        /* Opened state - message revealed */
        <div className="animate-fade-up rounded-2xl border-2 border-[color:var(--accent-soft)] bg-white p-4 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">
                {statusEmojis[guest.status] ?? "🎁"}
              </span>
              <span className="font-bold text-[color:var(--foreground)]">
                {guest.name}
              </span>
            </div>
            <span className="rounded-full bg-[color:var(--surface-strong)] px-2.5 py-1 text-xs font-medium text-[color:var(--accent-deep)]">
              {guest.status}
            </span>
          </div>
          {guest.message && (
            <p className="mt-3 rounded-xl bg-[color:var(--surface-strong)] p-3 text-sm leading-relaxed text-[color:var(--foreground)]/80">
              &ldquo;{guest.message}&rdquo;
            </p>
          )}
          <p className="mt-2 text-center text-xs text-[color:var(--muted-foreground)]">
            탭하면 다시 닫혀요
          </p>
        </div>
      ) : (
        /* Closed gift box */
        <div
          className={`group relative flex flex-col items-center rounded-2xl ${color.bg} p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
        >
          {/* Ribbon vertical */}
          <div
            className={`absolute inset-x-0 mx-auto h-full w-4 ${color.ribbon} opacity-30 rounded-2xl`}
          />
          {/* Ribbon horizontal */}
          <div
            className={`absolute inset-y-0 my-auto h-4 w-full ${color.ribbon} opacity-30 rounded-2xl`}
          />
          {/* Bow */}
          <div className="relative z-10 text-3xl transition-transform duration-300 group-hover:scale-125">
            🎁
          </div>
          <span className="relative z-10 mt-2 rounded-full bg-white/80 px-3 py-1 text-sm font-bold text-[color:var(--foreground)] shadow-sm">
            {guest.name}
          </span>
          <span className="relative z-10 mt-1 text-xs text-[color:var(--foreground)]/60">
            탭해서 열어보세요!
          </span>
        </div>
      )}
    </button>
  );
}

export function GuestbookSection() {
  const [guests, setGuests] = useState<GuestEntry[]>([]);

  useEffect(() => {
    setGuests(getGuests());

    function handleUpdate() {
      setGuests(getGuests());
    }

    window.addEventListener("guest-updated", handleUpdate);
    return () => window.removeEventListener("guest-updated", handleUpdate);
  }, []);

  return (
    <section className="relative px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-md">
        {/* Floating sticker */}
        <div className="animate-float pointer-events-none absolute -right-1 top-4 sm:right-6">
          <Image
            src="/stickers/cute-cat.gif"
            alt=""
            width={50}
            height={50}
            unoptimized
          />
        </div>

        <div className="text-center">
          <div className="text-3xl">🎁</div>
          <h2 className="mt-2 font-serif-display text-2xl text-[color:var(--foreground)]">
            선물상자 방명록
          </h2>
          <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
            참석자들의 축하 메시지를 열어보세요!
          </p>
        </div>

        {guests.length > 0 ? (
          <>
            {/* Attending count */}
            <div className="mt-5 flex justify-center gap-3">
              <div className="rounded-full bg-[color:var(--surface-strong)] px-4 py-2 text-sm">
                <span className="font-bold text-[color:var(--accent-deep)]">
                  {guests.length}
                </span>
                <span className="ml-1 text-[color:var(--muted-foreground)]">
                  명이 응답했어요
                </span>
              </div>
            </div>

            {/* Gift boxes grid */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {guests.map((guest, index) => (
                <GiftBox key={guest.id} guest={guest} index={index} />
              ))}
            </div>
          </>
        ) : (
          <div className="mt-6 rounded-2xl border-2 border-dashed border-[color:var(--accent-soft)] bg-white p-8 text-center">
            <div className="text-4xl">📭</div>
            <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
              아직 도착한 선물상자가 없어요!
              <br />
              위에서 참석 여부를 알려주시면
              <br />
              여기에 선물상자가 나타나요!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
