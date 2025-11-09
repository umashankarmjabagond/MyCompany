'use client';

import { Phone, Settings, Users, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProcessSection() {
    const steps = [
        {
            title: "Contact Us First",
            desc: "You can reach us through our website, email, or phone number.",
            icon: <Phone size={28} className="text-red-500" />,
        },
        {
            title: "Consult With Us",
            desc: "We'll schedule a call or meeting to discuss your needs and how we can help.",
            icon: <Settings size={28} className="text-teal-400" />,
        },
        {
            title: "Partner With Us",
            desc: "We'll sign a contract and start working on your project.",
            icon: <Users size={28} className="text-orange-400" />,
        },
        {
            title: "Give Us Payment!",
            desc: "You can pay us through wire transfer, PayPal, or credit card.",
            icon: <Home size={28} className="text-purple-500" />,
        },
    ];

    return (
        <section className="py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">
                    Easy ways to get ready your work
                </h2>
                <div className="relative flex flex-col md:flex-row items-center justify-between">

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center md:w-1/4 mb-12 md:mb-0 z-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="bg-gray-800 p-5 rounded-full mb-4 shadow-lg border border-gray-700">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                            <p className="text-gray-400 mt-2 text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
