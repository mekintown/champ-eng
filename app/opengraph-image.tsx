import { ImageResponse } from "next/og";

import { siteName, siteTagline } from "./site-config";

export const alt = `${siteName} — ${siteTagline}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

/**
 * Branded link-preview card, rendered at build time. Text is kept in Latin
 * script because `ImageResponse` only ships a Latin fallback font — adding Thai
 * copy here would require bundling a Thai font file.
 */
export default function OpengraphImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px 96px",
          background: "linear-gradient(150deg, #ffffff 30%, #f1f1f2 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#922D2E",
            }}
          />
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#922D2E",
            }}
          >
            {siteName}
          </div>
        </div>
        <div
          style={{
            marginTop: 36,
            maxWidth: 820,
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -1,
            color: "#111111",
          }}
        >
          {siteTagline}
        </div>
        <div
          style={{
            marginTop: 34,
            maxWidth: 760,
            fontSize: 30,
            lineHeight: 1.5,
            color: "rgba(0, 0, 0, 0.62)",
          }}
        >
          A checklist tool for mentee applicants — every phase of the
          application, in one place.
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 26,
            fontWeight: 600,
            color: "#922D2E",
          }}
        >
          champeng.site
        </div>
      </div>
    ),
    size,
  );
}
