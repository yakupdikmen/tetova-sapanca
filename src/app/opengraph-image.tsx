import { ImageResponse } from "next/og";

export const alt = "Tetova Sapanca | Lüks Isıtmalı Havuzlu VIP Bungalovlar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 45%, #022c22 100%)",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "10px 24px",
            borderRadius: 999,
            border: "1px solid rgba(16,185,129,0.4)",
            background: "rgba(16,185,129,0.08)",
            color: "#34d399",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Sapanca, Türkiye
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 92,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: -1,
          }}
        >
          Tetova Sapanca
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontSize: 36,
            fontWeight: 500,
            color: "#cbd5e1",
            textAlign: "center",
          }}
        >
          Lüks Isıtmalı Havuzlu VIP Bungalovlar
        </div>
      </div>
    ),
    { ...size }
  );
}
