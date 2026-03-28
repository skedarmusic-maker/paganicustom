"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const portfolioImages = [
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.16.58.jpeg", alt: "Projeto Pagani Custom - Evento Automotivo" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.16.59.jpeg", alt: "Customização Premium Pagani Custom Floripa" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.16.59 (1).jpeg", alt: "Faróis Customizados Florianópolis" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.16.59 (2).jpeg", alt: "Iluminação LED Automotiva Pagani Custom" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.16.59 (3).jpeg", alt: "Estética Automotiva Premium Floripa" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.16.59 (4).jpeg", alt: "Projetor Bi-LED Instalação Pagani" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.17.00.jpeg", alt: "Restauração de Faróis Florianópolis" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.17.00 (1).jpeg", alt: "Máscara Negra Automotiva Pagani Custom" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.17.00 (2).jpeg", alt: "DRL Angel Eyes Instalação Floripa" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.17.01.jpeg", alt: "Customização Esportiva Pagani Custom" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.17.01 (1).jpeg", alt: "Projeto Iluminação Premium" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.17.01 (2).jpeg", alt: "Faróis LED Angel Eyes Florianópolis" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.17.01 (3).jpeg", alt: "Projetor Biled Pagani Floripa" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.17.02.jpeg", alt: "Customização Automotiva Resultado Final" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.17.02 (1).jpeg", alt: "Interior Customizado Pagani Custom" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.17.02 (2).jpeg", alt: "Acabamento Premium Faróis LED" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.17.02 (3).jpeg", alt: "Projeto Especial Pagani Custom Floripa" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.17.02 (4).jpeg", alt: "Iluminação Exclusiva Florianópolis" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.17.03.jpeg", alt: "Customização Bi-LED resultado" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.17.03 (1).jpeg", alt: "Estética Automotiva Pagani Custom" },
  { src: "/images/port2/WhatsApp Image 2026-03-25 at 15.17.03 (2).jpeg", alt: "Portfolio Pagani Custom Floripa" },
];

export default function PortfolioPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const navigate = useCallback((dir: 1 | -1) => {
    setLightbox((prev) => {
      if (prev === null) return null;
      const next = prev + dir;
      if (next < 0) return portfolioImages.length - 1;
      if (next >= portfolioImages.length) return 0;
      return next;
    });
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, navigate]);

  return (
    <article className="bg-[#020202] min-h-screen font-sans text-white/90 overflow-hidden pt-24">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Acervo Completo</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter leading-none">
              Galeria de <span className="text-primary">Projetos</span>
            </h1>
          </div>
          <p className="text-white/50 font-sans max-w-xs text-sm leading-relaxed md:text-right border-l md:border-l-0 md:border-r border-primary pl-4 md:pr-4 md:pl-0">
            {portfolioImages.length} projetos entregues. Clique em qualquer imagem para visualizar em tela cheia.
          </p>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="w-full overflow-hidden whitespace-nowrap bg-primary border-y border-primary/50 py-2 mb-10">
        {[0, 1].map((i) => (
          <div key={i} className="inline-block animate-[marquee_25s_linear_infinite]" aria-hidden={i === 1}>
            {["10 ANOS DE EXPERIÊNCIA","ILUMINAÇÃO ALTA PERFORMANCE","PROJETOR BI-LED","MÁSCARA NEGRA","ANGEL EYES","QUALIDADE PREMIUM","FLORIANÓPOLIS-SC"].map((t) => (
              <span key={t} className="text-black font-black tracking-[0.2em] uppercase text-xs mx-8">• {t}</span>
            ))}
          </div>
        ))}
      </div>

      {/* FEED GRID — 3 cols desktop / 2 cols mobile, proporção quadrada */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
          {portfolioImages.map((item, index) => (
            <button
              key={index}
              onClick={() => setLightbox(index)}
              className="group relative block aspect-square overflow-hidden bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={`Ver ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="border border-white/50 p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              {/* Index badge */}
              <div className="absolute bottom-2 right-2 bg-black/70 text-white/60 text-[10px] font-bold px-2 py-0.5 font-heading opacity-0 group-hover:opacity-100 transition-opacity">
                {index + 1}/{portfolioImages.length}
              </div>
            </button>
          ))}
        </div>

        {/* CTA abaixo do grid */}
        <div className="mt-16 text-center">
          <p className="text-white/40 font-sans text-sm mb-6">Quer um projeto como esse para o seu veículo?</p>
          <a
            href="https://wa.me/554832495596"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-black font-heading font-black uppercase tracking-widest px-10 py-5 hover:bg-white transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quero esse resultado
          </a>
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Imagem — object-contain: nunca corta */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={portfolioImages[lightbox].src}
              alt={portfolioImages[lightbox].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Fechar */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-60 bg-black/60 border border-white/20 p-3 text-white hover:bg-primary hover:text-black transition-all"
            aria-label="Fechar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-60 bg-black/60 border border-white/20 p-3 md:p-5 text-white hover:bg-primary hover:text-black transition-all"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-60 bg-black/60 border border-white/20 p-3 md:p-5 text-white hover:bg-primary hover:text-black transition-all"
            aria-label="Próximo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter + Alt */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-white/40 text-xs font-sans text-center max-w-xs">{portfolioImages[lightbox].alt}</span>
            <span className="bg-black/70 text-white font-heading font-bold text-sm tracking-widest px-4 py-1 border border-white/10">
              {lightbox + 1} / {portfolioImages.length}
            </span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </article>
  );
}
