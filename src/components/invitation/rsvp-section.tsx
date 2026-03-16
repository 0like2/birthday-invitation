"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { invitationContent } from "@/content/invitation";
import type { GuestEntry } from "@/lib/guest-store";
import { addGuest } from "@/lib/guest-store";

function getStatusNote(option: string) {
  return (
    invitationContent.rsvp.statusNotes[
      option as keyof typeof invitationContent.rsvp.statusNotes
    ] ?? invitationContent.rsvp.sheetDescription
  );
}

const optionStyles = [
  "bg-[color:var(--accent)] text-white shadow-lg shadow-[rgba(255,107,138,0.3)]",
  "bg-[color:var(--lavender)] text-[color:var(--foreground)]",
  "bg-[color:var(--mint)] text-[color:var(--foreground)]",
];

export function RsvpSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!name.trim() || !selectedOption) return;

    const entry: GuestEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      status: selectedOption,
      message: message.trim() || undefined,
      createdAt: new Date().toISOString(),
    };

    addGuest(entry);
    setSubmitted(true);

    // 커스텀 이벤트로 방명록 갱신 알림
    window.dispatchEvent(new Event("guest-updated"));
  }

  function handleShareViaKakao() {
    const msg = `[세 왕자님의 생일파티 RSVP]\n이름: ${name}\n응답: ${selectedOption}${message ? `\n한마디: ${message}` : ""}`;

    if (navigator.share) {
      void navigator.share({
        title: "세 왕자님의 생일파티 RSVP",
        text: msg,
      });
    } else {
      void navigator.clipboard.writeText(msg);
      alert("응답이 복사되었어요!\n주최자에게 전달해주세요!");
    }
  }

  if (submitted) {
    return (
      <section className="px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-md">
          <div className="rounded-3xl border border-[color:var(--accent-soft)] bg-white p-6 shadow-lg shadow-[rgba(255,107,138,0.08)] text-center">
            <div className="text-4xl">🎉</div>
            <h2 className="mt-3 font-serif-display text-2xl text-[color:var(--foreground)]">
              감사합니다, {name}님!
            </h2>
            <div className="mt-4 rounded-2xl bg-[color:var(--surface-strong)] p-4">
              <p className="text-sm text-[color:var(--muted-foreground)]">내 응답</p>
              <p className="mt-1 text-lg font-bold text-[color:var(--accent-deep)]">
                {selectedOption}
              </p>
              {message && (
                <p className="mt-2 text-sm text-[color:var(--foreground)]/70">
                  &ldquo;{message}&rdquo;
                </p>
              )}
            </div>

            <button
              onClick={handleShareViaKakao}
              type="button"
              className="mt-5 w-full rounded-full bg-[color:var(--accent)] px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-[rgba(255,107,138,0.25)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              주최자에게 응답 전달하기
            </button>

            <button
              onClick={() => {
                setSubmitted(false);
                setName("");
                setMessage("");
                setSelectedOption(null);
              }}
              type="button"
              className="mt-2 text-sm text-[color:var(--muted-foreground)] underline"
            >
              다시 입력하기
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-md">
        <div className="animate-wiggle pointer-events-none absolute -left-1 top-8 sm:left-6">
          <Image
            src="/stickers/party-horn.gif"
            alt=""
            width={50}
            height={50}
            unoptimized
          />
        </div>

        <div className="rounded-3xl border border-[color:var(--accent-soft)] bg-white p-6 shadow-lg shadow-[rgba(255,107,138,0.08)]">
          <div className="text-center">
            <div className="text-3xl">💌</div>
            <h2 className="mt-3 font-serif-display text-2xl text-[color:var(--foreground)]">
              {invitationContent.rsvp.title}
            </h2>
          </div>

          {/* Name */}
          <div className="mt-5">
            <label
              htmlFor="rsvp-name"
              className="block text-center text-sm font-medium text-[color:var(--foreground)]/80"
            >
              이름을 알려주세요!
            </label>
            <input
              id="rsvp-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름 입력"
              className="mt-2 w-full rounded-full border-2 border-[color:var(--accent-soft)] bg-[color:var(--surface-strong)] px-5 py-3 text-center text-sm font-medium text-[color:var(--foreground)] placeholder:text-[color:var(--muted-foreground)] outline-none transition-colors focus:border-[color:var(--accent)] focus:bg-white"
            />
          </div>

          {/* Options */}
          <div className="mt-5 space-y-2.5">
            <p className="text-center text-sm font-medium text-[color:var(--foreground)]/80">
              참석 여부를 선택해주세요!
            </p>
            {invitationContent.rsvp.options.map((option, index) => {
              const isSelected = selectedOption === option;
              return (
                <button
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  type="button"
                  className={`w-full rounded-full px-5 py-3.5 text-sm font-bold transition-all duration-300 ${
                    isSelected
                      ? "ring-2 ring-[color:var(--accent)] ring-offset-2 " +
                        optionStyles[index]
                      : optionStyles[index]
                  } hover:-translate-y-0.5`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Message */}
          <div className="mt-5">
            <label
              htmlFor="rsvp-message"
              className="block text-center text-sm font-medium text-[color:var(--foreground)]/80"
            >
              왕자님들에게 한마디!
            </label>
            <textarea
              id="rsvp-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="축하 메시지를 남겨주세요! (선택)"
              rows={2}
              className="mt-2 w-full resize-none rounded-2xl border-2 border-[color:var(--accent-soft)] bg-[color:var(--surface-strong)] px-4 py-3 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted-foreground)] outline-none transition-colors focus:border-[color:var(--accent)] focus:bg-white"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!name.trim() || !selectedOption}
            type="button"
            className="mt-5 w-full rounded-full bg-[color:var(--foreground)] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
          >
            응답 완료!
          </button>

          <p className="mt-3 text-center text-xs text-[color:var(--muted-foreground)]">
            {invitationContent.rsvp.contactFallback}
          </p>
        </div>
      </div>
    </section>
  );
}
