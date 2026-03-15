import { invitationContent } from "@/content/invitation";
import { ShareActions } from "@/components/invitation/share-actions";

export function FooterSection() {
  return (
    <footer className="px-5 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-[color:var(--line-soft)] bg-[linear-gradient(135deg,rgba(63,99,255,0.94),rgba(255,91,91,0.92)_58%,rgba(255,214,95,0.78))] px-5 py-7 text-[color:var(--surface)] shadow-[0_30px_100px_rgba(63,99,255,0.18)] md:px-7 md:py-8">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--surface)]/86">
              party closing note
            </p>
            <h2 className="mt-4 max-w-xl font-serif-display text-[2.4rem] leading-tight md:text-[3rem]">
              {invitationContent.footer.closing}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--surface)]/74 md:text-base">
              {invitationContent.footer.signoff}
            </p>
            <p className="mt-2 text-sm leading-6 text-[color:var(--surface)]/58">
              {invitationContent.footer.note}
            </p>
          </div>

          <div className="rounded-[28px] border border-[color:var(--line-strong)] bg-white/14 p-5 backdrop-blur-sm">
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--surface)]/84">
              {invitationContent.footer.contactLabel}
            </p>
            <p className="mt-3 text-sm leading-6 text-[color:var(--surface)]/78">
              {invitationContent.footer.contactValue}
            </p>
            <button className="mt-5 w-full rounded-full bg-[color:var(--accent-soft)] px-5 py-3 text-sm font-medium text-[color:var(--foreground)] transition-transform duration-300 hover:-translate-y-0.5">
              {invitationContent.actions.primary}
            </button>
            <div className="mt-3">
              <ShareActions compact />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
