"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { GuestEntry } from "@/lib/guest-store";
import { getGuests } from "@/lib/guest-store";

const statusEmojis: Record<string, string> = {
  "갈게요!": "🎉",
  "고민 중이에요": "🤔",
  "늦게 갈 수도!": "🏃",
};

const cardColors = [
  "bg-[color:var(--surface-strong)]",
  "bg-[color:var(--lavender)]/30",
  "bg-[color:var(--mint)]/30",
  "bg-[color:var(--cream)]",
];

export function GuestbookSection() {
  const [guests, setGuests] = useState<GuestEntry[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchGuests = useCallback(async () => {
    const data = await getGuests();
    setGuests(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    void fetchGuests();

    function handleUpdate() {
      void fetchGuests();
    }

    window.addEventListener("guest-updated", handleUpdate);
    return () => window.removeEventListener("guest-updated", handleUpdate);
  }, [fetchGuests]);

  return (
    <section className="relative px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-md">
        {/* Top-right: cat drifting right */}
        <div className="animate-drift-right pointer-events-none absolute -right-1 top-2 sm:right-4">
          <Image
            src="/stickers/cute-cat.gif"
            alt=""
            width={50}
            height={50}
            unoptimized
          />
        </div>

        {/* Mid-left: 상욱 treasure twinkle */}
        <div className="animate-twinkle pointer-events-none absolute left-0 top-1/3 sm:left-4">
          <Image
            src="/stickers/sanguk-treasure.png"
            alt=""
            width={50}
            height={50}
            quality={85}
          />
        </div>

        <div className="text-center">
          <h2 className="font-serif-display text-2xl text-[color:var(--foreground)]">
            선물상자 방명록
          </h2>
          <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
            누가 오는지 궁금하다면?
          </p>
        </div>

        {loading ? (
          <div className="mt-6 text-center text-sm text-[color:var(--muted-foreground)]">
            불러오는 중...
          </div>
        ) : guests.length > 0 ? (
          <div className="mt-5">
            {!isOpen ? (
              /* Big gift box - closed */
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="group mx-auto flex w-full flex-col items-center"
              >
                <div className="relative w-full overflow-hidden rounded-3xl border-2 border-[color:var(--accent-soft)] bg-gradient-to-b from-[color:var(--accent-soft)] to-[color:var(--surface-strong)] p-8 shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
                  {/* Ribbon cross */}
                  <div className="absolute inset-x-0 mx-auto h-full w-6 bg-[color:var(--accent)] opacity-20" />
                  <div className="absolute inset-y-0 my-auto h-6 w-full bg-[color:var(--accent)] opacity-20" />

                  {/* Bow */}
                  <div className="animate-wiggle relative z-10 text-6xl">
                    🎁
                  </div>

                  <p className="relative z-10 mt-4 text-lg font-bold text-[color:var(--accent-deep)]">
                    선물상자를 열어보세요!
                  </p>
                  <p className="relative z-10 mt-1 text-sm text-[color:var(--foreground)]/60">
                    {guests.length}명의 축하 메시지가 기다리고 있어요
                  </p>

                  {/* Bounce hint */}
                  <div className="relative z-10 mt-4 animate-bounce text-2xl">
                    👆
                  </div>
                </div>
              </button>
            ) : (
              /* Opened - guest list revealed */
              <div className="animate-fade-up">
                {/* Open header */}
                <div className="rounded-t-3xl border-2 border-b-0 border-[color:var(--accent-soft)] bg-gradient-to-b from-[color:var(--accent-soft)] to-white px-5 py-4 text-center">
                  <div className="text-3xl">🎉</div>
                  <p className="mt-1 text-sm font-bold text-[color:var(--accent-deep)]">
                    {guests.length}명이 함께해요!
                  </p>
                </div>

                {/* Guest list */}
                <div className="space-y-0 rounded-b-3xl border-2 border-t-0 border-[color:var(--accent-soft)] bg-white">
                  {guests.map((guest, index) => (
                    <div
                      key={guest.id}
                      className={`animate-fade-up border-b border-[color:var(--line-soft)] px-5 py-4 last:border-b-0 ${cardColors[index % cardColors.length]}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-sm">
                            {statusEmojis[guest.status] ?? "🎁"}
                          </span>
                          <div>
                            <span className="font-bold text-[color:var(--foreground)]">
                              {guest.name}
                            </span>
                            <span className="ml-2 rounded-full bg-white px-2 py-0.5 text-xs font-medium text-[color:var(--accent-deep)] shadow-sm">
                              {guest.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      {guest.message && (
                        <p className="mt-2 ml-11 rounded-xl bg-white/80 px-3 py-2 text-sm leading-relaxed text-[color:var(--foreground)]/75 shadow-sm">
                          &ldquo;{guest.message}&rdquo;
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Close button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 w-full text-center text-sm text-[color:var(--muted-foreground)] underline"
                >
                  선물상자 다시 닫기
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-6 rounded-3xl border-2 border-dashed border-[color:var(--accent-soft)] bg-white p-8 text-center">
            <div className="text-4xl">📭</div>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
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
