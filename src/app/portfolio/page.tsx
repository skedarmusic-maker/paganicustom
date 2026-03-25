"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const portfolioImages = [
  "/images/port2/WhatsApp Image 2026-03-25 at 15.16.58.jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.16.59.jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.16.59 (1).jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.16.59 (2).jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.16.59 (3).jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.16.59 (4).jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.17.00.jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.17.00 (1).jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.17.00 (2).jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.17.01.jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.17.01 (1).jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.17.01 (2).jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.17.01 (3).jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.17.02.jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.17.02 (1).jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.17.02 (2).jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.17.02 (3).jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.17.02 (4).jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.17.03.jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.17.03 (1).jpeg",
  "/images/port2/WhatsApp Image 2026-03-25 at 15.17.03 (2).jpeg",
];

export default function PortfolioPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === portfolioImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? portfolioImages.length - 1 : prev - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <article className="bg-[#020202] min-h-screen font-sans text-white/90 overflow-hidden flex flex-col pt-24">
      {/* 1. TOPO: Título e Marquee */}
      <div className="w-full bg-black border-b border-primary/20 flex flex-col items-center justify-center pt-8 pb-4 z-20 relative shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter mb-4">
          Galeria de <span className="text-primary">Projetos</span>
        </h1>
        
        {/* Letreiro Deslizante (Marquee) */}
        <div className="w-full overflow-hidden whitespace-nowrap bg-primary/10 border-y border-primary/30 py-2 mt-4">
          <div className="inline-block animate-[marquee_20s_linear_infinite]">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mx-8">
              • 10 ANOS DE EXPERIÊNCIA
            </span>
            <span className="text-white font-bold tracking-[0.2em] uppercase text-sm mx-8">
              • ILUMINAÇÃO DE ALTA PERFORMANCE
            </span>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mx-8">
              • PROJETOR BI-LED
            </span>
            <span className="text-white font-bold tracking-[0.2em] uppercase text-sm mx-8">
              • QUALIDADE PREMIUM
            </span>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mx-8">
              • MÁSCARA NEGRA & VEDAÇÃO
            </span>
            <span className="text-white font-bold tracking-[0.2em] uppercase text-sm mx-8">
              • ACABAMENTO DE FÁBRICA
            </span>
          </div>
          {/* Duplicate for infinite loop illusion */}
          <div className="inline-block animate-[marquee_20s_linear_infinite]" aria-hidden="true">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mx-8">
              • 10 ANOS DE EXPERIÊNCIA
            </span>
            <span className="text-white font-bold tracking-[0.2em] uppercase text-sm mx-8">
              • ILUMINAÇÃO DE ALTA PERFORMANCE
            </span>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mx-8">
              • PROJETOR BI-LED
            </span>
            <span className="text-white font-bold tracking-[0.2em] uppercase text-sm mx-8">
              • QUALIDADE PREMIUM
            </span>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mx-8">
              • MÁSCARA NEGRA & VEDAÇÃO
            </span>
            <span className="text-white font-bold tracking-[0.2em] uppercase text-sm mx-8">
              • ACABAMENTO DE FÁBRICA
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN SLIDER/CAROUSEL */}
      <div className="relative flex-grow min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
        {/* Fundo borrado para preencher espaço (Immersive look) */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src={portfolioImages[currentIndex]}
            alt="Fundo borrado"
            fill
            className="object-cover blur-3xl scale-110 transition-all duration-700"
          />
        </div>

        {/* Imagem Principal */}
        <div className="relative z-10 w-full h-full max-w-6xl p-4 md:p-8 flex items-center justify-center">
          <div className="relative w-full h-full min-h-[40vh] md:min-h-[55vh] shadow-[0_0_50px_rgba(0,0,0,1)] border border-white/10 group">
            <Image
              src={portfolioImages[currentIndex]}
              alt={`Projeto Pagani Custom ${currentIndex + 1}`}
              fill
              className="object-contain lg:object-cover transition-opacity duration-500"
              priority
            />
            
            {/* Overlay CTA sobre a imagem (aparece no hover em telas grandes) */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hidden lg:flex">
              <a 
                href="https://wa.me/554832495596" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-black font-heading font-black uppercase tracking-widest px-8 py-4 hover:bg-white hover:scale-105 transition-all duration-300"
              >
                Quero esse resultado
              </a>
            </div>
          </div>
        </div>

        {/* Botões de Navegação (Next / Prev) */}
        <button 
          onClick={prevImage}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-primary text-white hover:text-black border border-white/20 hover:border-primary p-3 md:p-5 backdrop-blur-md transition-all duration-300"
          aria-label="Imagem Anterior"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button 
          onClick={nextImage}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-primary text-white hover:text-black border border-white/20 hover:border-primary p-3 md:p-5 backdrop-blur-md transition-all duration-300"
          aria-label="Próxima Imagem"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute bottom-4 right-4 md:right-8 z-20 bg-black/80 px-4 py-2 border border-white/10 text-white font-heading font-bold text-sm tracking-widest">
          {currentIndex + 1} / {portfolioImages.length}
        </div>
      </div>

      {/* Botão Mobile Agendar (pois o hover da imagem grande não funciona no cel) */}
      <div className="lg:hidden w-full bg-[#0a0a0a] px-4 py-6 border-b border-white/10 flex justify-center">
        <a 
          href="https://wa.me/554832495596" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-primary text-black font-heading font-black text-center text-lg uppercase tracking-widest px-8 py-4 shadow-[0_0_20px_rgba(245,231,32,0.3)]"
        >
          Quero esse resultado
        </a>
      </div>

      {/* 3. THUMBNAILS (Navegação inferior) */}
      <div className="w-full bg-black py-6 mt-auto border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-4 text-center">Navegar pelo Catálogo</p>
          <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-white/5 snap-x">
            {portfolioImages.map((src, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative h-20 w-20 md:h-24 md:w-24 shrink-0 overflow-hidden border-2 snap-center transition-all duration-300 ${
                  currentIndex === index 
                    ? "border-primary scale-105 opacity-100" 
                    : "border-transparent opacity-40 hover:opacity-80"
                }`}
              >
                <Image 
                  src={src} 
                  alt={`Miniatura ${index + 1}`} 
                  fill 
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </article>
  );
}
