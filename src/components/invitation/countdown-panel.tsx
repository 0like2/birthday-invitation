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
      { value: countdown.days, label: "일" },
      { value: countdown.hours, label: "시간" },
      { value: countdown.minutes, label: "분" },
      { value: countdown.seconds, label: "초" },
    ],
    [countdown.days, countdown.hours, countdown.minutes, countdown.seconds],
  );

  return (
    <div className="rounded-2xl border border-[color:var(--accent-soft)] bg-white p-4 shadow-sm">
      <p className="text-center text-xs font-medium text-[color:var(--accent-deep)]">
        {countdown.isComplete ? "파티가 시작됐어요!" : label}
      </p>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-xl bg-[color:var(--surface-strong)] px-2 py-3 text-center"
          >
            <div className="font-serif-display text-2xl leading-none text-[color:var(--accent-deep)]">
              {item.value}
            </div>
            <div className="mt-1.5 text-[0.65rem] font-medium text-[color:var(--muted-foreground)]">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
