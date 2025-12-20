"use client";

import { motion } from "framer-motion";
import { aboutData } from "../constants/textConstant";

export default function About() {
    return (
        <section className={`px-4 sm:px-10 py-12`}>
            <div className={`max-w-7xl mx-auto`}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`text-center mb-16`}
                >
                    <h2
                        className={`text-4xl sm:text-5xl font-bold mb-4
                                   bg-gradient-to-r from-amber-400 to-yellow-300
                                   text-transparent bg-clip-text`}
                    >
                        About Us
                    </h2>
                    <p className={`text-amber-200/80 mx-auto text-sm sm:text-base`}>
                        Our story, values, and approach to building meaningful
                        technology solutions.
                    </p>
                </motion.div>

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10`}>
                    {aboutData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative`}
                        >
                            {/* LEFT COLUMN RAIL */}
                            <div className={`absolute left-0 top-0 h-full w-[2px] bg-amber-400/40`} />

                            {/* RIGHT COLUMN RAIL */}
                            <div className={`absolute right-0 top-0 h-full w-[2px] bg-amber-400/40`} />

                            {/* LEFT DOT */}
                            <div
                                className={`absolute left-2 top-6 w-4 h-4 rounded-full
                                           bg-amber-400 shadow-md shadow-amber-400/40`}
                            />

                            {/* RIGHT DOT */}
                            <div
                                className={`absolute right-2 top-6 w-4 h-4 rounded-full
                                           bg-amber-400 shadow-md shadow-amber-400/40`}
                            />

                            {/* CARD */}
                            <div
                                className={`mx-8
                                           bg-gradient-to-br from-amber-900/20 to-black/60
                                           backdrop-blur-md
                                           border border-amber-600/30
                                           rounded-2xl p-3
                                           shadow-lg shadow-amber-900/30`}
                            >
                                <h3 className={`text-xl font-semibold mb-3 text-amber-300`}>
                                    {item.title}
                                </h3>
                                <p className={`text-amber-200/80 text-sm sm:text-base leading-relaxed`}>
                                    {item.content}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
