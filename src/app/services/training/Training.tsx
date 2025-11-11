"use client";

import { TrainingPrograms } from "@/app/constants/textConstant";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TrainingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white px-4 sm:px-10 py-16">
            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
                    Training Journey
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A structured, hands-on learning timeline to transform you from a
                    beginner into a confident Full Stack Developer.
                </p>
            </motion.div>

            <div className="relative max-w-6xl mx-auto">
                <div className="absolute left-5 sm:left-1/2 transform sm:-translate-x-1/2 h-full border-2 border-sky-800" />

                <div className="flex flex-col space-y-24">
                    {TrainingPrograms.map((module, index) => (
                        <div
                            key={module.id}
                            className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0
                                ? "md:flex-row md:pl-10" // left side
                                : "md:flex-row-reverse md:justify-between md:pr-10" // right side
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-5 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 bg-sky-500 rounded-full shadow-lg shadow-sky-500/40 animate-pulse" />

                            {/* Left or Right Block: Image + Benefits */}
                            <div
                                className={`md:w-1/2 w-full flex flex-col justify-between mt-10 md:mt-0 ${index % 2 === 0
                                    ? "md:pr-16" // More space from center line (left side)
                                    : "md:pl-24" // Extra push for right side
                                    }`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="w-full"
                                >
                                    <Image
                                        src={module.image}
                                        alt={module.title}
                                        width={450}
                                        height={280}
                                        className="rounded-2xl shadow-md object-fill w-full h-[280px]"
                                    />
                                </motion.div>

                                {/* Benefits box directly below image */}
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

                            {/* Text content (opposite side) */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
