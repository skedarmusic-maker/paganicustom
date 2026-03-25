"use client";

import { useEffect, useState } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Aparece após descer 100px para não sobrepor nada importante no topo absoluto
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Mostra se já carregou com scroll
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/554832495596"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] group w-16 h-16 flex items-center justify-center rounded-full bg-black border-2 border-primary/40 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'} hover:scale-110 hover:border-white shadow-[0_0_15px_rgba(245,231,32,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.8)]`}
      aria-label="Agende seu Serviço pelo WhatsApp"
    >
      {/* 1. Base Glow Luminoso (Módulo Ligado) */}
      <div className="absolute -inset-1 rounded-full bg-primary/20 blur-md group-hover:bg-white/40 group-hover:blur-xl transition-all duration-700"></div>
      
      {/* 2. Angel Eye / Halo Duo (Anéis rotativos que simulam os aros dos farois) */}
      <div className="absolute inset-[-5px] rounded-full border-[1.5px] border-primary/50 border-t-transparent animate-[spin_3s_linear_infinite] group-hover:border-white/80 transition-colors"></div>
      <div className="absolute inset-[-9px] rounded-full border-[1px] border-primary/20 border-b-transparent animate-[spin_4s_linear_infinite_reverse] group-hover:border-white/50 transition-colors"></div>
      
      {/* 3. Efeito DRL (Brilho intenso piscante suave) */}
      <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse group-hover:bg-white/10 group-hover:animate-ping transition-all"></div>

      {/* Ícone da Câmera/Lente que hospeda o WhatsApp */}
      <div className="relative z-10 w-full h-full flex items-center justify-center rounded-full bg-black">
        <svg
          className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(245,231,32,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 0C5.397 0 .015 5.385.015 12.02c0 2.126.554 4.195 1.606 6.01L0 24l6.115-1.604a11.968 11.968 0 005.916 1.564v-.001c6.634 0 12.016-5.385 12.016-12.02 0-3.216-1.253-6.24-3.528-8.514A11.967 11.967 0 0012.031 0zm0 21.979h-.001a9.982 9.982 0 01-5.088-1.385l-.364-.216-3.784.992.997-3.69-.237-.377A9.974 9.974 0 011.996 12.02C1.996 6.494 6.491 2 12.031 2c2.67 0 5.179 1.04 7.067 2.928 1.888 1.889 2.93 4.4 2.93 7.07 0 5.526-4.496 10.021-10.029 10.021l.032-.04zm5.498-7.519c-.301-.151-1.782-.88-2.062-.979-.28-.1-.482-.151-.684.151-.202.302-.782.979-.958 1.18-.176.202-.352.227-.654.076a8.216 8.216 0 01-2.433-1.503 9.074 9.074 0 01-1.688-2.096c-.176-.302-.019-.465.132-.616.136-.136.302-.352.453-.528.151-.176.202-.302.302-.503.1-.201.05-.377-.025-.528-.076-.151-.684-1.647-.936-2.253-.246-.593-.497-.512-.684-.522-.175-.008-.376-.008-.578-.008a1.114 1.114 0 00-.806.377c-.276.302-1.055 1.03-1.055 2.513s1.08 2.913 1.231 3.115c.151.201 2.124 3.243 5.143 4.546.719.31 1.28.495 1.717.633.722.228 1.38.196 1.898.119.58-.086 1.782-.729 2.033-1.433.25-.704.25-1.308.175-1.433-.075-.125-.276-.201-.578-.352z" />
        </svg>
      </div>
    </a>
  );
}
