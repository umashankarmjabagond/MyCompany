"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aboutData } from "../constants/textConstant";

export default function About() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            className="px-2 sm:px-10 py-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-4"
                >
                    <h2
                        className="text-4xl sm:text-5xl font-bold mb-4
                                   bg-gradient-to-r from-amber-400 to-yellow-300
                                   text-transparent bg-clip-text"
                    >
                        About Us
                    </h2>
                    <p className="text-amber-200/80 max-w-2xl mx-auto text-sm sm:text-base">
                        Learn more about who we are, what we build, and how we help
                        businesses and professionals grow with technology.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {aboutData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="rounded-2xl overflow-hidden
                                       bg-gradient-to-br from-amber-900/25 to-black/70
                                       backdrop-blur-md
                                       border border-amber-600/30
                                       shadow-lg shadow-amber-900/30"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="flex justify-between items-center w-full
                                           px-6 py-5 text-left
                                           text-lg font-semibold
                                           text-amber-200 hover:text-amber-300
                                           transition"
                            >
                                {item.title}
                                <span
                                    className={`transform transition-transform duration-300
                                                text-amber-400
                                                ${openIndex === index ? "rotate-180" : ""}`}
                                >
                                    ▼
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35 }}
                                        className="px-6 pb-6 text-amber-200/80 text-sm sm:text-base leading-relaxed"
                                    >
                                        {item.content}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
