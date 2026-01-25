import type { Metadata } from "next";
import { Playfair_Display, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import DynamicBackground from "@/components/ui/DynamicBackground";
import CountdownOverlay from "@/components/ui/CountdownOverlay";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nuestra Historia | 4º Aniversario",
  description: "Un viaje a través de nuestros mejores momentos juntos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${inter.variable} ${montserrat.variable} antialiased font-sans`}
      >
        <style>{`
          /* Oculta scrollbars pero permite scroll funcional */
          html, body {
            -ms-overflow-style: none; /* IE 10+ */
            scrollbar-width: none; /* Firefox */
          }
          html::-webkit-scrollbar, body::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}</style>
        <CountdownOverlay />
        <DynamicBackground />
        <div className="page-container">{children}</div>
      </body>
    </html>
  );
}
