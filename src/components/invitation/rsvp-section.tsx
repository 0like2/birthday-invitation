"use client";

import { useState } from "react";
import Image from "next/image";
import { invitationContent } from "@/content/invitation";

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
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <section className="relative px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-md">
        {/* Floating sticker */}
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

          {selectedOption && (
            <div className="mt-5 rounded-2xl bg-[color:var(--surface-strong)] p-4 text-center">
              <p className="text-xs font-medium text-[color:var(--accent-deep)]">
                내 응답
              </p>
              <p className="mt-1 font-bold text-[color:var(--foreground)]">
                {selectedOption}
              </p>
              <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">
                {getStatusNote(selectedOption)}
              </p>
            </div>
          )}

          <div className="mt-5 space-y-2.5">
            {invitationContent.rsvp.options.map((option, index) => {
              const isSelected = selectedOption === option;
              return (
                <button
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  type="button"
                  className={`w-full rounded-full px-5 py-3.5 text-sm font-bold transition-all duration-300 ${
                    isSelected
                      ? "ring-2 ring-[color:var(--accent)] ring-offset-2 " + optionStyles[index]
                      : optionStyles[index]
                  } hover:-translate-y-0.5`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <p className="mt-5 text-center text-xs text-[color:var(--muted-foreground)]">
            {invitationContent.rsvp.helper}
          </p>
        </div>
      </div>

      {isSheetOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 px-4 pb-4 pt-10 md:items-center md:py-8">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="mx-auto h-1.5 w-12 rounded-full bg-[color:var(--surface-strong)] md:hidden" />
            <div className="mt-3 text-center">
              <h4 className="font-serif-display text-xl text-[color:var(--foreground)]">
                {invitationContent.rsvp.sheetTitle}
              </h4>
            </div>
            <div className="mt-5 space-y-2.5">
              {invitationContent.rsvp.options.map((option, index) => (
                <button
                  key={option}
                  className={`w-full rounded-2xl px-4 py-4 text-left text-sm font-medium transition-colors ${
                    selectedOption === option
                      ? "border-2 border-[color:var(--accent)] bg-[color:var(--surface-strong)]"
                      : "border border-[color:var(--line-soft)] bg-[color:var(--surface)] hover:bg-[color:var(--surface-strong)]"
                  }`}
                  onClick={() => setSelectedOption(option)}
                  type="button"
                >
                  <span className="block text-[color:var(--foreground)]">
                    {option}
                  </span>
                  <span className="mt-1 block text-xs text-[color:var(--muted-foreground)]">
                    {getStatusNote(option)}
                  </span>
                </button>
              ))}
            </div>
            <button
              className="mt-5 w-full rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-bold text-white"
              onClick={() => setIsSheetOpen(false)}
              type="button"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
