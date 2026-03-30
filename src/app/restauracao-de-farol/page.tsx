import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Restauração de Farol em Florianópolis | Brilho e Proteção UV',
  description: 'Devolva a transparência original aos seus faróis. Restauração profissional em Florianópolis com proteção UV contra amarelamento e maresia. Agende agora!',
};

export default function RestauracaoFarolPage() {
  return (
    <article className="bg-[#020202] min-h-screen font-sans text-white/80 overflow-hidden pt-20">
      
      {/* 1. HERO BRUTALISTA DE IMPACTO CRUZADO */}
      <section className="relative w-full min-h-[95vh] flex flex-col justify-center px-4 sm:px-6 lg:px-12 border-b border-white/10">
        
        {/* Typographic Background */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-[0.04] z-0">
           <div aria-hidden="true" className="text-[18vw] leading-none font-heading font-black whitespace-nowrap outline-text text-transparent break-words max-w-full" style={{ WebkitTextStroke: '2px white' }}>
             RESTAURAÇÃO PROFUNDA PGN
           </div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center relative z-10">
          
          <div className="lg:col-span-7 z-20 order-2 lg:order-1 relative">
            <div className="inline-flex items-center space-x-3 mb-6 bg-primary/10 border border-primary/30 px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Proteção UV Extrema</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white uppercase tracking-tighter leading-[0.9] mb-6 mix-blend-difference">
              Restauração <span className="text-primary block mt-2">de Faróis</span>
              <span className="text-xl md:text-3xl text-white/60 font-light tracking-wide normal-case mt-3 block">em Florianópolis</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light max-w-xl leading-relaxed text-white/90 border-l-4 border-primary pl-6">
              Clareza Absoluta e <strong className="text-white">Segurança Original</strong>.
            </p>
            <p className="mt-8 text-lg font-sans text-white/60 max-w-2xl leading-relaxed">
              Seus faróis estão amarelados, craquelados ou com aquela aparência de "lixa" que envelhece o carro e reduz a visibilidade à noite? Em cidades litorâneas como Florianópolis, a combinação de alta incidência de raios UV e a salinidade acelera a degradação do verniz original dos faróis.
            </p>
          </div>

          <div className="lg:col-span-5 relative h-[50vh] lg:h-[70vh] w-full z-10 order-1 lg:order-2 group">
             <div className="w-full h-full border border-white/20 overflow-hidden relative shadow-[0_0_50px_rgba(245,231,32,0.05)] hover:shadow-[0_0_80px_rgba(245,231,32,0.15)]">
               <Image 
                 src="/images/rest%20farol/restauracao%20de%20farol.jpeg" 
                 alt="Processo de Restauração de Farol - Policarbonato" 
                 fill 
                 className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent pointer-events-none"></div>
             </div>
          </div>
          
        </div>
      </section>

      {/* 2. THE PROBLEM (Asymmetric Layout) */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black relative border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 space-y-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tight leading-tight">
              Por que os faróis ficam <span className="text-primary italic">amarelos</span> e foscos?
            </h2>
            <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
              <p>
                A maioria dos faróis modernos é fabricada em <strong className="text-white">policarbonato</strong>, um material resistente a impactos, mas extremamente sensível aos raios solares. Com o tempo, a camada de proteção de fábrica se desgasta, iniciando um violento processo de oxidação.
              </p>
              <p>
                Em Santa Catarina, o clima úmido e o sol intenso fazem com que essa oxidação penetre nos poros do material, criando aquela camada opaca que bloqueia a passagem da luz e pode, inclusive, causar <strong className="text-primary">reprovação em vistorias veiculares</strong>.
              </p>
              <p className="border-l border-white/20 pl-6 text-white/50 italic">
                "Não se trata apenas de um 'polimento de farol' comum. Nossa técnica de restauração profunda devolve a transparência cristalina que o seu carro exige."
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[500px] lg:h-[700px] w-full border border-white/5 bg-[#0a0a0a] group overflow-hidden shadow-2xl flex items-center justify-center">
             <Image 
               src="/images/rest%20farol/restauracao%20de%20farol2.jpeg" 
               alt="Exemplo do resultado final da restauração de um farol - Antes e Depois" 
               fill 
               className="object-contain transition-opacity duration-700"
             />
             <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
             <div className="absolute bottom-6 left-6 bg-black/80 px-6 py-3 border-l-2 border-primary backdrop-blur-sm z-20">
                <span className="text-white text-xs font-heading font-bold uppercase tracking-widest block">Análise Comparativa Pagani</span>
             </div>
          </div>
        </div>
      </section>

      {/* 3. O PROCESSO (Timeline Brutalista) */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-[#050505] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter mix-blend-difference mb-6">
              Nosso Protocolo de <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white/20" style={{ WebkitTextStroke: '1px #f5e720'}}>Restauração</span> Profissional
            </h2>
            <p className="text-xl max-w-2xl text-white/60 font-light">
              Diferente de soluções caseiras místicas que duram poucas semanas, nosso serviço em Florianópolis segue um protocolo técnico e irreversível:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="group relative border border-white/10 bg-black p-8 hover:border-primary/50 transition-colors duration-500 hover:-translate-y-2">
              <div className="text-6xl font-heading font-black text-white/5 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">01</div>
              <h3 className="text-xl font-heading font-bold text-white uppercase mt-12 mb-4">Descontaminação</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Térmica e Química: Remoção completa e agressiva de resíduos, insetos e impurezas incrustadas na superfície do policarbonato.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group relative border border-white/10 bg-black p-8 hover:border-primary/50 transition-colors duration-500 hover:-translate-y-2 lg:translate-y-8">
              <div className="text-6xl font-heading font-black text-white/5 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">02</div>
              <h3 className="text-xl font-heading font-bold text-white uppercase mt-12 mb-4">Lixamento Escalonado</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Sistema Úmido técnico utilizando lixas de altíssima granulometria para nivelar e obliterar toda a camada oxidada sem agredir a lente base.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group relative border border-white/10 bg-black p-8 hover:border-primary/50 transition-colors duration-500 hover:-translate-y-2">
              <div className="text-6xl font-heading font-black text-white/5 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">03</div>
              <h3 className="text-xl font-heading font-bold text-white uppercase mt-12 mb-4">Refino e Lustro</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Polimento e corte final focado na recuperação e espelhamento do brilho especular natural do policarbonato puro.
              </p>
            </div>

            {/* Step 4: The Ultimate */}
            <div className="group relative border-2 border-primary bg-[#050505] p-8 hover:bg-black transition-colors duration-500 hover:-translate-y-2 lg:translate-y-8 overflow-hidden shadow-[0_0_30px_rgba(245,231,32,0.1)]">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/20 blur-xl"></div>
              <div className="text-6xl font-heading font-black text-primary/20 absolute top-4 right-4 group-hover:text-primary/40 transition-colors">04</div>
              <h3 className="text-xl font-heading font-bold text-white uppercase mt-12 mb-4">Proteção UV Longa Duração</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                O passo mais importante. Verniz UV ou Vitrificação que cria um escudo (Coat) impenetrável, garantindo que o farol não amarele precocemente de novo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VANTAGENS (Grid Split Minimalista) */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter sticky top-32">
              Por que <span className="text-primary italic">Restaurar</span> ao em vez de Trocar?
            </h2>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            
            <div className="border-t border-white/20 pt-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Economia Real</h4>
              <p className="text-white/60 font-light">O custo da nossa restauração premium é apenas uma fração minúscula do valor de um farol original novo nas concessionárias.</p>
            </div>
            
            <div className="border-t border-white/20 pt-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Valorização na Revenda</h4>
              <p className="text-white/60 font-light">Os olhos do carro. Faróis novos e brilhantes mascaram a idade do veículo e aumentam seu valor de mercado instantaneamente.</p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Segurança em Dias Chuva</h4>
              <p className="text-white/60 font-light">Essencial para quem trafega pela Via Expressa ou SC-401 sob chuva forte, onde a dispersão correta e limpa da luz é assunto de vida ou morte.</p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Sustentabilidade</h4>
              <p className="text-white/60 font-light">Recupere o policarbonato intacto. Evite o descarte e o consumismo desnecessário de peças plásticas massivas no meio ambiente.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FAQ EXCLUSIVO (GEO Strategy) */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#050505] border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-3 mb-8">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Informação Técnica</span>
          </div>
          <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter mb-12">Perguntas Frequentes (FAQ)</h2>
          
          <div className="space-y-6">
            <div className="bg-black border border-white/5 p-8 hover:border-white/20 transition-colors">
              <h4 className="text-xl font-bold text-white mb-3">1. Quanto tempo dura a restauração?</h4>
              <p className="text-white/60 font-light leading-relaxed">Com a nossa aplicação agressiva de proteção UV/Vitrificação, o resultado de transparência cristalina pode durar de 1 a 2 anos inteiros, dependendo apenas da frequência de exposição contínua do veículo ao sol sem proteção.</p>
            </div>
            
            <div className="bg-black border border-white/5 p-8 hover:border-white/20 transition-colors">
              <h4 className="text-xl font-bold text-white mb-3">2. O serviço remove riscos profundos da lente?</h4>
              <p className="text-white/60 font-light leading-relaxed">Sim, devido ao nosso sistema de lixamento úmido escalonado (técnico), conseguimos nivelar a superfície com segurança para remover a imensa maioria dos riscos superficiais e marcas causadas por detritos de estrada, pedras ou arranhões de lavações incorretas.</p>
            </div>

            <div className="bg-black border border-white/5 p-8 hover:border-white/20 transition-colors">
              <h4 className="text-xl font-bold text-white mb-3">3. Posso fazer o processo em faróis de vidro?</h4>
              <p className="text-white/60 font-light leading-relaxed">Não. Todo este processo químico e abrasivo de correção óptica foi arquitetado exclusivamente para lentes de Policarbonato (plástico automotivo), material que hoje equipa mais de 99% da frota de carros fabricados no mundo moderno.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION FINAL */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 bg-black border-t border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-white tracking-tight mb-8 z-10 relative">
          Recuperação de Faróis na<br/><span className="text-primary mt-2 block">Ilha e Continente</span>
        </h2>
        
        <p className="text-xl text-white/60 font-light max-w-3xl mb-12 leading-relaxed z-10 relative">
          Localizados estrategicamente em Florianópolis, atendemos proprietários de veículos nacionais e importados (projetos ideais para VW Gol, Hyundai HB20, Honda Civic, Toyota Corolla e utilitários) que recusam o amadorismo e buscam o padrão insano de acabamento que as concessionárias e centros de estética premium exigem. Se você busca durabilidade e um serviço técnico de verdade em polimento de farol, sua busca termina exatamente aqui.
        </p>

        <Link 
          href="/contato" 
          className="group relative inline-flex z-10 items-center justify-center px-12 py-6 bg-transparent overflow-hidden border-2 border-primary text-primary hover:text-black transition-colors duration-500 font-heading font-bold uppercase tracking-[0.2em] text-lg shadow-[0_0_30px_rgba(245,231,32,0.1)] hover:shadow-[0_0_50px_rgba(245,231,32,0.5)]"
        >
          <span className="absolute inset-0 w-full h-full -translate-x-full bg-primary group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
          <span className="relative z-10 flex items-center">
            Agendar Restauração
            <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
        </Link>
      </section>

    {/* JSON-LD Structured Data: Service & FAQ */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": "Restauração de Faróis Automotivos e Polimento",
              "provider": {
                "@type": "AutoRepair",
                "name": "Pagani Custom Floripa"
              },
              "areaServed": "Florianópolis, SC",
              "description": "Serviço de restauração profissional de faróis com lixamento úmido escalonado, proteção UV e vitrificação duradoura."
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Quanto tempo dura a restauração?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Com a nossa aplicação agressiva de proteção UV/Vitrificação, o resultado de transparência cristalina pode durar de 1 a 2 anos inteiros."
                  }
                },
                {
                  "@type": "Question",
                  "name": "O serviço remove riscos profundos da lente?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, devido ao nosso sistema de lixamento úmido escalonado, conseguimos nivelar a superfície com segurança para remover a imensa maioria dos riscos superficiais."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Posso fazer o processo em faróis de vidro?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Não. Todo este processo químico e abrasivo foi arquitetado exclusivamente para lentes de Policarbonato."
                  }
                }
              ]
            }
          ]
        })
      }}
    />
    </article>
  );
}
