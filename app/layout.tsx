import type { Metadata, Viewport } from "next";
import { Newsreader, Archivo, IBM_Plex_Mono } from "next/font/google";
import { email, socials } from "@/lib/content";
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
  "Staff full-stack engineer & founder in Delhi NCR. Shipping AI-heavy web products across fintech, healthcare, and developer education — owning the whole stack, from the data model to the interface.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Akhil Vij — Staff Engineer & Founder",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Akhil Vij",
    title: "Akhil Vij — Staff Engineer & Founder",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhil Vij — Staff Engineer & Founder",
    description,
  },
};

// Structured data — helps search engines understand the "Akhil Vij" entity.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akhil Vij",
  url: siteUrl,
  email: `mailto:${email}`,
  telephone: "+91-9912752587",
  jobTitle: "Staff Software Engineer & Founder",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Delhi NCR",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "International Institute of Information Technology, Hyderabad (IIIT-H)",
  },
  knowsAbout: [
    "Full-stack engineering",
    "AI systems",
    "LLM extraction",
    "Agent orchestration",
    "Design systems",
    "Frontend architecture",
  ],
  sameAs: socials.map((s) => s.href),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eceef4",
};

// Runs before first paint: applies the saved theme so there's no flash
// of the wrong palette. Light is the default (set statically on <html>).
const themeScript = `(function(){try{var t=localStorage.getItem('akv-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${newsreader.variable} ${archivo.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
