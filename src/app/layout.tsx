import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pagani Custom Floripa | Customização Automotiva Premium",
  description: "Especialistas em customização automotiva em Florianópolis. Restauração de faróis, aplicação de máscara negra, LEDs, Estética Automotiva Premium e Projetos Exclusivos.",
  keywords: ["customização automotiva", "Florianópolis", "Pagani Custom", "restauração de faróis", "LED automotivo", "estética automotiva", "envelopamento"],
  authors: [{ name: "Pagani Custom" }],
  openGraph: {
    title: "Pagani Custom Floripa | Customização Premium",
    description: "Especialistas em customização automotiva em Florianópolis-SC. Qualidade premium e acabamento impecável.",
    url: "https://paganicustom.com.br", // Replace with real URL later
    siteName: "Pagani Custom Floripa",
    locale: "pt_BR",
    type: "website",
  },
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth bg-black" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-black text-white flex flex-col min-h-screen pt-24`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
