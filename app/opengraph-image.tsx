import { ImageResponse } from "next/og";

// Branded 1200×630 social preview, generated at build time.
// Next also uses this as the Twitter image when no twitter-image file exists.
export const alt = "Akhil Vij — Staff Engineer & Founder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(180deg, #ffffff 0%, #eceef4 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row: monogram + domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#2b46d4",
              color: "#ffffff",
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            AV
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#767d8d" }}>
            akhilvij.com
          </div>
        </div>

        {/* center: name + role + line */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 100,
              fontWeight: 700,
              color: "#161a23",
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            Akhil Vij
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              fontWeight: 600,
              color: "#2b46d4",
              marginTop: 18,
            }}
          >
            Staff Engineer &amp; Founder
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#3d4453",
              marginTop: 22,
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            Full-stack + AI systems — from the data pipeline to the pixel.
          </div>
        </div>

        {/* bottom: accent bar + location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{ display: "flex", width: 56, height: 6, background: "#2b46d4", borderRadius: 3 }}
          />
          <div style={{ display: "flex", fontSize: 24, color: "#767d8d" }}>
            Delhi NCR, India
          </div>
        </div>
      </div>
    ),
    size,
  );
}
