"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio("/song.mp3"); // Expects song.mp3 in public folder
        audioRef.current.loop = true;

        return () => {
            audioRef.current?.pause();
            audioRef.current = null;
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(() => {
                console.log("Autoplay blocked");
            });
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        if (!audioRef.current) return;
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-rose-100 w-64 mb-2"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center animate-spin-slow">
                                <Music className="w-5 h-5 text-rose-500" />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-sm font-bold text-slate-800 truncate">Nuestra Canción</p>
                                <p className="text-xs text-rose-500 truncate">Perfect - Ed Sheeran</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                onClick={toggleMute}
                                className="p-2 hover:bg-rose-50 rounded-full transition-colors"
                            >
                                {isMuted ? (
                                    <VolumeX className="w-5 h-5 text-slate-500" />
                                ) : (
                                    <Volume2 className="w-5 h-5 text-slate-500" />
                                )}
                            </button>

                            <button
                                onClick={togglePlay}
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
