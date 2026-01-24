"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Calendar, Heart, MapPin, Camera } from "lucide-react";
import Image from "next/image";

const milestones = [
    {
        year: "Año 1",
        title: "El Comienzo",
        description: "Cuando nuestras miradas se cruzaron y supimos que esto sería especial. Nuestra primera cita, los primeros nervios, el primer beso.",
        icon: Heart,
        color: "bg-rose-100 text-rose-600",
        image: "/1ano.jpg",
    },
    {
        year: "Año 2",
        title: "Aventuras",
        description: "Viajes, risas y descubriendo el mundo juntos. Cada lugar que visitamos se convirtió en un recuerdo imborrable.",
        icon: MapPin,
        color: "bg-amber-100 text-amber-600",
        image: "/2ano.jpg",
    },
    {
        year: "Año 3",
        title: "Creciendo Juntos",
        description: "Apoyándonos en los momentos difíciles y celebrando los logros. Aprendiendo a ser el mejor equipo.",
        icon: Camera,
        color: "bg-sky-100 text-sky-600",
        image: "/3ano.jpg",
    },
    {
        year: "Año 4",
        title: "Inseparables",
        description: "Cuatro años de amor incondicional. Y esto es solo el principio de nuestra historia.",
        icon: Calendar,
        color: "bg-emerald-100 text-emerald-600",
        image: "/4ano.jpg",
    },
];

export function Timeline() {
    return (
        <Section className="relative">
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-rose-900">
                Nuestra Historia
            </h2>

            <div className="relative">
                {/* Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-rose-200 transform md:-translate-x-1/2" />

                <div className="space-y-12">
                    {milestones.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 top-8 md:top-auto w-4 h-4 rounded-full bg-rose-500 border-4 border-white shadow-md transform -translate-x-1.5 md:-translate-x-1/2 z-10" />

                            {/* Content Card */}
                            <div className={`ml-12 md:ml-0 md:w-1/2 px-4 md:px-12 ${index % 2 === 0 ? "text-left" : "md:text-right"}`}>
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-rose-50 hover:shadow-xl transition-shadow duration-300">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color} ${index % 2 !== 0 && "md:ml-auto"}`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-bold tracking-wider text-rose-400 uppercase">
                                        {item.year}
                                    </span>
                                    <h3 className="text-2xl font-serif mt-1 mb-2 text-slate-800">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    {/* Photo */}
                                    <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-sm">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Spacer for the other side */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
