"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid gap-12 md:grid-cols-2 items-center">

      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
          Empowering Businesses with <span className="text-sky-600">AI</span>, Cloud & Full-Stack Innovation
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
          SkillForge AI Technologies builds enterprise-grade software, AI-powered
          tools, and modern applications while providing professional developer
          training.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
          <Link
            href="/services/web-development"
            className="px-6 py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-slate-300 rounded-md hover:bg-slate-50 transition text-white"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/bannerImage.png"
          alt="Banner"
          width={1000}
          height={1000}
          className="object-contain"
        />
      </motion.div>

    </section>
  );
}
