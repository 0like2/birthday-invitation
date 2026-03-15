export function SectionPreview() {
  return (
    <section className="px-5 pb-16 sm:px-6">
      <div className="mx-auto max-w-[28rem]">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-[color:var(--muted-foreground)]">
              next in the invitation
            </p>
            <h2 className="mt-3 font-serif-display text-3xl leading-tight text-[color:var(--foreground)]">
              한 페이지로 이어지는 초대의 흐름
            </h2>
          </div>
          <span className="text-sm text-[color:var(--muted-foreground)]">
            single scrolling page
          </span>
        </div>

        <div className="grid gap-3">
          {[
            {
              title: "Archive",
              description:
                "필름 질감의 이미지와 짧은 캡션으로 세 왕자님의 밤을 미리 암시하는 장면들",
            },
            {
              title: "RSVP Flow",
              description:
                "참석 여부 전달하기 CTA에서 실제 응답 흐름으로 연결될 모바일 액션 영역",
            },
            {
              title: "Future Play Layer",
              description:
                "선물 상자, 하객 카드, 메시지 리본보드 같은 확장 기능을 위한 다음 단계",
            },
          ].map((preview, index) => (
            <article
              key={preview.title}
              className="rounded-[28px] border border-[color:var(--line-soft)] bg-[color:var(--surface)] px-5 py-5 shadow-[0_24px_48px_rgba(17,24,39,0.06)]"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[color:var(--accent)]">
                section 0{index + 3}
              </p>
              <h3 className="mt-3 font-serif-display text-2xl text-[color:var(--foreground)]">
                {preview.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[color:var(--foreground)]/70">
                {preview.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
