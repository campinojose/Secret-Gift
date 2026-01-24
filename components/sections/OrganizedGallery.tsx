"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Helper to organize photos
const categories = [
    {
        id: "inicios",
        title: "Nuestros Inicios",
        subtitle: "Donde todo comenzó... Colegio y 15s",
        photos: [
            { src: "/15s.JPG", caption: "Tus 15" },
            { src: "/15s2.JPG", caption: "Mirada sensual" },
            { src: "/school1.jpg", caption: "Recuerditos del colegio" },
            { src: "/school4.jpg", caption: "La murga y beso de duende y batman" },
            { src: "/16S.jpg", caption: "Tu cumpleañitos" },
            { src: "/school7.jpg", caption: "Nuestra graduación" },
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
            { src: "/importante1.jpg", caption: "Momentos importantes" },
            { src: "/salida3.jpg", caption: "Cita romántica" },
            { src: "/matrimonio1.jpg", caption: "Elegantes" },
            { src: "/linda2.jpg", caption: "Simplemente tú" },
            { src: "/HM4.jpg", caption: "Juntos" },
            { src: "/7dic.jpg", caption: "Fechas especiales" },
        ],
        color: "bg-rose-50 text-rose-900",
    },
];

export function OrganizedGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="space-y-24 py-24">
            {categories.map((category, categoryIndex) => (
                <Section key={category.id} className={cn("rounded-3xl p-8", category.color)}>
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-serif mb-4"
                        >
                            {category.title}
                        </motion.h2>
                        <p className="text-lg opacity-80 font-light italic">{category.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.photos.map((photo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-md bg-white cursor-pointer"
                                onClick={() => setSelectedImage(photo.src)}
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.caption}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-serif text-lg">{photo.caption}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Section>
            ))}

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full max-w-5xl h-[80vh]">
                        <Image
                            src={selectedImage}
                            alt="Full screen memory"
                            fill
                            className="object-contain"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-xl p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕ Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
