import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b-2 border-primary/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative h-16 w-48 block">
              <Image
                src="/images/logo.png"
                alt="Pagani Custom Floripa Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/servicos" className="text-sm font-heading font-semibold text-white/80 hover:text-primary transition-colors tracking-widest uppercase">
              Serviços
            </Link>
            <Link href="/#portfolio" className="text-sm font-heading font-semibold text-white/80 hover:text-primary transition-colors tracking-widest uppercase">
              Portfólio
            </Link>
            <Link href="/#faq" className="text-sm font-heading font-semibold text-white/80 hover:text-primary transition-colors tracking-widest uppercase">
              Dúvidas
            </Link>
            <Link href="/contato" className="text-sm font-heading font-semibold text-white/80 hover:text-primary transition-colors tracking-widest uppercase">
              Contato
            </Link>
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
            <button className="text-white hover:text-primary outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
