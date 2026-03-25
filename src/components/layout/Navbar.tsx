"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "A Empresa" },
    { href: "/servicos", label: "Serviços" },
    { href: "/#portfolio", label: "Portfólio" },
    { href: "/#faq", label: "Dúvidas" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b-2 border-primary/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative h-16 w-48 block" onClick={() => setIsOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="Pagani Custom Floripa Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-sm font-heading font-semibold text-white/80 hover:text-primary transition-colors tracking-widest uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/554832495596"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-black font-heading font-bold text-sm tracking-widest uppercase px-6 py-3 border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 shadow-[0_0_15px_rgba(245,231,32,0.3)] hover:shadow-[0_0_25px_rgba(245,231,32,0.6)]"
            >
              Agendar
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary outline-none z-50 relative"
              aria-label="Menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transition-all duration-500 md:hidden overflow-y-auto ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex flex-col items-center justify-start min-h-screen pt-32 pb-16 px-4">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden select-none pointer-events-none opacity-[0.05] z-0 flex items-center justify-center fixed">
             <div className="text-[30vw] font-black outline-text text-transparent transform rotate-90" style={{ WebkitTextStroke: '2px white' }}>
               PAGANI
             </div>
          </div>
          
          <nav className="relative z-10 flex flex-col items-center space-y-8 w-full px-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-heading font-black text-white hover:text-primary transition-colors uppercase tracking-tighter"
              >
                {link.label}
              </Link>
            ))}
            
            <a
              href="https://wa.me/554832495596"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-[80%] max-w-[300px] text-center bg-primary text-black font-heading font-bold text-lg tracking-widest uppercase py-4 border-2 border-primary shadow-[0_0_20px_rgba(245,231,32,0.4)] mt-10"
            >
              Agendar Agora
            </a>

            <div className="pt-12 flex flex-col items-center">
              <span className="text-white/30 text-xs font-bold tracking-widest uppercase">Florianópolis-SC</span>
              <div className="w-12 h-[2px] bg-primary mt-2"></div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

