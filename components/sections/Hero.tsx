"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <h1 style={{ fontFamily: 'var(--font-heading)' }} className="text-5xl md:text-7xl lg:text-8xl mb-4 tracking-tight leading-tight">
                        <span className="block text-rose-800 text-6xl bold">Cuatro Años</span>
                        <span className="block text-3xl md:text-4xl text-rose-600 font-light">Mil recuerdos</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <p className="text-lg md:text-2xl text-muted font-light italic mb-6 text-blue-900">
                        126230400 segundos, 2103840 minutos, 35064 horas, 1461 días, 208 semanas, 5 días, 48 meses, 4 años

                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="glass p-6 rounded-2xl shadow-xl inline-block border border-white/30 max-w-xl"
                >
                    <p className="text-base md:text-lg text-rose-800 max-w-lg font-serif">
                        Un pequeño espacio para celebrar lo que hemos construido juntos.
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 z-10"
            >
                <ChevronDown className="w-10 h-10 text-slate-600 opacity-70" />
            </motion.div>
        </div>
    );
}
