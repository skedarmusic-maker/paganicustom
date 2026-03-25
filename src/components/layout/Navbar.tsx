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
    { href: "/portfolio", label: "Portfólio" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b-2 border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo */}
            <Link href="/" className="relative h-16 w-48 block flex-shrink-0" onClick={() => setIsOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="Pagani Custom Floripa Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
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

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="https://wa.me/554832495596"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-black font-heading font-bold text-sm tracking-widest uppercase px-6 py-3 border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
              >
                Agendar
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-primary p-2"
              aria-label="Abrir menu"
            >
              {isOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu — renderizado fora do header para não ter conflito de z-index */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black md:hidden flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8 w-full px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-heading font-black text-white uppercase tracking-tighter hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://wa.me/554832495596"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full text-center bg-primary text-black font-heading font-bold text-lg tracking-widest uppercase py-5"
            >
              Agendar Agora — WhatsApp
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
