

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { wevDevSection } from "@/app/constants/textConstant";
//className="w-6 h-6 text-sky-600" 


export default function WebDevClient() {
    const [active, setActive] = useState("frontend");

    const current = wevDevSection.find((s) => s.id === active)!;

    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <h1 className="text-3xl font-bold text-sky-700 mb-3">
                    Web Development Excellence
                </h1>
                <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
                    Discover how SkillForge builds full-scale web applications — from
                    interactive frontends to scalable backends and automated cloud deployments.
                </p>
            </motion.div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {wevDevSection.map(({ id, title, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => setActive(id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all ${active === id
                            ? "bg-sky-600 text-white border-sky-600"
                            : "bg-white text-slate-700 border-slate-300 hover:border-sky-500 hover:text-sky-600"
                            }`}
                    >
                        <Icon className="text-sky-500 w-6 h-6" />
                        {title}
                    </button>
                ))}
            </div>

            {/* Content Section */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col md:flex-row gap-10 items-center"
                >
                    <div className="md:w-1/2 w-full">
                        <Image
                            src={current.image}
                            alt={current.title}
                            width={500}
                            height={350}
                            className="rounded-2xl shadow-md object-cover w-full"
                        />
                    </div>
                    <div className="md:w-1/2 w-full">
                        <h2 className="text-xl font-semibold text-sky-700 mb-3">
                            {current.title}
                        </h2>
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                            {current.content}
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}




