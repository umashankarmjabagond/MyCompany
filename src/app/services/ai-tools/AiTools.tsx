

"use client";
import { AiToolDetails } from "@/app/constants/textConstant";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AiToolsClient() {
    const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

    const scrollToSection = (id: string) => {
        sectionsRef.current[id]?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* ===== INTRO SECTION ===== */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className="text-6xl font-bold text-sky-700 mb-4">
                    AI Tools & Automation Solutions
                </h1>
                <p className="text-white text-sm sm:text-base max-w-7xl mx-auto">
                    Explore how SkillForge AI Technologies transforms industries with
                    intelligent tools, predictive analytics, and real-world automation that
                    even freshers can easily understand.
                </p>
            </motion.div>

            {/* ===== CARDS GRID ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {AiToolDetails.map(({ id, icon: Icon, title }, index) => (
                    <motion.div
                        key={id}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="p-6 border rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition-all bg-transparent border-sky-800"
                        onClick={() => scrollToSection(id)}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <Icon className="text-sky-500 w-6 h-6" />
                            <h3 className="text-lg font-semibold text-white">{title}</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Click to explore details and real-world examples.
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* ===== DETAILED SECTIONS ===== */}
            <div className="space-y-24">
                {AiToolDetails.map(({ id, title, image, content, Benefits }, index) => (
                    <motion.section
                        key={id}
                        id={id}
                        ref={(el) => {
                            sectionsRef.current[id] = el;
                        }}
                        className="scroll-mt-24"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col md:flex-row md:items-start gap-10">
                            {/* LEFT SIDE - IMAGE + BENEFITS */}
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
                                        height={300}
                                        className="rounded-2xl shadow-md object-cover w-full"
                                    />
                                </motion.div>

                                {/* BENEFITS BOX */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="mt-1 bg-gradient-to-br justify-center from-sky-900 to-sky-800 rounded-xl py-1 px-5 w-full shadow-md border border-sky-700"
                                >
                                    <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">
                                        Key Benefits
                                    </h4>
                                    <ul className="text-gray-200 text-sm list-disc list-inside">
                                        {Benefits?.map((data, index) => (
                                            <li key={index}>{data}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                            {/* RIGHT SIDE - TEXT */}
                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="md:w-1/2 w-full"
                            >
                                <h2 className="text-2xl font-semibold text-sky-400 mb-3">
                                    {title}
                                </h2>
                                <p className="text-gray-200 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                                    {content}
                                </p>
                            </motion.div>
                        </div>
                    </motion.section>
                ))}
            </div>
        </>
    );
}

