"use client"

import { useRef } from "react";
import { motion } from "framer-motion";
import { TrainingPrograms } from "@/app/constants/textConstant";
import Image from "next/image";

export default function TrainingClient() {
    const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

    const scrollToSection = (id: string) => {
        sectionsRef.current[id]?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className="text-5xl font-bold text-sky-700 mb-4">
                    Corporate & Online Training Programs
                </h1>
                <p className="text-white text-sm sm:text-base max-w-4xl mx-auto">
                    Upskill your team with real-world, project-driven learning experiences.
                    Our expert-led programs focus on current technologies from full-stack development
                    to cloud and AI integration.
                </p>
            </motion.div>

            {/* Training Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {TrainingPrograms.map(({ id, icon: Icon, title }) => (
                    <motion.div
                        key={id}
                        whileHover={{ scale: 1.05 }}
                        className="p-6 border rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition-all"
                        onClick={() => scrollToSection(id)}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <Icon className="text-sky-600 w-6 h-6" />
                            <h3 className="text-lg font-semibold text-white">{title}</h3>
                        </div>
                        <p className="text-white text-sm">
                            Click to explore detailed course content and key outcomes.
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Detailed Sections */}
            <div className="space-y-24">
                {TrainingPrograms.map(({ id, title, image, content, Benefits }) => (
                    <motion.section
                        key={id}
                        id={id}
                        ref={(el) => {
                            sectionsRef.current[id] = el;
                        }}
                        className="scroll-mt-24"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-col md:flex-row md:items-start gap-10">
                            {/* Left: Image + Benefits */}
                            <div className="md:w-1/2 w-full flex flex-col items-center md:items-start">
                                <motion.div
                                    initial={{ opacity: 0, x: -60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="w-full"
                                >
                                    <Image
                                        src={image}
                                        alt={title}
                                        width={450}
                                        height={280}
                                        className="rounded-2xl shadow-md object-cover w-full"
                                    />
                                </motion.div>
                                <div className="mt-3 bg-black rounded-xl p-4 w-full shadow-sm border border-sky-700">
                                    <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                                        Key Benefits
                                    </h4>
                                    <ul className="text-white text-sm list-disc list-inside space-y-1">
                                        {Benefits.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="md:w-1/2 w-full">
                                <h2 className="text-2xl font-semibold text-white mb-3">{title}</h2>
                                <p className="text-white text-sm sm:text-base leading-relaxed whitespace-pre-line">
                                    {content}
                                </p>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>
        </main >
    );
}