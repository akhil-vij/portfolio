import type { Metadata, Viewport } from "next";
import { Newsreader, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

const siteUrl = "https://akhilvij.com";
const description =
  "Staff full-stack engineer & co-founder in Delhi NCR. Shipping AI-heavy web products across fintech, healthcare, and developer education — owning the whole stack, from the data model to the interface.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Akhil Vij — Staff Engineer & Co-founder",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Akhil Vij",
    title: "Akhil Vij — Staff Engineer & Co-founder",
    description,
  },
  twitter: {
    card: "summary",
    title: "Akhil Vij — Staff Engineer & Co-founder",
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e1620",
};

// Runs before first paint: applies the saved theme so there's no flash
// of the wrong palette. Dark is the default (set statically on <html>).
const themeScript = `(function(){try{var t=localStorage.getItem('akv-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${newsreader.variable} ${archivo.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
