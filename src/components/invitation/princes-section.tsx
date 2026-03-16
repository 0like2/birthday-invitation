"use client";

import Image from "next/image";

const princes = [
  {
    name: "이상욱",
    image: "/stickers/prince-sanguk.png",
    color: "from-pink-100 to-rose-50",
    borderColor: "border-pink-200",
    delay: "0s",
  },
  {
    name: "고형빈",
    image: "/stickers/prince-hyeongbin.png",
    color: "from-violet-100 to-purple-50",
    borderColor: "border-violet-200",
    delay: "0.3s",
  },
  {
    name: "이영락",
    image: "/stickers/prince-yeongrak.png",
    color: "from-amber-100 to-yellow-50",
    borderColor: "border-amber-200",
    delay: "0.6s",
  },
];

export function PrincesSection() {
  return (
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-md text-center">
        <p className="text-xs font-medium tracking-wider text-[color:var(--accent)]">
          TODAY&apos;S MAIN CHARACTER
        </p>
        <h2 className="mt-2 font-serif-display text-2xl text-[color:var(--foreground)]">
          오늘의 주인공을 소개합니다!
        </h2>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {princes.map((prince) => (
            <div
              key={prince.name}
              className="group flex flex-col items-center"
            >
              <div
                className={`animate-bounce-slow overflow-hidden rounded-full border-4 ${prince.borderColor} bg-gradient-to-b ${prince.color} p-1 shadow-lg transition-transform duration-500 group-hover:scale-110`}
                style={{ animationDelay: prince.delay }}
              >
                <div className="relative h-24 w-24 overflow-hidden rounded-full bg-white sm:h-28 sm:w-28">
                  <Image
                    src={prince.image}
                    alt={prince.name}
                    fill
                    className="object-cover object-top scale-150 translate-y-4"
                    sizes="(max-width: 640px) 96px, 112px"
                  />
                </div>
              </div>
              <span
                className="animate-fade-up mt-3 inline-block rounded-full bg-white px-3 py-1.5 text-sm font-bold text-[color:var(--foreground)] shadow-sm"
                style={{ animationDelay: prince.delay }}
              >
                {prince.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm text-[color:var(--muted-foreground)]">
          같은 날 태어난 세 왕자님!
        </p>
      </div>
    </section>
  );
}
