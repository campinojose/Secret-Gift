"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/portadaviaje1.jpg"
                    alt="Romantic Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-rose-50/20 via-rose-100/30 to-rose-50" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <h1 className="text-6xl md:text-8xl font-serif text-slate-800 mb-4 tracking-tight drop-shadow-sm">
                        4 Años Juntos
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <p className="text-xl md:text-3xl text-slate-700 font-light italic mb-8">
                        "David & Joshelin"
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-xl inline-block border border-white/50"
                >
                    <p className="text-lg text-slate-800 max-w-lg font-serif">
                        Cada día a tu lado es mi momento favorito.<br />
                        Gracias por hacerme el hombre más feliz del mundo.
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
