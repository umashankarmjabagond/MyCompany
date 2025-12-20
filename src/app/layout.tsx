import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { JSX } from "react";
import { RootLayoutProps } from "./types/types";

export const metadata: Metadata = {
  title: "SkillForge AI Technologies — AI, Cloud & Full-Stack Solutions",
  description:
    "SkillForge AI Technologies offers AI-powered solutions, full-stack web and mobile development, and corporate training programs for enterprises worldwide.",
  openGraph: {
    title: "SkillForge AI Technologies",
    description:
      "AI tools, full-stack development, cloud services, and professional training.",
    url: "https://skillforgeai.com",
    siteName: "SkillForge AI Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillForge AI Technologies",
    description:
      "AI tools, full-stack development, cloud services, and professional training.",
  },
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      {/* <body className="min-h-screen flex flex-col text-slate-800 font-sans"> */}
      <body suppressHydrationWarning className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
