"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export function FloatingHearts() {
    const [hearts, setHearts] = useState<{ id: number; x: number; delay: number }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHearts((prev) => {
                const newHeart = {
                    id: Date.now(),
                    x: Math.random() * 100, // Random percentage for left position
                    delay: 0,
                };
                // Keep only last 20 hearts to avoid performance issues
                return [...prev.slice(-20), newHeart];
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: "110vh", opacity: 0 }}
                    animate={{ y: "-10vh", opacity: [0, 1, 0] }}
                    transition={{ duration: 10, ease: "linear" }}
                    style={{
                        position: "absolute",
                        left: `${heart.x}%`,
                    }}
                >
                    <Heart className="text-rose-200 fill-rose-100 w-8 h-8 opacity-50" />
                </motion.div>
            ))}
        </div>
    );
}
