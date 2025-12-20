"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Globe, Smartphone, Brain, Cloud, Lightbulb } from "lucide-react";

const services = [
    {
        href: "/services/web-development",
        icon: <Code size={24} />,
        title: "Website Development",
        desc: "We design and develop visually stunning, responsive, and performance-optimized websites that establish a strong digital presence.",
    },
    {
        href: "/services/web-application",
        icon: <Globe size={24} />,
        title: "Web Application Development",
        desc: "We build dynamic, scalable, and user-centric web applications tailored to your business needs, combining robust engineering with elegant design.",
    },
    {
        href: "/services/mobile-development",
        icon: <Smartphone size={24} />,
        title: "Mobile App Development",
        desc: "Our team creates high-performance mobile apps that deliver seamless experiences across platforms from concept to deployment.",
    },
    {
        href: "/services/ai-tools",
        icon: <Brain size={24} />,
        title: "AI & Automation Solutions",
        desc: "We empower businesses with AI-driven insights and intelligent automation to optimize processes and enhance decision-making.",
    },
    {
        href: "/services/cloud-devops",
        icon: <Cloud size={24} />,
        title: "Cloud Infrastructure & DevOps",
        desc: "We architect secure, scalable, and efficient cloud ecosystems for modern enterprises with DevOps best practices.",
    },
    {
        href: "/services/product-consulting",
        icon: <Lightbulb size={24} />,
        title: "Digital Product Consulting",
        desc: "We collaborate with businesses to define strategies, streamline workflows, and create impactful digital products.",
    },
];

export default function CoreServices() {
    return (
        <section
            className="px-4 sm:px-10 py-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2
                        className="text-3xl sm:text-4xl font-bold mb-4
                                   bg-gradient-to-r from-amber-400 to-yellow-300
                                   text-transparent bg-clip-text"
                    >
                        Our Core Services
                    </h2>
                    <p className="text-amber-200/80 max-w-2xl mx-auto text-sm sm:text-base">
                        Premium technology services crafted to help businesses
                        build, scale, and innovate with confidence.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.href}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.12,
                                type: "spring",
                                stiffness: 90,
                            }}
                            className="group rounded-3xl p-6 sm:p-8
                                       bg-gradient-to-br from-amber-900/25 to-black/70
                                       backdrop-blur-md
                                       border border-amber-600/30
                                       shadow-xl shadow-amber-900/30
                                       hover:shadow-amber-700/40
                                       transition-all"
                        >
                            <div className="flex items-center mb-4">
                                <div
                                    className="p-3 rounded-xl
                                               bg-black/50
                                               border border-amber-700/40
                                               text-amber-300
                                               group-hover:text-amber-200 transition"
                                >
                                    {service.icon}
                                </div>
                                <h3 className="ml-4 text-lg font-semibold text-amber-300">
                                    {service.title}
                                </h3>
                            </div>

                            <p className="text-amber-200/80 text-sm sm:text-base leading-relaxed">
                                {service.desc}
                            </p>

                            <Link
                                href={service.href}
                                className="mt-5 inline-block text-sm font-semibold
                                           text-amber-300 hover:text-amber-200
                                           transition"
                            >
                                Learn More →
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
