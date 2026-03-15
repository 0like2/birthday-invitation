"use client";

import { useEffect, useMemo, useState } from "react";

type CountdownPanelProps = {
  targetIso: string;
  label: string;
};

type CountdownState = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isComplete: boolean;
};

function getCountdownState(targetIso: string): CountdownState {
  const target = new Date(targetIso).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      isComplete: true,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    isComplete: false,
  };
}

export function CountdownPanel({ targetIso, label }: CountdownPanelProps) {
  const [countdown, setCountdown] = useState<CountdownState>(() =>
    getCountdownState(targetIso),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownState(targetIso));
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [targetIso]);

  const items = useMemo(
    () => [
      { value: countdown.days, label: "days" },
      { value: countdown.hours, label: "hours" },
      { value: countdown.minutes, label: "mins" },
      { value: countdown.seconds, label: "secs" },
    ],
    [countdown.days, countdown.hours, countdown.minutes, countdown.seconds],
  );

  return (
    <section className="rounded-[32px] border border-[color:var(--line-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(247,243,236,0.78))] p-5 shadow-[0_28px_60px_rgba(17,24,39,0.12)] backdrop-blur-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--muted-foreground)]">
            {label}
          </p>
          <p className="mt-2 max-w-[12rem] text-sm leading-6 text-[color:var(--foreground)]/80">
            {countdown.isComplete
              ? "세 왕자님의 밤이 시작되었어요. 이제 파티의 장면을 만나볼 시간입니다."
              : "을지로의 밤이 열리기 전, 남은 시간을 함께 세어보세요."}
          </p>
        </div>
        <div className="rounded-full border border-[color:var(--line-soft)] bg-[color:var(--surface)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--accent)]">
          {countdown.isComplete ? "party on" : "counting down"}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-2.5">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-[24px] border border-[color:var(--line-soft)] bg-[color:var(--surface-strong)] px-3 py-4 text-center"
          >
            <div className="font-serif-display text-2xl leading-none text-[color:var(--foreground)]">
              {item.value}
            </div>
            <div className="mt-2 text-[0.62rem] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
