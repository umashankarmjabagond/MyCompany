"use client";

import { Phone, Settings, Users, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function ProcessSection() {
    const steps = [
        {
            title: "Contact Us First",
            desc: "You can reach us through our website, email, or phone number.",
            icon: <Phone size={28} />,
        },
        {
            title: "Consult With Us",
            desc: "We'll schedule a call or meeting to discuss your needs and how we can help.",
            icon: <Settings size={28} />,
        },
        {
            title: "Partner With Us",
            desc: "We'll sign a contract and start working on your project.",
            icon: <Users size={28} />,
        },
        {
            title: "Make the Payment",
            desc: "You can pay us through wire transfer, PayPal, or credit card.",
            icon: <Home size={28} />,
        },
    ];

    return (
        <section
            className=" px-4 sm:px-10 py-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2
                        className="text-4xl sm:text-5xl font-bold mb-4
                                   bg-gradient-to-r from-amber-400 to-yellow-300
                                   text-transparent bg-clip-text"
                    >
                        How We Work
                    </h2>
                    <p className="text-amber-200/80 max-w-2xl mx-auto text-sm sm:text-base">
                        A simple, transparent process designed to get your project
                        from idea to execution smoothly.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
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
                                className="mb-5 p-4 rounded-2xl
                                           bg-black/50
                                           border border-amber-700/40
                                           text-amber-300
                                           group-hover:text-amber-200
                                           transition"
                            >
                                {step.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-amber-300 mb-2">
                                {step.title}
                            </h3>

                            <p className="text-amber-200/80 text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
