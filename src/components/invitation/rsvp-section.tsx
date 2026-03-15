"use client";

import { useMemo, useState } from "react";
import { invitationContent } from "@/content/invitation";
import { SectionShell } from "@/components/invitation/section-shell";

function getStatusNote(option: string) {
  return (
    invitationContent.rsvp.statusNotes[
      option as keyof typeof invitationContent.rsvp.statusNotes
    ] ?? invitationContent.rsvp.sheetDescription
  );
}

export function RsvpSection() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const selectedNote = useMemo(() => {
    if (!selectedOption) {
      return invitationContent.rsvp.sheetDescription;
    }

    return getStatusNote(selectedOption);
  }, [selectedOption]);

  return (
    <SectionShell
      eyebrow="rsvp"
      title={invitationContent.rsvp.sectionTitle}
      description="실제 저장 로직 없이도, 초대장 안에서 어떤 흐름으로 응답하게 될지 미리 확인할 수 있는 단계입니다."
    >
      <div className="rounded-[28px] border border-[color:var(--line-soft)] bg-[linear-gradient(180deg,rgba(255,250,244,0.98),rgba(239,232,221,0.82))] p-5">
        <h3 className="max-w-[15rem] font-serif-display text-[2rem] leading-tight text-[color:var(--foreground)]">
          {invitationContent.rsvp.title}
        </h3>
        <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
          <div className="rounded-[22px] border border-[color:var(--line-soft)] bg-[color:var(--surface)] px-4 py-4 text-sm leading-6 text-[color:var(--foreground)]/74">
            {selectedOption ? (
              <>
                <span className="block text-[0.68rem] uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  selected status
                </span>
                <span className="mt-2 block font-medium text-[color:var(--foreground)]">
                  {selectedOption}
                </span>
              </>
            ) : (
              "아직 응답을 고르지 않았어요. 버튼을 누르면 모바일 초대장에 어울리는 바텀시트 형태로 응답을 선택하게 됩니다."
            )}
          </div>
          <button
            className="rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-[color:var(--foreground-on-accent)] transition-transform duration-300 hover:-translate-y-0.5"
            onClick={() => setIsSheetOpen(true)}
            type="button"
          >
            참석 상태 열어보기
          </button>
        </div>
        <div className="mt-5 space-y-3 md:hidden">
          {invitationContent.rsvp.options.map((option, index) => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              type="button"
              className={
                index === 0
                  ? "w-full rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-[color:var(--foreground-on-accent)] transition-transform duration-300 hover:-translate-y-0.5"
                  : "w-full rounded-full border border-[color:var(--line-soft)] bg-[color:var(--surface)] px-5 py-3 text-sm font-medium text-[color:var(--foreground)] transition-colors duration-300 hover:bg-[color:var(--surface-strong)]"
              }
            >
              {option}
            </button>
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-[color:var(--foreground)]/68">
          {invitationContent.rsvp.helper}
        </p>
        <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
          {invitationContent.rsvp.contactFallback}
        </p>

        {isSheetOpen ? (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-[rgba(17,24,39,0.34)] px-4 pb-4 pt-10 md:px-6 md:items-center md:py-8">
            <div className="w-full max-w-md rounded-[32px] border border-[color:var(--line-soft)] bg-[color:var(--surface)] p-5 shadow-[0_32px_100px_rgba(17,24,39,0.22)]">
              <div className="mx-auto h-1.5 w-14 rounded-full bg-[color:var(--surface-strong)] md:hidden" />
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--accent)]">
                    reply sheet
                  </p>
                  <h4 className="mt-3 font-serif-display text-[2rem] leading-tight text-[color:var(--foreground)]">
                    {invitationContent.rsvp.sheetTitle}
                  </h4>
                </div>
                <button
                  aria-label="Close RSVP sheet"
                  className="rounded-full border border-[color:var(--line-soft)] px-3 py-2 text-sm text-[color:var(--foreground)]/68"
                  onClick={() => setIsSheetOpen(false)}
                  type="button"
                >
                  닫기
                </button>
              </div>

              <p className="mt-4 text-sm leading-6 text-[color:var(--foreground)]/72">
                {selectedNote}
              </p>

              <div className="mt-5 space-y-3">
                {invitationContent.rsvp.options.map((option) => {
                  const isSelected = selectedOption === option;

                  return (
                    <button
                      key={option}
                      className={
                        isSelected
                          ? "w-full rounded-[22px] border border-[color:var(--accent)] bg-[rgba(214,179,106,0.18)] px-4 py-4 text-left text-sm font-medium text-[color:var(--foreground)]"
                          : "w-full rounded-[22px] border border-[color:var(--line-soft)] bg-[color:var(--surface)] px-4 py-4 text-left text-sm text-[color:var(--foreground)]/82 transition-colors hover:bg-[color:var(--surface-strong)]"
                      }
                      onClick={() => setSelectedOption(option)}
                      type="button"
                    >
                      <span className="block">{option}</span>
                      <span className="mt-1 block text-xs leading-5 text-[color:var(--muted-foreground)]">
                        {getStatusNote(option)}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <button
                  className="rounded-full border border-[color:var(--line-soft)] px-5 py-3 text-sm font-medium text-[color:var(--foreground)]"
                  onClick={() => setIsSheetOpen(false)}
                  type="button"
                >
                  나중에 정할게요
                </button>
                <button
                  className="rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-[color:var(--foreground-on-accent)] disabled:opacity-55"
                  disabled={!selectedOption}
                  onClick={() => setIsSheetOpen(false)}
                  type="button"
                >
                  이 상태로 확인
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </SectionShell>
  );
}
