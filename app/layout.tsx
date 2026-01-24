import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
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
        className={`${playfair.variable} ${inter.variable} antialiased font-sans bg-rose-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
