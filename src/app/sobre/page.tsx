import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre a Empresa | Pagani Custom Floripa',
  description: 'Há mais de 10 anos sendo referência em Floripa na customização automotiva premium: Bi-LED, faróis, estética e performance para carros e motos.',
};

export default function SobrePage() {
  return (
    <article className="bg-black min-h-screen font-sans text-white/80 overflow-hidden pt-20">
      
      {/* 1. HERO BRUTALISTA ASSIMÉTRICO */}
      <section className="relative w-full flex flex-col justify-end pb-16 md:pb-24 pt-12 md:pt-0 md:min-h-[95vh] px-4 sm:px-6 lg:px-12 border-b border-white/10">
        
        {/* Layer 0: Fundo Typográfico Massivo */}
        <div className="absolute top-[30%] left-[-10%] w-[120%] overflow-hidden select-none pointer-events-none opacity-[0.03] z-0">
           <div aria-hidden="true" className="text-[22vw] leading-none font-heading font-black whitespace-nowrap outline-text text-transparent transform -rotate-3" style={{ WebkitTextStroke: '2px white' }}>
             EST. 2014 PGN FLORIPA
           </div>
        </div>

        {/* Layer 1: Conflito de Imagem da Fachada (Z-Axis Depth) */}
        <div className="absolute top-28 right-0 w-[95vw] lg:w-[50vw] h-[65vh] z-10 perspective-1000 hidden md:block">
          <div className="relative w-full h-full transform transition-all duration-1000 rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-[0deg] origin-right shadow-[0_0_100px_rgba(245,231,32,0.05)]">
             <Image 
               src="/images/sobre.jpeg" 
               alt="Fachada Pagani Custom em Florianópolis" 
               fill 
               className="object-cover border-l border-b border-primary/30 grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
               priority
             />
             
             {/* Vignette para integrar a foto ao escuro */}
             <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>

             {/* Badge 10 Anos Sobre a Imagem */}
             <div className="absolute -bottom-10 left-10 w-40 h-40 bg-black border border-primary/50 flex flex-col items-center justify-center rounded-full z-20 shadow-[0_0_30px_rgba(245,231,32,0.2)]">
                <span className="text-5xl font-heading font-black text-transparent" style={{ WebkitTextStroke: '1.5px #f5e720' }}>10+</span>
                <span className="text-white/60 text-xs font-bold tracking-widest uppercase mt-1">Anos de Hist.</span>
             </div>
          </div>
        </div>

        {/* Layer 2: Conteúdo Textual Brutalista (Esquerda) */}
        <div className="relative z-20 w-full flex justify-start">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-3 mb-6 w-full">
              <span className="w-16 h-[2px] bg-primary"></span>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Nossa História & Essência</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-heading font-black text-white uppercase tracking-tighter leading-[0.9] mb-6 md:mb-8 mix-blend-difference">
              O Padrão <span className="text-transparent" style={{ WebkitTextStroke: '2px #f5e720' }}>Pagani</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90 border-l-4 border-primary pl-6 mb-6 max-w-xl">
              Mais de uma década ditando as regras da <strong className="text-white">Iluminação Automotiva</strong> em SC.
            </p>
            
            <div className="mt-8 text-lg font-sans text-white/90 leading-relaxed max-w-xl bg-black/50 p-6 border border-white/5 backdrop-blur-sm relative group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
              A Pagani Custom nasceu da paixão visceral pelo detalhe automobilístico. Mais de 10 anos de experiência transformando a iluminação e a estética ótica, entregando pura engenharia e confiabilidade absoluta para o seu carro, moto ou utilitário.
            </div>
          </div>
        </div>

      </section>

      {/* 2. O QUE FAZEMOS: O MANIFESTO DO SERVIÇO */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#050505] border-b border-white/5 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-8">
              Expertise <br/><span className="text-primary">Premium</span>
            </h2>
            <p className="text-xl text-white/90 font-light leading-relaxed mb-8">
              Somos especialistas em customização automotiva irrestrita na região metropolitana de Florianópolis.
            </p>
            <p className="text-lg text-white/80 font-light leading-relaxed mb-8 border-l border-white/20 pl-6 py-2">
              Líder em iluminação frontal e personalização ótica premium em Florianópolis. Cada projeto que entra em nosso galpão recebe tratamento individualizado com foco em vedação, alinhamento e estética superior.
            </p>
          </div>

          <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="bg-black border border-white/10 p-6 flex flex-col justify-center min-h-[160px] group transition-all hover:border-primary/50">
              <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">Iluminação Tecnológica</h4>
              <p className="text-white/85 font-light text-sm">Instalação e reparo definitivo de projetores bi-led, lâmpadas LED premium e xenon.</p>
            </div>
            
            <div className="bg-black border border-white/10 p-6 flex flex-col justify-center min-h-[160px] group transition-all hover:border-primary/50 translate-y-4">
              <h4 className="text-white font-bold tracking-[0.2em] uppercase text-sm mb-3 group-hover:text-primary transition-colors">Design Frontal</h4>
              <p className="text-white/85 font-light text-sm">Restauração estrutural de faróis e aplicação customizada de Máscara Negra selada.</p>
            </div>

            <div className="bg-black border border-white/10 p-6 flex flex-col justify-center min-h-[160px] group transition-all hover:border-primary/50">
              <h4 className="text-white font-bold tracking-[0.2em] uppercase text-sm mb-3 group-hover:text-primary transition-colors">Assinatura Luminosa</h4>
              <p className="text-white/85 font-light text-sm">Instalação técnica de DRLs com fitas de LED duplas, Angel Eyes (Halo Rings) e faróis de milha.</p>
            </div>

            <div className="bg-black border border-white/10 p-6 flex flex-col justify-center min-h-[160px] group transition-all hover:border-primary/50 border-l-[3px] border-l-primary translate-y-4">
              <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">Vedação & Blindagem</h4>
              <p className="text-white/85 font-light text-sm">Tratamento especializado que protege e evita infiltração, mantendo a integridade dos faróis.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. VISÃO DE NEGÓCIO & CITAÇÃO */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 bg-black border-y border-white/5 relative flex flex-col items-center">
         <div className="max-w-4xl text-center relative z-10">
            <svg className="w-16 h-16 text-primary/20 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tight leading-tight mb-10">
              "Aqui não vendemos peças ou lâmpadas.<br/> Nós assinamos um <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #f5e720' }}>estado de espírito</span> automobilístico."
            </h3>
            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto">
              Seja o seu carro do dia a dia, uma moto esporte ou um utilitário calejado: quando passa pelas nossas portas em Florianópolis, sai carregando uma assinatura visual inconfundível.
            </p>
         </div>
      </section>

      {/* 4. FOOTER CALL TO ACTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#020202] text-center">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-8">Faça Parte Dessa História</h2>
        <Link 
          href="/contato" 
          className="group relative inline-flex items-center justify-center px-12 py-5 bg-transparent overflow-hidden border-2 border-primary text-primary hover:text-black transition-colors duration-500 font-heading font-bold uppercase tracking-[0.2em] text-sm shadow-[0_0_20px_rgba(245,231,32,0.1)] hover:shadow-[0_0_40px_rgba(245,231,32,0.5)]"
        >
          <span className="absolute inset-0 w-full h-full -translate-x-full bg-primary group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
          <span className="relative z-10 flex items-center">
            Trazer Meu Projeto
            <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
        </Link>
      </section>

    </article>
  );
}
