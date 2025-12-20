"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-2 sm:px-2 py-12"
      >
        <div
          className="grid gap-12 md:grid-cols-2 items-center
                     bg-gradient-to-br from-amber-900/25 to-black/70
                     backdrop-blur-md
                     border border-amber-600/40
                     rounded-[32px]
                     p-8 sm:p-14
                     shadow-2xl shadow-amber-900/40"
        >
          <div className="text-center md:text-left">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug
                         bg-gradient-to-r from-amber-400 to-yellow-300
                         text-transparent bg-clip-text"
            >
              Empowering Businesses with{" "}
              <span className="block">
                AI, Cloud & Full-Stack Innovation
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg
                          text-amber-200/80 leading-relaxed max-w-xl">
              SkillForge AI Technologies builds enterprise-grade software,
              AI-powered tools, and modern applications while providing
              professional developer training.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/services/web-development"
                className="px-7 py-3 rounded-lg font-semibold text-black
                           bg-gradient-to-r from-amber-400 to-yellow-300
                           hover:from-amber-300 hover:to-yellow-200
                           transition-all shadow-md shadow-amber-400/40"
              >
                Our Services
              </Link>

              <Link
                href="/contact"
                className="px-7 py-3 rounded-lg font-semibold
                           text-amber-200
                           border border-amber-600/50
                           bg-black/40
                           hover:bg-amber-500/10 hover:text-amber-300
                           transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div
              className="absolute inset-0 rounded-3xl
                         bg-gradient-to-tr from-amber-900/30 to-transparent
                         blur-2xl"
            />

            <Image
              src="/bannerImage.png"
              alt="Banner"
              width={900}
              height={700}
              className="relative object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
