"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
    { value: "28+", label: "Projects" },
    { value: "85%", label: "Satisfaction" },
];

export default function AboutNew() {
    return (
        <section id="about" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-[10%] -left-[5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(12,123,255,0.08)_0%,transparent_70%)] rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute bottom-[10%] -right-[5%] w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)] rounded-full blur-[60px] pointer-events-none" />

            <div className="w-full flex justify-center">
            <div className="max-w-5xl w-full px-6 relative z-10">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0c7bff] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
                        About Me
                    </h2>
                </motion.div>

                {/* Main Content */}
                <div className="w-full flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-center text-center max-w-3xl w-full"
                    >
                        {/* Subtitle with gradient */}
                        <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#0c7bff] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent mb-6 leading-tight">
                            Creative Developer, Video Editor & Graphic Designer
                        </h3>

                        {/* Description paragraphs */}
                        <div className="space-y-4 text-[#94a3b8] leading-relaxed">
                            <p>
                                Hi, I'm{" "}
                                <span className="text-[#0c7bff] font-medium">Tanvir Alam</span>
                                , a passionate creative professional with expertise in both design and development. I specialize in creating visually stunning and highly functional digital experiences.
                            </p>
                            <p>
                                With over 4+ years of experience, I've helped numerous clients transform their ideas into reality through innovative design solutions and robust technical implementations.
                            </p>
                            <p>
                                My approach combines artistic vision with technical precision, ensuring that every project not only looks amazing but also performs flawlessly across all platforms.
                            </p>
                        </div>

                        {/* Get in touch link */}
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="inline-flex items-center gap-2 text-[#0c7bff] hover:text-[#3392ff] font-medium mt-8 group transition-colors duration-300"
                        >
                            Get in touch
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
            </div>
        </section>
    );
}
