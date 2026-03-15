import { invitationContent } from "@/content/invitation";
import { SectionShell } from "@/components/invitation/section-shell";

export function TimetableSection() {
  return (
    <SectionShell
      eyebrow="tonight's schedule"
      title={invitationContent.timetable.sectionTitle}
      description="입장부터 케이크와 단체 사진까지, 밤의 흐름이 자연스럽게 보이도록 정리합니다."
    >
      <div className="space-y-3">
        {invitationContent.timetable.items.map((item, index) => (
          <div
            key={`${item.time}-${item.title}`}
            className="grid grid-cols-[4.5rem_1fr] gap-3 rounded-[24px] border border-[color:var(--line-soft)] bg-[color:var(--surface)] px-4 py-4"
          >
            <div className="relative pr-3">
              <p className="font-serif-display text-[1.45rem] leading-none text-[color:var(--foreground)]">
                {item.time}
              </p>
              {index !== invitationContent.timetable.items.length - 1 ? (
                <span className="absolute right-0 top-0 h-full w-px bg-[linear-gradient(180deg,rgba(214,179,106,0.7),rgba(17,24,39,0.05))]" />
              ) : null}
            </div>
            <div className="flex items-center">
              <p className="text-sm leading-6 text-[color:var(--foreground)]/76">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-[color:var(--muted-foreground)]">
        {invitationContent.timetable.note}
      </p>
    </SectionShell>
  );
}
