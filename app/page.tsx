import { FloatingHearts } from "@/components/ui/FloatingHearts";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { Hero } from "@/components/sections/Hero";
import { Timeline } from "@/components/sections/Timeline";
import { OrganizedGallery } from "@/components/sections/OrganizedGallery";
import { Letter } from "@/components/sections/Letter";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <FloatingHearts />
      <MusicPlayer />

      <Hero />

      <Timeline />

      <OrganizedGallery />

      <Letter />

      <Section className="text-center py-24 mb-10">
        <h2 className="text-4xl md:text-6xl font-serif text-rose-900 mb-8">
          Te Amo
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto italic">
          "Gracias por estos 4 años maravillosos. Eres mi todo, eres mi princesa."
        </p>
        <div className="mt-12 text-sm text-rose-300 font-serif">
          Forever & Always
        </div>
      </Section>
    </main>
  );
}
