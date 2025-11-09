'use client';

import { motion } from 'framer-motion';

export default function TeamSection() {
    const teamMembers = [

        {
            name: "Shreya Jabagond",
            qualification: "MBA in Business Management",
            experience: "4+ years in Marketing & Operations",
            designation: "Co-Founder & Director",
            image: "/team/priya.jpg",
        },
        {
            name: "Mahesh Masal",
            qualification: "B.Tech in Electrical Engineering",
            experience: "6+ years in Software Development",
            designation: "Founder & CEO",
            image: "/MaheshPic.jpeg",
        },
        {
            name: "Pavan Potdar",
            qualification: "B.Tech in Electrical Engineering",
            experience: "8+ years in Software Development",
            designation: "Founder & CEO",
            image: "/team/umashankar.jpg",
        },
        {
            name: "Umashankar Jabagond",
            qualification: "B.Tech in Mechanical Engineering",
            experience: "6+ years in Software Development",
            designation: "Founder & CEO",
            image: "/UmashankarPic.jpg",
        },

    ];

    return (
        <section className="py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">Founders & Directors</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => {
                        const slideFrom = index % 2 === 0 ? -50 : 50;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: slideFrom, y: 20 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.2, type: 'spring', stiffness: 120 }}
                                className="bg-[#1a1a1a] flex flex-col items-center p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-700 text-center"
                            >
                                <div className="w-32 h-32 mb-4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-fill rounded-full border-2 border-blue-500"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                                <p className="text-gray-400 text-sm mt-1">{member.qualification}</p>
                                <p className="text-gray-400 text-sm">{member.experience}</p>
                                <p className="text-blue-500 font-medium mt-2">{member.designation}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
