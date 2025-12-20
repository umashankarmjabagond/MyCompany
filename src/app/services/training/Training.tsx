"use client";

import { TrainingPrograms } from "@/app/constants/textConstant";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function TrainingPage() {
    const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
    const [activeId, setActiveId] = useState<string | null>(null);

    const scrollToSection = (id: string) => {
        sectionsRef.current[id]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    // Scroll spy for active navbar item
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-45% 0px -45% 0px",
            }
        );

        Object.values(sectionsRef.current).forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white px-4 sm:px-10 py-16">
            {/* ===== PAGE HEADER ===== */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-sky-400 to-cyan-300 text-amber-200  bg-clip-text">
                    Training Journey
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A structured, hands-on learning timeline to transform you from a
                    beginner into a confident Full Stack Developer.
                </p>
            </motion.div>

            {/* ===== STICKY PILL NAVBAR ===== */}
            <div
                className="flex flex-wrap justify-center gap-3 mb-20 sticky top-20 z-40
               bg-gradient-to-r from-amber-900/40 via-amber-800/30 to-amber-900/40
               backdrop-blur-md py-4 px-3 rounded-2xl
               border border-amber-600/40
               shadow-lg shadow-amber-900/30"
            >
                {TrainingPrograms.map(({ id, title }) => (
                    <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all border
                ${activeId === id
                                ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-black border-amber-400 shadow-md shadow-amber-400/40"
                                : "bg-black/40 text-amber-200 border-amber-700/40 hover:bg-amber-500/10 hover:text-amber-300 hover:shadow-md hover:shadow-amber-700/30"
                            }
            `}
                    >
                        {title}
                    </button>
                ))}
            </div>

            {/* ===== TIMELINE ===== */}
            <div className="relative max-w-6xl mx-auto">
                <div className="absolute left-5 sm:left-1/2 transform sm:-translate-x-1/2 h-full border-2 border-sky-800" />

                <div className="flex flex-col space-y-28">
                    {TrainingPrograms.map((module, index) => (
                        <section
                            key={module.id}
                            id={module.id}
                            ref={(el) => {
                                sectionsRef.current[module.id] = el;
                            }}
                            className={`relative flex flex-col md:flex-row items-center scroll-mt-40 ${index % 2 === 0
                                ? "md:flex-row md:pl-10"
                                : "md:flex-row-reverse md:justify-between md:pr-10"
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-5 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 bg-sky-500 rounded-full shadow-lg shadow-sky-500/40 animate-pulse" />

                            {/* Image + Benefits */}
                            <div
                                className={`md:w-1/2 w-full flex flex-col mt-10 md:mt-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-24"
                                    }`}
                            >
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: index % 2 === 0 ? -60 : 60,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <Image
                                        src={module.image}
                                        alt={module.title}
                                        width={450}
                                        height={280}
                                        className="rounded-2xl shadow-md object-fill w-full h-[280px]"
                                    />
                                </motion.div>

                                <div className="mt-4 bg-black/60 rounded-xl p-4 w-full shadow-sm border border-sky-700">
                                    <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                                        Key Benefits
                                    </h4>
                                    <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                                        {module.Benefits.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Text Content */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? 60 : -60,
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className={`md:w-1/2 w-full mt-8 md:mt-0 ${index % 2 === 0 ? "md:pl-24" : "md:pr-16"
                                    }`}
                            >
                                <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-sky-400">
                                    {module.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {module.content}
                                </p>
                            </motion.div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
