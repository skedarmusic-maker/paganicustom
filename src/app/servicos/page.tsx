import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Serviços & Especialidades | Pagani Custom Floripa',
  description: 'Conheça nosso catálogo completo de customização automotiva em Florianópolis. Bi-LED, Máscara Negra, Restauração de Faróis, DRL e Angel Eyes.',
};

export default function ServicosPage() {
  const specializedServices = [
    {
      title: "Restauração de Faróis",
      desc: "Devolução da transparência original do policarbonato com proteção UV e vitrificação de longa duração.",
      link: "/restauracao-de-farol",
      image: "/images/rest farol/restauracao de farol.jpeg"
    },
    {
      title: "Máscara Negra",
      desc: "Pintura interna das molduras do farol (Black Piano ou Fosco) para um visual agressivo e esportivo.",
      link: "/mascara-negra",
      image: "/images/mascaranegra/mascaranegra.jpeg"
    },
    {
      title: "Instalação de DRL",
      desc: "Luz de rodagem diurna em LED com seta sequencial/Dual Color. Mais segurança diurna e estética Premium.",
      link: "/instalacao-de-drl",
      image: "" // Placeholder ready as requested
    },
    {
      title: "Angel Eyes (Halo)",
      desc: "Anéis luminosos de LED Crystal/RGB inspirados nas montadoras alemãs para uma assinatura luminosa exclusiva.",
      link: "/angel-eyes",
      image: "" // Placeholder ready as requested
    }
  ];

  return (
    <article className="bg-[#020202] min-h-screen font-sans text-white/80 overflow-hidden pt-24 pb-32 relative">
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER DO CATÁLOGO */}
        <div className="mb-20 text-center lg:text-left">
          <div className="inline-flex items-center space-x-3 mb-6 justify-center lg:justify-start w-full">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Catálogo de Alta Performance</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-6">
            Nossas <span className="text-transparent" style={{ WebkitTextStroke: '2px #f5e720' }}>Especialidades</span>
          </h1>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Selecione a área do seu projeto. Muito além do básico, cada serviço é executado com precisão cirúrgica para transformar a estética e a funcionalidade do seu veículo.
          </p>
        </div>

        {/* CARRO CHEFE: BI-LED (Destaque Principal) */}
        <div className="mb-12 group relative bg-black border border-primary/20 hover:border-primary transition-all duration-700 overflow-hidden flex flex-col lg:flex-row shadow-[0_0_50px_rgba(245,231,32,0.05)] hover:shadow-[0_0_80px_rgba(245,231,32,0.15)]">
          <div className="lg:w-3/5 relative min-h-[400px] overflow-hidden">
             <Image 
               src="/images/biled/projetorbiled.jpeg" 
               alt="Projetores Bi-LED Pagani Custom" 
               fill 
               className="object-cover object-center grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
             />
             <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/80 lg:via-transparent to-transparent z-10"></div>
          </div>
          
          <div className="lg:w-2/5 p-10 lg:p-14 flex flex-col justify-center relative z-20 bg-black lg:bg-transparent lg:absolute right-0 top-0 h-full lg:w-1/2">
             <h4 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">Projeto Signature</h4>
             <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6 uppercase tracking-tight group-hover:text-primary transition-colors">
               Projetores Bi-LED
             </h2>
             <p className="text-white/70 font-sans text-lg leading-relaxed mb-10 max-w-md">
               A evolução absoluta da iluminação automotiva. Substituição do sistema refletor original por blocos duplos de alta voltagem para potência visual insana e segurança térmica.
             </p>
             <Link href="/projetor-biled" className="inline-flex max-w-max items-center justify-center font-heading font-bold text-sm tracking-widest uppercase text-black bg-primary px-10 py-5 hover:bg-white transition-all duration-300 transform group-hover:-translate-y-1">
               Ver Especialidade Completa
             </Link>
          </div>
        </div>

        {/* GRID DOS DEMAIS SERVIÇOS (Asymmetric Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specializedServices.map((service, index) => (
            <Link 
              key={index} 
              href={service.link}
              className="group relative bg-[#050505] border border-white/10 hover:border-white/40 transition-all duration-500 overflow-hidden flex flex-col min-h-[350px]"
            >
              {/* Image Banner top */}
              <div className="w-full h-48 relative overflow-hidden bg-[#0A0A0A] border-b border-white/5">
                {service.image ? (
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]">
                    <span className="text-white/20 font-heading tracking-widest uppercase text-[10px]">[ IMAGEM DE DEMONSTRAÇÃO RETIDA ]</span>
                  </div>
                )}
                {/* Visual Glitch/Scanline */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/50 shadow-[0_0_10px_#f5e720] -translate-y-[100px] group-hover:translate-y-[300px] transition-transform duration-[1.5s] ease-in-out"></div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-4 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 font-sans text-sm leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <div className="mt-8 flex items-center text-xs font-heading font-bold uppercase tracking-widest text-primary">
                  Saiba Mais
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* MENSAGEM AOS DEMAIS SERVIÇOS DO PORTFÓLIO */}
        <div className="mt-20 border border-white/5 bg-black p-12 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-widest mb-4">Outros Projetos</h2>
          <p className="text-white/50 font-light max-w-2xl mx-auto">
            Além do foco primordial em Iluminação de Alta Performance, também atuamos em estéticas selecionadas, customizações focadas em Performance (Remap) e Suspensão sob consulta estratégica.
          </p>
          <div className="mt-8">
            <Link href="/contato" className="inline-block text-primary hover:text-white uppercase tracking-widest text-sm font-bold border-b border-primary/30 pb-1 transition-colors">
              Conversar sobre um Projeto Específico
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
