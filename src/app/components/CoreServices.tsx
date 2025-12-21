"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Globe, Smartphone, Brain, Cloud, Lightbulb } from "lucide-react";

const services = [
    {
        id: "web-solutions",
        href: "/services/web-development",
        icon: <Code size={24} />,
        title: "Web Development Solutions",
        desc: "From responsive websites to scalable web applications, we build secure, high-performance web solutions that grow with your business.",
    },
    {
        id: "web-apps",
        href: "/services/web-development",
        icon: <Globe size={24} />,
        title: "Web Application Development",
        desc: "We develop powerful, user-centric web applications including dashboards, SaaS platforms, and custom business systems.",
    },
    {
        id: "responsive-web",
        href: "/services/web-development",
        icon: <Smartphone size={24} />,
        title: "Mobile & Responsive Experiences",
        desc: "We design mobile-first and responsive web experiences that deliver seamless performance across devices and screen sizes.",
    },
    {
        id: "ai-tools",
        href: "/services/ai-tools",
        icon: <Brain size={24} />,
        title: "AI & Automation Solutions",
        desc: "We integrate AI-driven tools and intelligent automation to enhance productivity, insights, and operational efficiency.",
    },
    {
        id: "cloud-devops",
        href: "/services/ai-tools",
        icon: <Cloud size={24} />,
        title: "Cloud & DevOps Enablement",
        desc: "We leverage cloud infrastructure and DevOps practices to ensure reliability, scalability, and faster deployments.",
    },
    {
        id: "training",
        href: "/services/training",
        icon: <Lightbulb size={24} />,
        title: "Corporate Training & Upskilling",
        desc: "We deliver hands-on technical training programs to empower teams with modern development, AI, and cloud skills.",
    },
];



export default function CoreServices() {
    return (
        <>
            <section
                className={`px-4 sm:px-10 py-8`}>
                <div className={`max-w-7xl mx-auto`}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`text-center mb-12`}
                    >
                        <h2
                            className={`text-3xl sm:text-4xl font-bold mb-4
                                   bg-gradient-to-r from-amber-400 to-yellow-300
                                   text-transparent bg-clip-text`}
                        >
                            Our Core Services
                        </h2>
                        <p className={`text-amber-200/80 max-w-7xl mx-auto text-sm sm:text-base`}>
                            Premium technology services crafted to help businesses
                            build, scale, and innovate with confidence.
                        </p>
                    </motion.div>

                    <div className={`grid gap-8 md:grid-cols-3`}>
                        {services.map((service, index) => (
                            <div key={service.id}>
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.12,
                                        type: "spring",
                                        stiffness: 90,
                                    }}
                                    className={`group rounded-3xl p-6 sm:p-8
                                       bg-gradient-to-br from-amber-900/25 to-black/70
                                       backdrop-blur-md
                                       border border-amber-600/30
                                       shadow-xl shadow-amber-900/30
                                       hover:shadow-amber-700/40
                                       transition-all`}
                                >
                                    <div className={`flex items-center mb-4`}>
                                        <div
                                            className={`p-3 rounded-xl
                                        bg-black /50
                                    border border-amber-700/40
                                    text-amber-300
                                    group-hover:text-amber-200 transition`}
                                        >
                                            {service.icon}
                                        </div>
                                        <h3 className={`ml-4 text-lg font-semibold text-amber-300`}>
                                            {service.title}
                                        </h3>
                                    </div>

                                    <p className={`text-amber-200 /80 text - sm sm:text-base leading-relaxed`}>
                                        {service.desc}
                                    </p >

                                    <Link
                                        href={service.href}
                                        className={`mt-5 inline-block text-sm font-semibold
                                           text-amber-300 hover:text-amber-200
                                           transition`}
                                    >
                                        Learn More →
                                    </Link>
                                </motion.div>
                            </div>
                        ))}

                    </div >
                </div>
            </section>
        </>
    );
}
