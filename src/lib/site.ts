export const siteConfig = {
  name: "세 왕자님의 생일파티",
  description:
    "같은 날 태어난 세 왕자님의 성대한 생일잔치. 2026년 3월 20일 오후 8시, 을지로에서 만나요.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://birthday-invitation-olive-kappa.vercel.app",
};

export function getAbsoluteUrl(path = "") {
  if (!path) {
    return siteConfig.url;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
