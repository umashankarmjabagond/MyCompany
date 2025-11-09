'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const aboutData = [
    {
        title: 'Company Overview',
        content:
            'SkillForge AI Technologies Pvt Ltd is a next-generation technology company dedicated to delivering intelligent digital solutions that fuel business growth and operational efficiency. We specialize in web development, mobile application development, AI tool integration, and professional training programs.',
    },
    {
        title: 'Web Development',
        content:
            'Our web development services focus on creating highly responsive, scalable, and secure websites that drive engagement and deliver an exceptional user experience.',
    },
    {
        title: 'Mobile Development',
        content:
            'In mobile development, we craft intuitive and high-performance applications for both Android and iOS platforms.',
    },
    {
        title: 'AI Tools',
        content:
            'Our expertise in AI tools empowers businesses to harness the potential of artificial intelligence. From machine learning models to automation tools and predictive analytics, we help organizations optimize workflows.',
    },
    {
        title: 'Training Programs',
        content:
            'Our training programs equip professionals and students with the skills needed to excel in the tech industry with hands-on experience.',
    },
];

export default function About() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-gray-900 py-16 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">About Us</h2>

                <div className="space-y-4">
                    {aboutData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }} // triggers when 30% of element is visible
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className=" rounded-xl shadow-md overflow-hidden border border-gray-200"
                        >
                            {/* Accordion Header */}
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="flex justify-between w-full px-6 py-5 text-left text-lg font-medium text-white transition"
                            >
                                {item.title}
                                <span
                                    className={`transform transition-transform duration-300 text-gray-500 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                >
                                    ▼
                                </span>
                            </button>

                            {/* Accordion Content */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 py-4 text-white text-base"
                                    >
                                        {item.content}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
