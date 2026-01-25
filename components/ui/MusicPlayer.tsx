"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [autoplayBlocked, setAutoplayBlocked] = useState(false);
    const embedId = "Y3UH_9ZV1-A"; // YouTube music id from user link

    // Try to start playback on mount by opening the iframe with autoplay=1.
    useEffect(() => {
        // Attempt autoplay; browsers may block unmuted autoplay.
        setIsOpen(true);
        setIsPlaying(true);

        // if autoplay is blocked, the user will need to interact; show a gentle CTA
        const timer = setTimeout(() => {
            setAutoplayBlocked(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
            {/* Keep iframe mounted so music continues when panel is closed */}
            <div aria-hidden className="sr-only">
                <iframe
                    title="música-hidden"
                    src={`https://www.youtube.com/embed/${embedId}?autoplay=${isPlaying ? '1' : '0'}&controls=0&loop=1&playlist=${embedId}&rel=0&modestbranding=1`}
                    allow="autoplay; encrypted-media"
                    className="w-0 h-0"
                />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="glass p-4 rounded-2xl shadow-2xl border border-white/20 w-72 mb-2"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-rose-100/60 rounded-full flex items-center justify-center animate-spin-slow">
                                <Music className="w-5 h-5 text-rose-700" />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-sm font-bold text-slate-800 truncate">Te amo vida mía</p>
                                <p className="text-xs text-rose-500 truncate">(YouTube Music)</p>
                            </div>
                        </div>

                        <div className="mb-3">
                            {/* Visible preview when panel open (not required for playback) */}
                            <div className="w-full h-24 rounded overflow-hidden">
                                <iframe
                                    title="música-preview"
                                    src={`https://www.youtube.com/embed/${embedId}?controls=0&loop=1&playlist=${embedId}&rel=0&modestbranding=1`}
                                    allow="encrypted-media"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">

                            <button
                                onClick={() => { setIsPlaying((s) => !s); }}
                                className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-rose-600 transition-transform active:scale-95"
                            >
                                {isPlaying ? (
                                    <Pause className="w-5 h-5 fill-current" />
                                ) : (
                                    <Play className="w-5 h-5 fill-current ml-0.5" />
                                )}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/90 backdrop-blur shadow-xl rounded-full flex items-center justify-center border-2 border-rose-100 text-rose-500"
            >
                <Music className={`w-6 h-6 ${isPlaying ? 'animate-pulse' : ''}`} />
            </motion.button>
        </div>
    );
}
