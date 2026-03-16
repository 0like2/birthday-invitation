import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpengraphImage() {
  const fontData = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLTq8H4hfeE.woff",
    ),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(180deg, #fff5f5 0%, #fff0f3 40%, #fce4ec 100%)",
          fontFamily: '"Noto Sans KR", sans-serif',
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -60,
            left: -40,
            width: 220,
            height: 220,
            borderRadius: 9999,
            background: "rgba(255, 194, 209, 0.5)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -50,
            right: -30,
            width: 200,
            height: 200,
            borderRadius: 9999,
            background: "rgba(184, 232, 208, 0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 80,
            width: 120,
            height: 120,
            borderRadius: 9999,
            background: "rgba(232, 218, 248, 0.5)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 100,
            left: 60,
            width: 80,
            height: 80,
            borderRadius: 9999,
            background: "rgba(255, 214, 95, 0.3)",
          }}
        />

        {/* Main card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            padding: "40px 60px",
            position: "relative",
          }}
        >
          {/* Inner card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.85)",
              borderRadius: 40,
              border: "3px solid rgba(255, 107, 138, 0.2)",
              padding: "44px 60px",
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            {/* Top badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 24px",
                borderRadius: 9999,
                background: "rgba(255, 194, 209, 0.5)",
                fontSize: 22,
                color: "#e8457c",
                fontWeight: 700,
                letterSpacing: "0.1em",
              }}
            >
              BIRTHDAY PARTY
            </div>

            {/* Title */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 24,
              }}
            >
              <div
                style={{
                  fontSize: 80,
                  fontWeight: 800,
                  color: "#4a3728",
                  lineHeight: 1.1,
                  textAlign: "center",
                  letterSpacing: "-0.03em",
                }}
              >
                세 왕자님의 생일파티
              </div>
            </div>

            {/* Names */}
            <div
              style={{
                display: "flex",
                gap: 16,
                marginTop: 24,
                fontSize: 28,
                color: "#e8457c",
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  padding: "8px 20px",
                  borderRadius: 9999,
                  background: "rgba(255, 194, 209, 0.3)",
                  border: "2px solid rgba(255, 107, 138, 0.2)",
                }}
              >
                고형빈
              </span>
              <span
                style={{
                  padding: "8px 20px",
                  borderRadius: 9999,
                  background: "rgba(232, 218, 248, 0.3)",
                  border: "2px solid rgba(196, 168, 232, 0.3)",
                }}
              >
                이상욱
              </span>
              <span
                style={{
                  padding: "8px 20px",
                  borderRadius: 9999,
                  background: "rgba(184, 232, 208, 0.3)",
                  border: "2px solid rgba(126, 203, 161, 0.3)",
                }}
              >
                이영락
              </span>
            </div>

            {/* Date & Location */}
            <div
              style={{
                display: "flex",
                gap: 24,
                marginTop: 28,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "14px 28px",
                  borderRadius: 24,
                  background: "rgba(255, 248, 231, 0.8)",
                  border: "2px solid rgba(255, 214, 95, 0.3)",
                }}
              >
                <div style={{ fontSize: 18, color: "rgba(74,55,40,0.6)" }}>
                  날짜
                </div>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#4a3728",
                    marginTop: 4,
                  }}
                >
                  2026. 3. 20 금요일
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "14px 28px",
                  borderRadius: 24,
                  background: "rgba(255, 232, 236, 0.6)",
                  border: "2px solid rgba(255, 107, 138, 0.15)",
                }}
              >
                <div style={{ fontSize: 18, color: "rgba(74,55,40,0.6)" }}>
                  시간 & 장소
                </div>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#4a3728",
                    marginTop: 4,
                  }}
                >
                  오후 8시 · 을지로
                </div>
              </div>
            </div>

            {/* Bottom quote */}
            <div
              style={{
                marginTop: 24,
                fontSize: 24,
                color: "rgba(74, 55, 40, 0.6)",
              }}
            >
              왕관은 준비됐고, 이제 사람만 오면 됩니다!
            </div>
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
