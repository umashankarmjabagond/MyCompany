import Link from "next/link";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import Script from "next/script";
import { JSX } from "react";
import CoreServices from "./components/CoreServices";
import TeamSection from "./components/Team";
import ProcessSection from "./components/Process";
import GoldDivider from "./components/GoldDivider";


const Hero = dynamic(() => import("./components/Hero"), { ssr: true });
const About = dynamic(() => import("./components/About"), { ssr: true });
const ProjectsSection = dynamic(() => import("./components/ProjectsSection"), { ssr: true });


export const metadata: Metadata = {
  title: "SkillForge AI Technologies — AI Tools, Web Development & Training",
  description:
    "SkillForge AI Technologies provides AI-driven automation, full-stack web and mobile app development, and professional training for enterprises worldwide.",
  openGraph: {
    title: "SkillForge AI Technologies",
    description:
      "AI-driven automation, full-stack development, and training services",
    url: "https://skillforgeai.com",
    images: [{ url: "https://skillforgeai.com/logo.png" }],
    siteName: "SkillForge AI Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillForge AI Technologies",
    description: "AI Tools, Web Development & Training",
    images: ["https://skillforgeai.com/logo.png"],
  },
};



export default function Home(): JSX.Element {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SkillForge AI Technologies",
    url: "https://skillforgeai.com",
    logo: "https://skillforgeai.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/skillforgeai",
      "https://twitter.com/skillforgeai",
    ],
  };


  return (
    <main className="min-h-screen bg-black">
      <Script
        type="application/ld+json"
        id="organization-jsonld"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <GoldDivider />
      <About />
      <GoldDivider />
      <ProjectsSection />
      <GoldDivider />
      <CoreServices />
      <GoldDivider />
      <ProcessSection />
      <GoldDivider />
      <TeamSection />
    </main>
  );
}
