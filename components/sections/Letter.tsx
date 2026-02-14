"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { X } from "lucide-react";

export function Letter() {
	const [isOpen, setIsOpen] = useState(false);

	const letterContent = (
		<div className="space-y-6 text-lg md:text-xl text-stone-800 leading-relaxed font-serif">
			<p>
				Hoy celebramos cuatro años juntos. Cuatro años que no se sienten como tiempo, sino como historia. Historia nuestra. De esas que no se escriben con tinta, sino con abrazos, con lágrimas, con risas que llegan hasta doler, con silencios que dicen más que mil palabras.
			</p>
			<p>
				A veces me pregunto cómo tuve tanta suerte. Cómo la vida decidió cruzar nuestros caminos y decir: “aquí es”. Porque desde que llegaste, todo cambió. No exagero. Cambió mi manera de pensar, de sentir, de amar. Cambió mi manera de entender el mundo.
			</p>
			<div className="pl-4 border-l-4 border-rose-300 italic text-stone-600 my-8">
				Como escribió Pablo Neruda:
				<br />
				"Te amo sin saber cómo, ni cuándo, ni de dónde. Te amo directamente sin problemas ni orgullo."
			</div>
			<p>
				Y así te amo yo. Sin cálculos. Sin condiciones. Sin reservas. Te amo porque sí. Porque mi corazón te eligió incluso antes de que yo entendiera lo que significaba elegir.
			</p>
			<p>
				Han sido cuatro años de crecer, de equivocarnos, de aprender. Cuatro años donde he descubierto que el amor no es solo emoción intensa; es decisión diaria. Es quedarse cuando es difícil. Es hablar cuando duele. Es perdonar cuando cuesta. Es abrazar aunque haya orgullo de por medio.
			</p>
		</div>
	);

	return (
		<Section className="py-24 flex flex-col items-center justify-center min-h-[60vh]">
			<div className="text-center mb-12">
				<h2 className="text-4xl md:text-6xl font-serif text-rose-950 mb-4">Para Ti</h2>
				<p className="text-rose-800/60 text-lg">Toca la carta para leerla</p>
			</div>

			<div className="relative perspective-1000">
				<motion.div
					layoutId="envelope"
					className="relative w-80 h-52 bg-rose-100 rounded-lg shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300 flex items-center justify-center z-10"
					onClick={() => setIsOpen(true)}
					whileHover={{ rotate: 2 }}
				>
					{/* Envelope Flap */}
					<div className="absolute top-0 right-0 left-0 h-1/2 bg-rose-200 clip-path-polygon-[0_0,50%_100%,100%_0] transform origin-top transition-transform duration-500 rounded-t-lg z-20 shadow-sm" />

					{/* Envelope Body */}
					<div className="absolute bottom-0 right-0 left-0 top-1/2 bg-rose-100 z-20 rounded-b-lg border-t border-rose-200/50" />

					{/* Seal */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center z-30 shadow-lg border-2 border-rose-300">
						<span className="text-rose-100 text-2xl">❤️</span>
					</div>

					{/* Hint of letter inside */}
					<div className="absolute top-2 left-4 right-4 h-full bg-white rounded-sm shadow-inner transform translate-y-2 z-10" />
				</motion.div>
			</div>

			{/* Expanded Letter Modal */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rose-950/40 backdrop-blur-md"
						onClick={() => setIsOpen(false)}
					>
						<motion.div
							layoutId="envelope"
							className="relative w-full max-w-2xl bg-[#fffcf5] rounded-xl shadow-2xl overflow-hidden"
							onClick={(e) => e.stopPropagation()}
							initial={{ scale: 0.8, rotateX: 20 }}
							animate={{ scale: 1, rotateX: 0 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ type: "spring", damping: 25, stiffness: 300 }}
						>
							{/* Paper Texture Effect */}
							<div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none" />

							{/* Header decoration */}
							<div className="h-2 w-full bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300" />

							<div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto custom-scrollbar">
								<button
									onClick={() => setIsOpen(false)}
									className="absolute top-4 right-4 text-rose-300 hover:text-rose-500 transition-colors"
								>
									<X size={24} />
								</button>

								{letterContent}

								<div className="mt-12 text-right">
									<p className="font-handwriting text-2xl text-rose-900 transform -rotate-2">
										Con todo mi amor... De tu novio, mejor amigo y compañero de vida.
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</Section>
	);
}


