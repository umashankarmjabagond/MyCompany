"use client";

import { motion } from "framer-motion";
import { teamMembers } from "../constants/textConstant";

export default function TeamSection() {
    const getInitials = (name: string) =>
        name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();
    return (
        <section
            className="px-4 sm:px-10 py-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-4xl sm:text-5xl font-bold mb-4
                                   bg-gradient-to-r from-amber-400 to-yellow-300
                                   text-transparent bg-clip-text"
                    >
                        Founders & Directors
                    </h2>
                    <p className="text-amber-200/80 max-w-7xl mx-auto text-sm sm:text-base">
                        Meet the leadership team driving SkillForge AI Technologies
                        with vision, experience, and technical excellence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {teamMembers.map((member, index) => {
                        const slideFrom = index % 2 === 0 ? -50 : 50;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: slideFrom, y: 20 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                className="group flex flex-col items-center text-center
                                           bg-gradient-to-br from-amber-900/25 to-black/70
                                           backdrop-blur-md
                                           border border-amber-600/30
                                           rounded-3xl p-6 sm:p-8
                                           shadow-xl shadow-amber-900/30
                                           hover:shadow-amber-700/40
                                           hover:-translate-y-1
                                           transition-all"
                            >
                                <div
                                    className="w-32 h-32 mb-5 rounded-full
             border-2 border-amber-400
             shadow-lg shadow-amber-900/40
             flex items-center justify-center
             overflow-hidden
             bg-gradient-to-br from-amber-900/60 to-black"
                                >
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-fill"
                                        />
                                    ) : (
                                        <span
                                            className="
                                                        text-3xl font-extrabold
                                                        bg-gradient-to-r from-amber-300 to-yellow-200
                                                        text-transparent bg-clip-text
                                                        tracking-widest
                                                    "
                                        >
                                            {getInitials(member.name)}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-semibold text-amber-300">
                                    {member.name}
                                </h3>

                                <p className="text-amber-200/80 text-sm mt-1">
                                    {member.qualification}
                                </p>
                                <p className="text-amber-200/70 text-sm">
                                    {member.experience}
                                </p>

                                <p className="mt-3 text-sm font-semibold text-amber-400">
                                    {member.designation}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
