"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { wevDevSection } from "@/app/constants/textConstant";
import { useEffect, useRef, useState } from "react";

export default function WebDevClient() {
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
                    Web Development Excellence
                </h1>
                <p className="text-amber-200/80 max-w-2xl mx-auto text-sm sm:text-base">
                    Discover how SkillForge builds full-scale web applications —
                    from interactive frontends to scalable backends and automated
                    cloud deployments.
                </p>
            </motion.div>

            <div
                className="flex flex-wrap justify-center gap-3 mb-12 sticky top-20 z-40
                           bg-gradient-to-r from-amber-900/40 via-amber-800/30 to-amber-900/40
                           backdrop-blur-md py-4 px-4 rounded-2xl
                           border border-amber-600/40
                           shadow-lg shadow-amber-900/30"
            >
                {wevDevSection.map(({ id, title, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`flex items-center gap-2 px-5 py-2 rounded-full
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

            <div className="space-y-12 max-w-7xl mx-auto">
                {wevDevSection.map(({ id, title, image, content }, index) => (
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
                        className="scroll-mt-40"
                    >
                        <div
                            className="flex flex-col md:flex-row gap-12 items-center
                                       bg-gradient-to-br from-amber-900/25 to-black/70
                                       backdrop-blur-md
                                       border border-amber-600/30
                                       rounded-3xl sm:p-10
                                       shadow-xl shadow-amber-900/30"
                        >
                            <div className="md:w-1/2 w-full">
                                <div className="relative w-full h-48 sm:h-56 md:h-64">
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        className="rounded-2xl object-cover shadow-lg shadow-black/40"
                                    />
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
                ))}
            </div>
        </section>
    );
}
