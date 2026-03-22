import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Hudson Shreve — Sales Leader & AI Builder",
  description:
    "Sales and operations leader with 8 years across SaaS, logistics, and entrepreneurship. Built 6 production AI tools. Founded a $200K+ service business. Based in Northwest Arkansas.",
  keywords: [
    "Hudson Shreve",
    "sales leader",
    "AI builder",
    "SaaS",
    "logistics",
    "Northwest Arkansas",
    "entrepreneur",
  ],
  authors: [{ name: "Hudson Shreve" }],
  openGraph: {
    title: "Hudson Shreve — Sales Leader & AI Builder",
    description:
      "The only DSM in his region to exceed 100% quota in 2025 — while building 6 AI tools from scratch.",
    url: "https://hudsonshreve.com",
    siteName: "Hudson Shreve",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hudson Shreve — Sales Leader & AI Builder",
    description:
      "Sales leader. AI builder. Founder. Based in NW Arkansas.",
  },
  metadataBase: new URL("https://hudsonshreve.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
