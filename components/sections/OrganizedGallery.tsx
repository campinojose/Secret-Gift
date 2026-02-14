'use client'
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

// Helper to organize photos
const categories = [
    {
        id: "inicios",
        title: "Nuestros Inicios",
        subtitle: "Donde todo comenzó...",
        photos: [
            { src: "/1A.JPG", caption: "Primera vez en tu casa" },
            { src: "/2A.mp4", caption: "videoitooo" },
            { src: "/3A.jpg", caption: "Cuidando un bebé" },
            { src: "/4A.jpg", caption: "Jodiendome mi cara JAJAJA" },
            { src: "/5A.jpg", caption: "Comiendo arepa??" },
            { src: "/6A.jpg", caption: "Fotico en el colegio" },
        ],
        color: "bg-blue-50 text-blue-900",
    },
    {
        id: "aventuras",
        title: "Nuestras Aventuras",
        subtitle: "Explorando el mundo de la mano",
        photos: [
            { src: "/portadaviaje1.jpg", caption: "San Andrés" },
            { src: "/viaje1.jpg", caption: "Atascada" },
            { src: "/paseo1.jpg", caption: "Parque del café" },
            { src: "/finca2.jpg", caption: "Fotico estetik" },
            { src: "/viaje3.jpg", caption: "Fotico en el barco" },
            { src: "/paseo2.jpg", caption: "Beso apasionado jajaaj" },
        ],
        color: "bg-emerald-50 text-emerald-900",
    },
    {
        id: "divertidos",
        title: "Risas y Locuras",
        subtitle: "Porque la vida es mejor riendo contigo",
        photos: [
            { src: "/divertida.jpg", caption: "Momento random" },
            { src: "/divertida5.jpg", caption: "Sonrisas" },
            { src: "/DIVERTIDA14.jpg", caption: "Más dormida que 10" },
            { src: "/divertida17.jpg", caption: "Pitufina" },
            { src: "/mcdonald.jpg", caption: "Mc Donalds" },
            { src: "/skincare1.jpg", caption: "Skincare time" },
        ],
        color: "bg-yellow-50 text-yellow-900",
    },
    {
        id: "romance",
        title: "Momentos Especiales",
        subtitle: "Citas, cenas y amor puro",
        photos: [
            { src: "/importante1.jpg", caption: "Me decoraste mi cumple jaja, nadie se había preocupado por mí" },
            { src: "/salida3.jpg", caption: "Cita romántica" },
            { src: "/matrimonio1.jpg", caption: "Elegantes en el matrimonio de Tainy" },
            { src: "/linda2.jpg", caption: "Simplemente tú" },
            { src: "/HM4.jpg", caption: "Último paseo de 11 en el colegio" },
            { src: "/7dic.jpg", caption: "Un 7 de Diciembre" },
        ],
        color: "bg-rose-50 text-rose-900",
    },
    {
        id: "Love",
        title: "Fotos que me encantan",
        subtitle: "La niña más preciosa a mi lado. WOW!",
        photos: [
            { src: "/15s2.jpg", caption: "El chambelán perfecto" },
            { src: "/16s.jpg", caption: "Comiendo hamburguesitas" },
            { src: "/linda9.jpg", caption: "Con mi camisa de la sele" },
            { src: "/linda3.jpg", caption: "Ese sombrerito te queda muy bello" },
            { src: "/linda5.jpg", caption: "Aysss, tan picada ve" },
            { src: "/linda4.jpg", caption: "Te robé la gorra jaja" },
        ],
        color: "bg-rose-50 text-red-900",
    },
    {
        id: "School",
        title: "Último año escolar",
        subtitle: "Extraño esto demasiado",
        photos: [
            { src: "/school3.jpg", caption: "Yo barbao y jugando free fire jaja" },
            { src: "/school4.jpg", caption: "La murgaaa" },
            { src: "/school5.jpg", caption: "Tu presentación" },
            { src: "/school6.jpg", caption: "Medalla a la mejor jugadora (La más celosa)" },
            { src: "/school8.jpg", caption: "Juntos en químicaaaa" },
            { src: "/school7.jpg", caption: "Nuestra graduación" },
        ],
        color: "bg-rose-50 text-purple-900",
    },
];

export function OrganizedGallery() {
    const [selectedMedia, setSelectedMedia] = useState<{ src: string; caption: string } | null>(null);

    const isVideo = (src: string) => src.toLowerCase().endsWith(".mp4");

    return (
        <div className="space-y-16 md:space-y-32 py-12 md:py-24">
            {categories.map((category, categoryIndex) => (
                <Section
                    key={category.id}
                    className={cn(
                        "rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 overflow-hidden relative",
                        category.color.replace("bg-", "bg-gradient-to-br from-white to-")
                    )}
                >
                    {/* Decorative background element */}
                    <div className={cn("absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl", category.color.replace("bg-", "bg-"))} />

                    <div className="relative z-10 text-center mb-8 md:mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-6xl font-serif mb-2 md:mb-4 font-medium tracking-tight"
                        >
                            {category.title}
                        </motion.h2>
                        <p className="text-base md:text-xl opacity-70 font-light italic max-w-2xl mx-auto">{category.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 relative z-10">
                        {category.photos.map((photo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer ring-1 ring-black/5"
                                onClick={() => setSelectedMedia(photo)}
                            >
                                {isVideo(photo.src) ? (
                                    <video
                                        src={photo.src}
                                        className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                ) : (
                                    <Image
                                        src={photo.src}
                                        alt={photo.caption}
                                        fill
                                        className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-medium text-lg md:text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {photo.caption}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Section>
            ))}

            {/* Premium Lightbox Modal */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedMedia(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-6xl h-[75vh] md:h-[85vh] flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-zinc-900 flex items-center justify-center">
                                {isVideo(selectedMedia.src) ? (
                                    <video
                                        src={selectedMedia.src}
                                        className="w-full h-full object-contain"
                                        controls
                                        autoPlay
                                    />
                                ) : (
                                    <Image
                                        src={selectedMedia.src}
                                        alt={selectedMedia.caption}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                )}
                            </div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute bottom-6 md:bottom-8 left-4 right-4 flex justify-center pointer-events-none"
                            >
                                <div className="px-6 py-3 md:px-8 md:py-4 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl max-w-2xl">
                                    <p className="text-white text-base md:text-xl font-medium text-center leading-relaxed">
                                        {selectedMedia.caption}
                                    </p>
                                </div>
                            </motion.div>

                            <button
                                className="absolute top-4 right-4 md:top-8 md:right-8 z-50 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 backdrop-blur-sm"
                                onClick={() => setSelectedMedia(null)}
                            >
                                <X size={24} className="md:w-8 md:h-8" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
