'use client';

import { motion } from 'framer-motion';
import { Gem, ShoppingCart, School } from 'lucide-react'; // Icons for projects

export default function ProjectsSection() {
    const projects = [
        {
            title: "Online Jewelry Store",
            desc: "A full-featured online jewelry platform where users can browse and explore various jewelry items, view detailed descriptions, and check availability. Includes advanced search, product filtering, and a sleek, responsive UI to enhance the shopping experience.",
            icon: <Gem size={32} className="text-yellow-400" />,
            link: "#",
        },
        {
            title: "Farmer Mart E-commerce",
            desc: "A farmer-centric e-commerce platform where farmers can list their products for sale, and vendors or general users can purchase directly. Includes expert consultants who guide farmers on cultivation, pricing, and quality improvement. Features real-time inventory management and secure payments.",
            icon: <ShoppingCart size={32} className="text-green-400" />,
            link: "#",
        },
        {
            title: "School Management System",
            desc: "A comprehensive system to manage student records, attendance, exams, results, teacher management, and parent communication. Streamlines administrative tasks and provides a modern dashboard with role-based access control for students, teachers, and admins.",
            icon: <School size={32} className="text-blue-400" />,
            link: "#",
        },
    ];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        const slideFrom = index % 2 === 0 ? -50 : 50;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: slideFrom, y: 20 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.2, type: 'spring', stiffness: 120 }}
                                className="bg-[#1a1a1a] flex flex-col justify-between p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-700"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="mr-3">{project.icon}</div>
                                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                </div>
                                <p className="text-gray-400 flex-1">{project.desc}</p>
                                <div className="mt-4">
                                    <a
                                        href={project.link}
                                        className="text-blue-500 hover:underline font-medium"
                                    >
                                        View Project →
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
