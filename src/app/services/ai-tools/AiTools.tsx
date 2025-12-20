"use client";

import { AiToolDetails } from "@/app/constants/textConstant";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function AiToolsClient() {
    const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
    const [activeId, setActiveId] = useState<string | null>(null);

    const scrollToSection = (id: string) => {
        sectionsRef.current[id]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-45% 0px -45% 0px" }
        );

        Object.values(sectionsRef.current).forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <h1
                    className="text-4xl sm:text-5xl font-bold mb-4
                               bg-gradient-to-r from-amber-400 to-yellow-300
                               text-transparent bg-clip-text"
                >
                    AI Tools & Automation Solutions
                </h1>
                <p className="text-amber-200/80 mx-auto text-sm sm:text-base">
                    Explore how SkillForge AI Technologies transforms industries with
                    intelligent tools, predictive analytics, and real-world automation
                    that even freshers can easily understand.
                </p>
            </motion.div>

            <div
                className="flex flex-wrap justify-center gap-3 mb-12 sticky top-20 z-40
                           bg-gradient-to-r from-amber-900/40 via-amber-800/30 to-amber-900/40
                           backdrop-blur-md py-4 px-4 rounded-2xl
                           border border-amber-600/40
                           shadow-lg shadow-amber-900/30"
            >
                {AiToolDetails.map(({ id, title, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`flex items-center gap-2 px-2 py-2 rounded-full
                                    text-sm font-semibold transition-all border
                            ${activeId === id
                                ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-black border-amber-400 shadow-md shadow-amber-400/40"
                                : "bg-black/40 text-amber-200 border-amber-700/40 hover:bg-amber-500/10 hover:text-amber-300 hover:shadow-md hover:shadow-amber-700/30"
                            }`}
                    >
                        <Icon
                            className={`w-5 h-5 ${activeId === id ? "text-black" : "text-amber-300"
                                }`}
                        />
                        {title}
                    </button>
                ))}
            </div>

            <div className="max-w-7xl mx-auto">
                {AiToolDetails.map(
                    ({ id, title, image, content, Benefits }, index) => (
                        <motion.section
                            key={id}
                            id={id}
                            ref={(el) => {
                                sectionsRef.current[id] = el;
                            }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="scroll-mt-10"
                        >
                            <div
                                className="flex flex-col md:flex-row gap-12 items-start mb-12
                                           bg-gradient-to-br from-amber-900/25 to-black/70
                                           backdrop-blur-md
                                           border border-amber-600/30
                                           rounded-3xl p-6 sm:p-10
                                           shadow-xl shadow-amber-900/30"
                            >
                                <div className="md:w-1/2 w-full">
                                    <Image
                                        src={image}
                                        alt={title}
                                        width={500}
                                        height={350}
                                        className="rounded-2xl object-cover w-full shadow-lg shadow-black/40"
                                    />

                                    <div
                                        className="mt-5 rounded-xl p-4
                                                   bg-black/50
                                                   border border-amber-700/40"
                                    >
                                        <h4 className="text-amber-300 font-semibold mb-2 text-sm sm:text-base">
                                            Key Benefits
                                        </h4>
                                        <ul className="text-amber-200/80 text-sm list-disc list-inside space-y-1">
                                            {Benefits?.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="md:w-1/2 w-full">
                                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-amber-300">
                                        {title}
                                    </h2>
                                    <p className="text-amber-200/80 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                                        {content}
                                    </p>
                                </div>
                            </div>
                        </motion.section>
                    )
                )}
            </div>
        </section>
    );
}
