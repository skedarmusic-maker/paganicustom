import Image from "next/image";
import sobreImg from "../../../public/images/sobre.jpeg";

export default function Authority() {
  return (
    <section className="py-24 bg-dark-gray relative overflow-hidden border-b border-white/5" id="sobre">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative h-[400px] md:h-[600px] w-full border border-white/10 group overflow-hidden">
            <Image
              src={sobreImg}
              alt="Especialista trabalhando na estética automotiva Pagani Custom"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/10 transition-colors duration-700"></div>
            
            {/* Decal / Badge elements */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-black p-8 transform -skew-x-12 border-4 border-black hidden md:block">
              <span className="block skew-x-12 text-5xl font-heading font-black tracking-tighter shadow-sm">
                100%
              </span>
              <span className="block skew-x-12 text-sm font-sans font-bold uppercase mt-1">
                Foco no Detalhe
              </span>
            </div>
            
            {/* Corner sharp accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary"></div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter leading-[1.1]">
              Mais de 10 anos <span className="border-text block mt-2 opacity-80">transformando</span> projetos
            </h2>
            
            <div className="space-y-6 text-white/90 font-sans text-lg md:text-xl font-light">
              <p>
                Localizados estrategicamente na <strong className="text-white font-semibold">Costeira do Pirajubaé</strong>, no coração de Florianópolis, a Pagani Custom é muito mais que uma oficina. Somos a referência que atende toda a região (São José, Palhoça e Biguaçu) quando o assunto é <strong className="text-primary font-medium">Estética Automotiva e Especialista em Faróis</strong>.
              </p>
              <p>
                Nascemos de uma obsessão inegociável por precisão técnica. Nosso laboratório foca na avaliação, polimento e restauração de faróis amarelados, aplicação de máscara negra e instalação de LEDs (incluindo lâmpadas H7) e DRLs que ditam a personalidade do seu veículo na rua.
              </p>
              <blockquote className="border-l-4 border-primary bg-white/5 pl-6 pr-4 py-4 italic text-white/90 text-base md:text-lg backdrop-blur-sm -skew-x-6">
                <span className="block skew-x-6">
                  &quot;Nosso compromisso é entregar qualidade premium com acabamento impecável. Cada carro, moto ou utilitário sai daqui com uma identidade inconfundível.&quot;
                </span>
              </blockquote>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <span className="block text-4xl lg:text-5xl text-primary font-heading font-black mb-1">5.0</span>
                <span className="text-sm text-white/80 uppercase tracking-widest font-semibold">Nota Google</span>
              </div>
              <div>
                <span className="block text-4xl lg:text-5xl text-white font-heading font-black mb-1">40+</span>
                <span className="text-sm text-white/80 uppercase tracking-widest font-semibold">Avaliações</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
