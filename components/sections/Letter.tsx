"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

interface LetterProps {
	content?: string;
	autoOpen?: boolean;
}

export function Letter({ content = "Aquí irá tu carta...", autoOpen = false }: LetterProps) {
	const [open, setOpen] = useState(autoOpen);

	return (
		<Section className="flex flex-col items-center text-center">
			<h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-6">Carta para el amor de mi vida</h2>

			<div className="relative w-full max-w-xl">
				<div className="flex justify-center mb-6">
					<motion.div
						initial={false}
						animate={open ? "open" : "closed"}
						variants={{ closed: { scale: 1 }, open: { scale: 1.02 } }}
						className="relative w-80 h-52 bg-rose-100 rounded-xl shadow-lg cursor-pointer"
						onClick={() => setOpen((v) => !v)}
					>
						<motion.div
							variants={{
								closed: { rotateX: 0, transformOrigin: "top" },
								open: { rotateX: -180, transformOrigin: "top" },
							}}
							transition={{ duration: 0.8, ease: "easeInOut" }}
							className="absolute inset-x-0 top-0 h-1/2 bg-rose-300 rounded-t-xl"
						/>

						<motion.div
							initial={{ y: 0 }}
							animate={open ? { y: -40 } : { y: 0 }}
							transition={{ duration: 0.8, ease: "easeInOut" }}
							className="absolute left-4 right-4 top-6 bottom-6 bg-white rounded-md p-4 overflow-hidden"
						>
							<div className="w-full h-full overflow-auto text-left text-amber-900 whitespace-pre-wrap">
								{content}
							</div>
						</motion.div>
					</motion.div>
				</div>

				<div className="text-sm text-slate-600">Haz clic en el sobre para abrir / cerrar.</div>
			</div>
		</Section>
	);
}

export default Letter;

