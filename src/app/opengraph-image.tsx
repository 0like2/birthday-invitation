import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          position: "relative",
          background:
            "linear-gradient(135deg, #fffaf2 0%, #ffe8d8 45%, #f7d6d3 100%)",
          color: "#1f2140",
          fontFamily: '"Noto Sans KR", sans-serif',
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 32,
            borderRadius: 36,
            border: "3px solid rgba(31,33,64,0.1)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.82), rgba(255,255,255,0.55))",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -40,
            width: 280,
            height: 280,
            borderRadius: 9999,
            background: "rgba(255, 91, 91, 0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -20,
            width: 260,
            height: 260,
            borderRadius: 9999,
            background: "rgba(63, 99, 255, 0.16)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 80px",
            width: "100%",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 18px",
                borderRadius: 9999,
                background: "rgba(31,33,64,0.08)",
                fontSize: 24,
              }}
            >
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 9999,
                  background: "#ff5b5b",
                }}
              />
              세 왕자님 대잔치
            </div>
            <div
              style={{
                padding: "10px 18px",
                borderRadius: 9999,
                background: "rgba(255,255,255,0.62)",
                border: "2px dashed rgba(31,33,64,0.12)",
                fontSize: 20,
              }}
            >
              2026.03.20 FRI · 8PM
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                display: "flex",
                gap: 12,
                fontSize: 26,
                color: "rgba(31,33,64,0.72)",
              }}
            >
              <span>이상욱</span>
              <span>·</span>
              <span>고형빈</span>
              <span>·</span>
              <span>이영락</span>
            </div>
            <div
              style={{
                fontSize: 92,
                lineHeight: 0.94,
                fontWeight: 800,
                letterSpacing: "-0.06em",
                maxWidth: 760,
              }}
            >
              세 왕자님의 생일파티
            </div>
            <div
              style={{
                fontSize: 34,
                lineHeight: 1.35,
                maxWidth: 760,
                color: "rgba(31,33,64,0.8)",
              }}
            >
              같은 날 태어난 세 왕자님의 성대한 생일잔치.
              <br />
              을지로에서 웃고 떠들 밤을 함께 만들어주세요.
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: "22px 24px",
                borderRadius: 28,
                background: "rgba(255,255,255,0.72)",
                border: "2px solid rgba(31,33,64,0.08)",
              }}
            >
              <div style={{ fontSize: 22, color: "rgba(31,33,64,0.6)" }}>장소</div>
              <div style={{ fontSize: 38, fontWeight: 700 }}>을지로 파티룸</div>
            </div>
            <div
              style={{
                padding: "20px 24px",
                borderRadius: 28,
                background: "#1f2140",
                color: "#fff7ee",
                fontSize: 30,
              }}
            >
              왕관은 준비됐고, 이제 사람만 오면 됩니다
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
