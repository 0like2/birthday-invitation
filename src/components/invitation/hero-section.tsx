import { CountdownPanel } from "@/components/invitation/countdown-panel";
import { ShareActions } from "@/components/invitation/share-actions";
import { eventDate, invitationContent } from "@/content/invitation";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pb-12 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative min-h-[100svh] w-full overflow-hidden rounded-[36px] border border-[color:var(--line-soft)] bg-[linear-gradient(180deg,rgba(63,99,255,0.94),rgba(94,56,216,0.92)_38%,rgba(255,91,91,0.88)_100%)] px-5 pb-8 pt-6 text-[color:var(--surface)] shadow-[0_40px_120px_rgba(63,99,255,0.24)] sm:px-6 lg:min-h-[100dvh] lg:px-8 lg:pt-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(255,214,95,0.4),transparent_58%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.16),transparent_58%)]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.18),transparent_62%)]" />

          <div className="relative flex min-h-[calc(100svh-3rem)] flex-col lg:min-h-[calc(100dvh-4rem)]">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[0.7rem] uppercase tracking-[0.34em] text-[color:var(--accent-soft)]">
                {invitationContent.event.eyebrow}
              </p>
              <div className="rounded-full border border-[color:var(--line-strong)] bg-white/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.24em] text-[color:var(--surface)]/88">
                prince party cover
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:gap-10">
                <div className="flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 self-start rounded-full border border-[color:var(--line-strong)] bg-white/10 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.28em] text-[color:var(--surface)]/88">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-soft)]" />
                    {invitationContent.hero.badge}
                  </div>

                  <div className="mt-8 max-w-[22rem] sm:max-w-[27rem] lg:max-w-[33rem]">
                    <p className="text-sm text-[color:var(--surface)]/82">
                      {invitationContent.hero.edition}
                    </p>
                    <h1 className="mt-3 font-serif-display text-[3rem] leading-[0.98] tracking-[-0.04em] text-[color:var(--surface)] sm:text-[4rem] md:text-[4.4rem] lg:text-[5.2rem]">
                      {invitationContent.event.title}
                    </h1>
                    <p className="mt-5 max-w-[24rem] text-base leading-7 text-[color:var(--surface)]/82 md:text-[1.05rem] lg:max-w-[28rem] lg:text-[1.1rem]">
                      {invitationContent.event.subtitle}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {invitationContent.event.names.map((name) => (
                      <span
                        key={name}
                        className="rounded-full border border-[color:var(--line-strong)] bg-white/12 px-4 py-2 text-sm tracking-[0.08em] text-[color:var(--surface)]/96"
                      >
                        {name}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 lg:mt-12">
                    <CountdownPanel
                      targetIso={eventDate}
                      label={invitationContent.event.countdownLabel}
                    />
                  </div>
                </div>

                <div className="mt-8 grid gap-4 lg:mt-0 lg:items-center">
                  <div className="rounded-[32px] border border-[color:var(--line-strong)] bg-white/12 p-5 backdrop-blur-sm">
                    <div className="rounded-[24px] border border-dashed border-[color:var(--line-strong)] p-4">
                      <p className="text-[0.7rem] uppercase tracking-[0.34em] text-[color:var(--surface)]/84">
                        party memo
                      </p>
                      <p className="mt-4 text-sm leading-6 text-[color:var(--surface)]/88 lg:text-[15px] lg:leading-7">
                        {invitationContent.hero.supportingLines[0]}
                        <br />
                        {invitationContent.hero.supportingLines[1]}
                      </p>
                      <p className="mt-6 border-t border-[color:var(--line-strong)] pt-4 font-serif-display text-xl italic text-[color:var(--surface)] lg:text-[1.55rem]">
                        {invitationContent.hero.quote}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[1fr_1fr] lg:grid-cols-1">
                    <div className="rounded-[32px] border border-[color:var(--line-strong)] bg-white/12 p-5 backdrop-blur-sm">
                      <p className="text-[0.7rem] uppercase tracking-[0.34em] text-[color:var(--surface)]/84">
                        party zone
                      </p>
                      <p className="mt-2 text-lg font-medium text-[color:var(--surface)] lg:text-[1.3rem]">
                        {invitationContent.event.venue}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[color:var(--surface)]/68">
                        {invitationContent.event.venueNote}
                      </p>
                    </div>

                    <div className="rounded-[32px] border border-[color:var(--line-strong)] bg-white/12 p-5 backdrop-blur-sm">
                      <p className="text-[0.7rem] uppercase tracking-[0.34em] text-[color:var(--surface)]/84">
                        main poster slot
                      </p>
                      <div className="mt-3 aspect-[4/3] rounded-[24px] border border-dashed border-[color:var(--line-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,214,95,0.18),rgba(255,91,91,0.1))] p-4">
                        <div className="flex h-full flex-col justify-between">
                          <span className="text-[0.62rem] uppercase tracking-[0.28em] text-[color:var(--surface)]/82">
                            placard / banner / group photo
                          </span>
                          <p className="max-w-[13rem] font-serif-display text-[1.8rem] leading-tight text-[color:var(--surface)]">
                            {invitationContent.hero.posterTitle}
                          </p>
                          <p className="max-w-[13rem] text-sm leading-6 text-[color:var(--surface)]/78">
                            {invitationContent.hero.posterBody}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-[color:var(--line-strong)] pt-5 sm:flex-row sm:items-center sm:justify-between lg:mt-auto">
              <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--surface)]/88">
                  ready for the party
                </p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--surface)]/68">
                  아래로 내리면 행사 정보, 위치, 타임테이블, RSVP가 이어집니다.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:min-w-[15rem]">
                <button className="rounded-full bg-[color:var(--accent-soft)] px-5 py-3 text-sm font-medium text-[color:var(--foreground)] transition-transform duration-300 hover:-translate-y-0.5">
                  {invitationContent.actions.primary}
                </button>
                <ShareActions compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
