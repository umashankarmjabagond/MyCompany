'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Brain, Cloud, Lightbulb } from 'lucide-react';


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
        <section className="w-full bg-gray-900 py-16 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-center text-white">
                    Our Core Services
                </h2>
                <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.href}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 100 }}
                            className="bg-[#1a1a1a] rounded-xl p-6 hover:shadow-lg transition-all"
                        >
                            <div className="flex items-center mb-4 text-blue-500">
                                {service.icon}
                                <h3 className="ml-3 text-lg font-semibold text-blue-500">{service.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm sm:text-base">{service.desc}</p>
                            <Link
                                href={service.href}
                                className="mt-4 inline-block text-blue-500 hover:underline font-medium"
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
