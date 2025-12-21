"use client";

import { motion } from "framer-motion";
import { Gem, ShoppingCart, School } from "lucide-react";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Online Jewelry Store",
            desc: "A full-featured online jewelry platform where users can browse and explore various jewelry items, view detailed descriptions, and check availability. Includes advanced search, product filtering, and a sleek, responsive UI to enhance the shopping experience.",
            icon: <Gem size={32} />,
            link: "#",
        },
        {
            title: "Farmer Mart E-commerce",
            desc: "A farmer-centric e-commerce platform where farmers can list their products for sale, and vendors or general users can purchase directly. Includes expert consultants who guide farmers on cultivation, pricing, and quality improvement. Features real-time inventory management and secure payments.",
            icon: <ShoppingCart size={32} />,
            link: "#",
        },
        {
            title: "School Management System",
            desc: "A comprehensive system to manage student records, attendance, exams, results, teacher management, and parent communication. Streamlines administrative tasks and provides a modern dashboard with role-based access control for students, teachers, and admins.",
            icon: <School size={32} />,
            link: "#",
        },
    ];

    return (
        <>
            <section
                className={`px-4 sm:px-10 py-8`}>
                <div className={`max-w-7xl mx-auto`}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`text-center mb-12`}
                    >
                        <h2
                            className={`text-4xl sm:text-5xl font-bold mb-4
                                   bg-gradient-to-r from-amber-400 to-yellow-300
                                   text-transparent bg-clip-text`}
                        >
                            Projects
                        </h2>
                        <p className={`text-amber-200/80 max-w-7xl mx-auto text-sm sm:text-base`}>
                            A glimpse into real-world solutions we’ve built across
                            e-commerce, education, and enterprise platforms.
                        </p>
                    </motion.div>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10`}>
                        {
                            projects.map((project, index) => {
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
                                        className={`group flex flex-col justify-between
                                           bg-gradient-to-br from-amber-900/25 to-black/70
                                           backdrop-blur-md
                                           border border-amber-600/30
                                           rounded-3xl p-6 sm:p-8
                                           shadow-xl shadow-amber-900/30
                                           hover:shadow-amber-700/40
                                           hover:-translate-y-1
                                           transition-all`}
                                    >
                                        <div className={`flex items-center mb-4`}>
                                            < div
                                                className={`mr-4 p-3 rounded-xl
                                                   bg-black/50
                                                   border border-amber-700/40
                                                   text-amber-300
                                                   group-hover:text-amber-200 transition`}
                                            >
                                                {project.icon}
                                            </div>
                                            <h3 className={`text-xl font-semibold !text-amber-300`}>
                                                {project.title}
                                            </h3>
                                        </div>

                                        <p className={`text-amber-200/80 text-sm sm:text-base leading-relaxed flex-1`}>
                                            {project.desc}
                                        </p>

                                        <div className={`mt-6`}>
                                            <a
                                                href={project.link}
                                                className={`text-sm font-semibold
                                                   text-amber-300 hover:text-amber-200
                                                   transition`}
                                            >
                                                View Project →
                                            </a>
                                        </div>
                                    </motion.div>
                                )
                            })}
                    </div >
                </div>
            </section >
        </>
    );
}
