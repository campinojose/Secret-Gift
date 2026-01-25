"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export function FloatingHearts() {
    const [hearts, setHearts] = useState<{
        id: number;
        x: number;
        size: number;
        color: string;
    }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHearts((prev) => {
                const newHeart = {
                    id: Date.now(),
                    x: Math.random() * 100,
                    size: 24 + Math.round(Math.random() * 28),
                    color: Math.random() > 0.5 ? "#ffd1dc" : "#f6d6ff",
                };
                return [...prev.slice(-18), newHeart];
            });
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: "110vh", opacity: 0, scale: 0.6 }}
                    animate={{ y: "-10vh", opacity: [0.2, 0.9, 0], scale: [0.6, 1, 0.9] }}
                    transition={{ duration: 9 + Math.random() * 6, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        left: `${heart.x}%`,
                        mixBlendMode: "screen",
                    }}
                >
                    <Heart
                        style={{ width: heart.size, height: heart.size }}
                        className="opacity-80"
                        color={heart.color}
                    />
                </motion.div>
            ))}
        </div>
    );
}
