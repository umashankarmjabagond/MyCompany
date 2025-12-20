"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4"
      >
        <div
          className={`flex flex-col md:flex-row items-center gap-10
                     bg-gradient-to-br from-amber-900/25 to-black/70
                     backdrop-blur-md
                     border border-amber-600/40
                     rounded-3xl
                     px-8 py-8 sm:px-12
                     shadow-xl shadow-amber-900/40`}
        >
          <div className="flex-1 text-center md:text-left">
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl font-extrabold
                         bg-gradient-to-r from-amber-400 to-yellow-300
                         text-transparent bg-clip-text`}
            >
              Empowering Businesses with AI, Cloud & Full-Stack Innovation
            </h1>

            <p
              className={`mt-3 text-sm sm:text-base
                         text-amber-200/80 max-w-2xl`}
            >
              SkillForge AI Technologies builds enterprise-grade software,
              AI-powered tools, and modern applications while providing
              professional developer training.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="/services/web-development"
                className={`px-6 py-2.5 rounded-lg font-semibold text-black
                           bg-gradient-to-r from-amber-400 to-yellow-300
                           hover:from-amber-300 hover:to-yellow-200
                            transition-all shadow-md shadow-amber-400/40`}
              >
                Our Services
              </Link>

              <Link
                href="/contact"
                className={`px-6 py-2.5 rounded-lg font-semibold
                           text-amber-200
                           border border-amber-600/50
                           bg-black/40
                           hover:bg-amber-500/10 hover:text-amber-300
                           transition-all`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative w-full md:w-[320px] flex-shrink-0">
            <div
              className={`absolute inset-0 rounded-2xl
                         bg-gradient-to-tr from-amber-900/30 to-transparent
                         blur-xl`}
            />
            <Image
              src="/bannerImage.png"
              alt="Banner"
              width={320}
              height={220}
              className="relative object-contain rounded-2xl"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section >
  );
}
