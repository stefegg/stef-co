import { ImageResponse } from "next/og";

export const alt = "Stephen Egbert — Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori (used by ImageResponse) needs raw TTF/OTF data, which next/font's
// woff2 output can't provide, so load the fonts from Google, subsetted to the
// exact glyphs we render.
async function loadGoogleFont(font: string, weight: number, text: string) {
  const family = font.replace(/ /g, "+");
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/
  );
  if (resource?.[1]) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }
  throw new Error(`Failed to load font: ${font}`);
}

export default async function Image() {
  const name = "Stephen Egbert";
  const title = "SENIOR SOFTWARE ENGINEER";

  const [lobster, robotoCondensed] = await Promise.all([
    loadGoogleFont("Lobster", 400, name),
    loadGoogleFont("Roboto Condensed", 300, title),
  ]);

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
          gap: 28,
          backgroundColor: "#18181b",
        }}
      >
        <div
          style={{
            fontFamily: "Lobster",
            fontSize: 140,
            lineHeight: 1,
            color: "#BB86FC",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "Roboto Condensed",
            fontWeight: 300,
            fontSize: 60,
            color: "#BB86FC",
            letterSpacing: "0.18em",
            textShadow: "3px 3px 0px #23d1f6",
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Lobster", data: lobster, style: "normal", weight: 400 },
        {
          name: "Roboto Condensed",
          data: robotoCondensed,
          style: "normal",
          weight: 300,
        },
      ],
    }
  );
}
