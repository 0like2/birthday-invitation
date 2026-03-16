import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpengraphImage() {
  // 한국어 포함 woff 폰트 파일 로드
  const fontData = await readFile(
    join(
      process.cwd(),
      "node_modules/@fontsource/noto-sans-kr/files/noto-sans-kr-24-700-normal.woff",
    ),
  );

  // 동그라미 배너 이미지 로드
  const bannerData = await readFile(
    join(process.cwd(), "public/stickers/donggrami-banner.jpg"),
  );
  const bannerBase64 = `data:image/jpeg;base64,${bannerData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(180deg, #fff5f5 0%, #fff0f3 40%, #fce4ec 100%)",
          fontFamily: '"Noto Sans KR", sans-serif',
          position: "relative",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -40,
            left: -30,
            width: 160,
            height: 160,
            borderRadius: 9999,
            background: "rgba(255, 194, 209, 0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -30,
            right: -20,
            width: 140,
            height: 140,
            borderRadius: 9999,
            background: "rgba(184, 232, 208, 0.35)",
          }}
        />

        {/* Main card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: 36,
            border: "3px solid rgba(255, 107, 138, 0.2)",
            padding: "32px 40px",
            width: "100%",
            height: "100%",
            gap: 20,
          }}
        >
          {/* 동그라미 배너 이미지 */}
          <img
            src={bannerBase64}
            width={1100}
            height={220}
            style={{
              borderRadius: 16,
              objectFit: "contain",
              width: "100%",
              maxHeight: 220,
            }}
          />

          {/* Info row */}
          <div
            style={{
              display: "flex",
              gap: 20,
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: "10px 24px",
                borderRadius: 9999,
                background: "rgba(255, 194, 209, 0.5)",
                fontSize: 24,
                color: "#e8457c",
                fontWeight: 700,
              }}
            >
              BIRTHDAY PARTY
            </div>
            <div
              style={{
                padding: "10px 24px",
                borderRadius: 20,
                background: "rgba(255, 248, 231, 0.8)",
                border: "2px solid rgba(255, 214, 95, 0.3)",
                fontSize: 24,
                fontWeight: 700,
                color: "#4a3728",
              }}
            >
              2026. 3. 20
            </div>
          </div>

          {/* Names */}
          <div
            style={{
              display: "flex",
              gap: 12,
              fontSize: 26,
              color: "#e8457c",
              fontWeight: 700,
            }}
          >
            <span
              style={{
                padding: "8px 20px",
                borderRadius: 9999,
                background: "rgba(255, 194, 209, 0.3)",
              }}
            >
              고형빈
            </span>
            <span
              style={{
                padding: "8px 20px",
                borderRadius: 9999,
                background: "rgba(232, 218, 248, 0.3)",
              }}
            >
              이상욱
            </span>
            <span
              style={{
                padding: "8px 20px",
                borderRadius: 9999,
                background: "rgba(184, 232, 208, 0.3)",
              }}
            >
              이영락
            </span>
          </div>

          <div
            style={{
              fontSize: 24,
              color: "rgba(74, 55, 40, 0.55)",
            }}
          >
            장소 잡았고, 케이크 샀고, 너만 오면 된다!
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Noto Sans KR",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
