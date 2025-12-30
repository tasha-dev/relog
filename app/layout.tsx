// Codes by mahdi tasha
// Importing part
import { RootLayoutProps } from "@/type/component";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { JSX } from "react";
import "@/app/globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/util";

// Defining metadata
export const metadata: Metadata = {
  title: {
    default: "Relog – Instant AI Release Notes Generator",
    template: "%s | Relog",
  },
  description:
    "Generate professional, structured release notes instantly from any public GitHub repository. No login, no setup — paste URL, customize, edit & export as Markdown. Free forever.",
  keywords: [
    "release notes generator",
    "changelog ai",
    "github release notes",
    "conventional commits changelog",
    "free release notes tool",
    "ai changelog generator",
    "developer tools",
  ],
  authors: [{ name: "Mahdi Tasha", url: "https://tasha.vercel.app" }],
  creator: "Mahdi Tasha",
  publisher: "Relog",
  metadataBase: new URL("https://relog-inky.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://relog-inky.vercel.app",
    siteName: "Relog",
    title: "Relog – Professional Release Notes in Seconds",
    description:
      "No-auth, AI-powered release notes from any public GitHub repo. Edit in real-time, export clean Markdown. Free developer tool.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Relog – Instant AI Release Notes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relog – AI-Powered Release Notes Generator",
    description:
      "Create beautiful changelogs instantly. Paste repo URL → AI generates → Edit → Export. Free & no account needed.",
    images: ["/og-image.png"],
  },
  category: "developer",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Defining font
const geistFont = Geist({
  display: "block",
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Creating and exporting RootLayout component as default
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  // Returning JSX
  return (
    <html suppressHydrationWarning lang="en">
      <ThemeProvider>
        <body
          className={cn(
            "overflow-x-hidden overflow-y-auto min-h-dvh bg-background text-foreground prose dark:prose-invert prose-neutral",
            geistFont.className,
          )}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
