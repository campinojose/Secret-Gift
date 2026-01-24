"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

const photos = [
    { src: "/hero-bg.png", caption: "Nuestro primer viaje", rotation: -2 },
    { src: "/hero-bg.png", caption: "Esa cena inolvidable", rotation: 2 },
    { src: "/hero-bg.png", caption: "Caminando juntos", rotation: -1 },
    { src: "/hero-bg.png", caption: "Tú sonrisa", rotation: 3 },
    { src: "/hero-bg.png", caption: "Momentos locos", rotation: -3 },
    { src: "/hero-bg.png", caption: "Siempre nosotros", rotation: 1 },
];

export function Gallery() {
    return (
        <Section className="bg-white/50 rounded-3xl my-20">
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 text-rose-900">
                Nuestros Recuerdos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{
                            scale: 1.05,
                            rotate: 0,
                            zIndex: 10,
                            transition: { duration: 0.3 }
                        }}
                        className="relative group cursor-pointer"
                        style={{ rotate: photo.rotation }}
                    >
                        <div className="bg-white p-3 pb-12 shadow-md rounded-sm transform transition-transform border border-gray-100">
                            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm">
                                {/* Placeholder for user images */}
                                <div className="absolute inset-0 flex items-center justify-center text-rose-200 bg-rose-50">
                                    <span className="font-serif italic text-lg opacity-50">Foto {index + 1}</span>
                                </div>
                                <Image
                                    src={photo.src}
                                    alt={photo.caption}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="absolute bottom-4 left-0 right-0 text-center font-handwriting text-slate-600 font-serif italic text-lg">
                                {photo.caption}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12 pb-8">
                <p className="text-slate-500 italic">
                    (Añade tus fotos en la carpeta public y actualiza el código)
                </p>
            </div>
        </Section>
    );
}
