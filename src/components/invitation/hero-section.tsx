"use client";

import Image from "next/image";
import { CountdownPanel } from "@/components/invitation/countdown-panel";
import { eventDate, invitationContent } from "@/content/invitation";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-10 sm:px-6">
      <div className="mx-auto max-w-md text-center">
        {/* Top-left: party horn drifting */}
        <div className="animate-drift-right pointer-events-none absolute left-1 top-14 sm:left-6">
          <Image
            src="/stickers/party-horn.gif"
            alt=""
            width={75}
            height={75}
            unoptimized
          />
        </div>

        {/* Top-right: cat swaying */}
        <div className="animate-sway pointer-events-none absolute right-0 top-16 sm:right-4">
          <Image
            src="/stickers/cute-cat.gif"
            alt=""
            width={70}
            height={70}
            unoptimized
          />
        </div>

        {/* Bottom-left: 상욱 confused zigzagging */}
        <div className="animate-zigzag pointer-events-none absolute bottom-36 -left-2 sm:left-0">
          <Image
            src="/stickers/sanguk-4.png"
            alt=""
            width={85}
            height={85}
            quality={85}
          />
        </div>

        {/* Bottom-right: 형빈 riding horse orbiting */}
        <div className="pointer-events-none absolute bottom-44 -right-2 sm:right-0">
          <div className="animate-orbit">
            <Image
              src="/stickers/hyeongbin-4.png"
              alt=""
              width={85}
              height={85}
              quality={85}
            />
          </div>
        </div>

        {/* Donggrami Banner - full width */}
        <div className="mx-auto overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/stickers/donggrami-banner.jpg"
            alt="제1회 동그라미 생일파티 - 동그라미 왕자님들 생신이시다"
            width={1200}
            height={240}
            className="w-full"
            priority
          />
        </div>

        {/* Badge */}
        <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--accent-soft)] px-4 py-2 text-xs font-medium tracking-wider text-[color:var(--accent-deep)]">
          {invitationContent.hero.badge}
        </div>

        {/* Date */}
        <p className="mt-4 text-sm tracking-widest text-[color:var(--muted-foreground)]">
          {invitationContent.event.eyebrow}
        </p>

        {/* Main Illustration - Party Banner */}
        <div className="mx-auto mt-6 overflow-hidden rounded-3xl border-4 border-[color:var(--accent-soft)] shadow-xl shadow-[rgba(255,107,138,0.15)]">
          <Image
            src="/stickers/party-banner.png"
            alt="세 왕자님의 생일파티에 초대합니다"
            width={600}
            height={600}
            className="w-full"
            priority
            quality={90}
          />
        </div>

        {/* Title */}
        <h1 className="mt-6 whitespace-pre-line font-serif-display text-[2.6rem] leading-[1.15] tracking-tight text-[color:var(--foreground)] sm:text-[3.2rem]">
          {invitationContent.event.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 whitespace-pre-line text-base leading-7 text-[color:var(--foreground)]/75">
          {invitationContent.event.subtitle}
        </p>

        {/* Names */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {invitationContent.event.names.map((name) => (
            <span
              key={name}
              className="rounded-full border-2 border-[color:var(--accent-soft)] bg-white px-5 py-2 text-sm font-medium text-[color:var(--accent-deep)] shadow-sm"
            >
              {name}
            </span>
          ))}
        </div>

        {/* Countdown */}
        <div className="mt-7">
          <CountdownPanel
            targetIso={eventDate}
            label={invitationContent.event.countdownLabel}
          />
        </div>

        {/* CTA */}
        <button
          onClick={() =>
            document
              .getElementById("rsvp")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          type="button"
          className="mt-7 rounded-full bg-[color:var(--accent)] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[rgba(255,107,138,0.3)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          {invitationContent.actions.primary}
        </button>
      </div>
    </section>
  );
}
