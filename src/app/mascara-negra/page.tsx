import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Máscara Negra em Florianópolis | Pintura Interna de Faróis',
  description: 'Personalize seu carro com Máscara Negra profissional em Florianópolis. Pintura interna com resistência térmica e vedação garantida. Veja as fotos!',
};

export default function MascaraNegraPage() {
  return (
    <article className="bg-[#030303] min-h-screen font-sans text-white/80 overflow-hidden pt-20">
      
      {/* 1. HERO BRUTALISTA ASSIMÉTRICO */}
      <section className="relative w-full flex flex-col justify-end pb-16 md:pb-24 pt-10 md:pt-0 md:min-h-[90vh] px-4 sm:px-6 lg:px-12 border-b border-white/10">
        
        {/* Layer 0: Fundo Typográfico Massivo (Outline Invisible to SEO) */}
        <div className="absolute top-10 right-0 w-full overflow-hidden select-none pointer-events-none opacity-[0.03] z-0 flex justify-end">
           <div aria-hidden="true" className="text-[14vw] leading-none font-heading font-black whitespace-nowrap outline-text text-transparent text-right" style={{ WebkitTextStroke: '2px white' }}>
             FULL BLACK PGN
           </div>
        </div>

        {/* Layer 1: Conflito de Imagens (Z-Axis Depth) */}
        <div className="absolute top-32 left-0 w-[80vw] lg:w-[40vw] h-[60vh] z-10 hidden md:block perspective-1000">
          <div className="relative w-full h-full transform transition-all duration-1000 rotate-y-[15deg] rotate-x-[5deg] hover:rotate-y-[5deg] origin-left shadow-2xl">
             <Image 
               src="/images/mascaranegra/mascaranegra.jpeg" 
               alt="Farol modificado com Máscara Negra em Florianópolis" 
               fill 
               className="object-cover border-r-4 border-b-4 border-primary/20 grayscale hover:grayscale-0 transition-all duration-700"
               priority
             />
             <div className="absolute -bottom-16 -right-16 w-3/4 h-1/2 border border-white/10 bg-black overflow-hidden z-20 hover:scale-110 transition-transform duration-700 shadow-[0_0_50px_rgba(0,0,0,0.8)] mix-blend-luminosity hover:mix-blend-normal">
                <Image 
                  src="/images/mascaranegra/mascaranegra2.jpeg" 
                  alt="Detalhe pintura interna máscara negra" 
                  fill 
                  className="object-cover"
                />
             </div>
          </div>
        </div>

        {/* Layer 2: Conteúdo de Tensão Extrema (90/10 Ratio na Direita) */}
        <div className="relative z-20 w-full flex justify-start md:justify-end">
          <div className="max-w-3xl text-left md:text-right">
            <div className="inline-flex items-center justify-end space-x-3 mb-6 w-full">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Agressividade & Estética</span>
              <span className="h-[2px] w-16 bg-primary"></span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-black text-white uppercase tracking-tighter leading-[0.9] mb-6 mix-blend-difference">
              Máscara <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-transparent" style={{ WebkitTextStroke: '1px white' }}>Negra</span> <br/>
              <span className="text-3xl md:text-5xl text-white/50 lowercase tracking-normal font-sans font-light">em Florianópolis.</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90 border-l-4 md:border-l-0 md:border-r-4 border-primary pl-6 md:pl-0 md:pr-6 md:ml-auto max-w-xl">
              Personalização Exclusiva e <strong className="text-white">Visual Esportivo</strong> autêntico.
            </p>
            
            <p className="mt-8 text-lg font-sans text-white/60 leading-relaxed ml-auto max-w-xl pl-8">
              Quer dar um visual mais agressivo e sofisticado ao seu veículo sem perder a originalidade? A Máscara Negra é um dos serviços de customização mais procurados por quem deseja destacar as linhas do carro, conferindo um aspecto esportivo e "premium" que os modelos de entrada simplesmente não possuem.
            </p>
          </div>
        </div>
      </section>

      {/* 2. O QUE É? (Brutal Typography Bloc) */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-5/12 sticky top-32">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-6">
              O que é a<br/>
              <span className="text-primary italic border-b-2 border-primary pb-2">Máscara Negra</span><br/>
              Profissional?
            </h2>
            <div className="w-16 h-16 bg-white/5 flex items-center justify-center border border-white/10 mt-12 animate-pulse hidden lg:flex">
              <svg className="w-8 h-8 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          
          <div className="lg:w-7/12 space-y-12">
            <div className="bg-[#050505] border border-white/10 p-10 hover:border-primary/30 transition-colors duration-500 relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-700"></div>
               <p className="text-lg text-white/70 leading-relaxed font-light">
                 A customização consiste na <strong className="text-white">abertura técnica</strong> do conjunto ótico para a pintura minuciosa das molduras internas (partes não refletivas) em tons de preto fosco, acetinado ou o requintado <i>Black Piano</i>.
               </p>
            </div>

            <div className="bg-[#050505] p-10 border-l-4 border-primary relative">
               <p className="text-lg text-white/80 leading-relaxed font-light relative z-10">
                 Diferente de soluções amadoras, fitas ou "sprays" aplicados por fora, o nosso processo é interno e definitivo. Pintamos <strong className="text-primary uppercase tracking-widest text-sm mx-1">apenas as partes estéticas</strong>, mantendo os copos refletores absolutamente intactos para que o alcance e a segurança da sua luz noturna não sejam prejudicados.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIFERENCIAIS (Continuous Stream Layering) */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 bg-[#020202] relative border-b border-white/5">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter mix-blend-difference mb-6">
            Diferenciais da Nossa <br/>Customização
          </h2>
          <p className="text-xl max-w-2xl text-white/60 font-light border-l border-white/20 pl-6">
            Muitos proprietários em SC hesitam em abrir o farol por medo de infiltrações. Veja por que o nosso método técnico é superior:
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          <div className="group relative border border-white/5 bg-[#080808] p-10 lg:p-14 overflow-hidden transition-all duration-500 hover:border-white/20">
            <div className="text-5xl font-heading font-black text-white/5 absolute -bottom-4 right-4 group-hover:-translate-y-4 transition-transform duration-700">01</div>
            <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-4">Desmontagem Técnica</h3>
            <p className="text-white/60 leading-relaxed font-light z-10 relative">
              Utilizamos estufas de temperatura controlada para amolecer a cola original sem deformar ou ressecar a carcaça plástica estrutural do farol. Respeito total pela peça original.
            </p>
          </div>

          <div className="group relative border border-white/5 bg-[#080808] p-10 lg:p-14 overflow-hidden transition-all duration-500 hover:border-white/20">
            <div className="text-5xl font-heading font-black text-white/5 absolute -bottom-4 right-4 group-hover:-translate-y-4 transition-transform duration-700">02</div>
            <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-4">Tintas Alta Temperatura</h3>
            <p className="text-white/60 leading-relaxed font-light z-10 relative">
              Empregamos pigmentos resistentes ao calor gerado pelas lâmpadas, evitando que a pintura descasque ou solte gases tóxicos que acabam embaçando a lente por dentro com o tempo.
            </p>
          </div>

          <div className="group relative border border-primary/20 bg-[#0a0a00] p-10 lg:p-14 overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-[0_0_30px_rgba(245,231,32,0.1)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-2xl rounded-full"></div>
            <div className="text-5xl font-heading font-black text-primary/10 absolute -bottom-4 right-4 group-hover:-translate-y-4 transition-transform duration-700">03</div>
            <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-4">Vedação Hidrofóbica</h3>
            <p className="text-white/80 leading-relaxed font-light z-10 relative">
              Utilizamos selantes de poliuretano (PU) ou colas butílicas de rigoroso padrão OEM (original de fábrica). O farol é lacrado, ficando 100% estanque contra a umidade excessiva e a maresia intrínseca de Florianópolis.
            </p>
          </div>

          <div className="group relative border border-white/5 bg-[#080808] p-10 lg:p-14 overflow-hidden transition-all duration-500 hover:border-white/20">
            <div className="text-5xl font-heading font-black text-white/5 absolute -bottom-4 right-4 group-hover:-translate-y-4 transition-transform duration-700">04</div>
            <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-4">Acabamento <span className="text-primary">Custom</span></h3>
            <p className="text-white/60 leading-relaxed font-light z-10 relative">
              Você comanda a estética. É possível escolher entre o visual furtivo e agressivo estilo <i className="text-white">Stealth</i> (Preto Fosco) ou o luxo do brilho espelhado e profundo do <i className="text-white">Black Piano</i>.
            </p>
          </div>

        </div>
      </section>

      {/* 4. VALUE PROPOSITION (Typography vs Negative Space) */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter">
                Por que customizar seus faróis<br/> com <span className="text-primary">Especialistas?</span>
              </h2>
              <p className="text-lg text-white/50 font-light max-w-lg leading-relaxed mb-8">
                Trabalhar com faróis modernos exige imenso conhecimento em eletrônica e montagem pneumática. Ao realizar a Máscara Negra conosco na Ilha, você garante:
              </p>
            </div>

            <div className="md:w-1/2 w-full grid grid-cols-1 gap-6">
              <div className="bg-[#050505] p-6 border-l border-white/10 hover:border-primary transition-colors flex flex-col justify-center">
                <h4 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-2">Valorização Estética</h4>
                <p className="text-white/60 font-light">O carro ganha uma identidade visual muito mais forte, intimidadora e moderna.</p>
              </div>
              
              <div className="bg-[#050505] p-6 border-l border-white/10 hover:border-primary transition-colors flex flex-col justify-center">
                <h4 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-2">Proteção contra Condensação</h4>
                <p className="text-white/60 font-light">Nossa vedação cirúrgica é extensamente testada para suportar variações severas de temperatura e a umidade crônica do litoral catarinense.</p>
              </div>

              <div className="bg-[#050505] p-6 border-l border-white/10 hover:border-primary transition-colors flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-primary to-transparent"></div>
                <h4 className="text-sm font-bold text-white tracking-[0.2em] uppercase mb-2">O Combo Perfeito:<br/>Combinação com Bi-LED</h4>
                <p className="text-white/60 font-light">A Máscara Negra é o par imbatível para a instalação simultânea de Projetores Bi-LED, criando um conjunto ótico "Full Black" de altíssimo nível estético.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. AUTHORITY CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-white tracking-tight mb-8 max-w-5xl">
          Especialistas em Faróis na <br/>Grande <span className="text-transparent" style={{ WebkitTextStroke: '2px #f5e720'}}>Florianópolis</span>
        </h2>
        
        <p className="text-xl text-white/60 font-light max-w-3xl mb-12 leading-relaxed">
          Seja para um projeto purista <strong className="text-white">JDM</strong>, elegância <strong className="text-white">Eurolook</strong> ou apenas para quebrar o excesso de cromado (chrome delete) do seu carro do dia a dia, nossa equipe entrega cirurgicamente o acabamento perfeito que o seu projeto exige. Atendemos entusiastas criteriosos de toda a região que não abrem mão de qualidade técnica e estética impecável.
        </p>

        <Link 
          href="/contato" 
          className="group relative inline-flex items-center justify-center px-12 py-5 bg-transparent overflow-hidden border-2 border-primary text-primary hover:text-black transition-colors duration-500 font-heading font-bold uppercase tracking-[0.2em] text-sm shadow-[0_0_20px_rgba(245,231,32,0.1)] hover:shadow-[0_0_40px_rgba(245,231,32,0.5)]"
        >
          <span className="absolute inset-0 w-full h-full -translate-x-full bg-primary group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
          <span className="relative z-10 flex items-center">
            Solicitar Orçamento
            <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
        </Link>
      </section>

      {/* 6. FAQ (Structured Data & Trust) */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-3 mb-8">
            <span className="w-6 h-[2px] bg-white/20"></span>
            <span className="text-white/40 font-bold tracking-[0.2em] uppercase text-xs">Informação Direta</span>
          </div>
          <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter mb-12">Perguntas Frequentes (FAQ)</h2>
          
          <div className="space-y-6">
            <div className="bg-black border border-white/5 p-8 transition-colors">
              <h4 className="text-xl font-bold text-white mb-3">1. A Máscara Negra diminui a potência da minha iluminação?</h4>
              <p className="text-white/60 font-light leading-relaxed">Não, em hipótese alguma. Nós mascaramos e pintamos apenas as molduras externas e acabamentos plásticos que **não fazem parte do sistema ótico de reflexão** (copos) da lâmpada. A segurança da sua iluminação permanece a mesma de fábrica.</p>
            </div>
            
            <div className="bg-black border border-white/5 p-8 transition-colors">
              <h4 className="text-xl font-bold text-white mb-3">2. O farol corre o risco de entrar água ou suar por dentro?</h4>
              <p className="text-white/60 font-light leading-relaxed">Não com o nosso método. Utilizamos vedação gabaritada e profissional com colas de butil específicas para faróis (padrão automotivo), garantindo absolutamente que o conjunto continue lacrado contra chuva forte, lavagens sob pressão e umidade externa.</p>
            </div>

            <div className="bg-black border border-white/5 p-8 transition-colors">
              <h4 className="text-xl font-bold text-white mb-3">3. Quanto tempo leva o serviço?</h4>
              <p className="text-white/60 font-light leading-relaxed">Devido ao tempo necessário de estufa, preparo de superfície, tempo de secagem total da tinta (flash-off) e dezenas de horas para cura estanque da nova vedação hermética, o processo responsável geralmente leva de 1 a 2 dias úteis de internação do veículo.</p>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
