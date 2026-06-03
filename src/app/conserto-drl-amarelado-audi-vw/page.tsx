import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conserto de DRL Amarelado Audi, VW e BMW | Pagani Custom Floripa',
  description: 'O DRL do seu Audi, VW ou BMW está amarelado ou fraco? Somos especialistas na recuperação e conserto de DRL de veículos premium em Florianópolis. Agende uma avaliação.',
  keywords: ['conserto drl amarelado', 'drl audi amarelado', 'drl vw amarelado', 'recuperacao drl bmw', 'drl fraco', 'iluminação automotiva florianopolis', 'pagani custom'],
};

export default function DRLAmareladoPage() {
  const whatsappNumber = "554832495596";
  const whatsappMsg = encodeURIComponent("Meu DRL está amarelado. Quero um orçamento para o meu carro!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <article className="bg-[#030303] min-h-screen font-sans text-white/90 overflow-hidden">
      
      {/* 1. HERO BRUTALISTA PREMIUM */}
      <section className="relative w-full flex flex-col justify-end pt-12 pb-16 md:pb-24 md:min-h-[85vh] px-4 sm:px-6 lg:px-12 border-b border-white/10">
        
        {/* Fundo Tipográfico Gigante */}
        <div className="absolute top-10 right-0 w-full overflow-hidden select-none pointer-events-none opacity-[0.03] z-0 flex justify-end">
          <div aria-hidden="true" className="text-[12vw] leading-none font-heading font-black whitespace-nowrap outline-text text-transparent text-right" style={{ WebkitTextStroke: '2px white' }}>
            DRL FIX PREMIUM
          </div>
        </div>

        {/* Imagem de Fundo/Lateral */}
        <div className="absolute top-24 left-0 w-[80vw] lg:w-[45vw] h-[70vh] z-10 hidden md:block">
          <div className="relative w-full h-full shadow-[0_0_80px_rgba(0,0,0,0.95)]">
            <Image 
              src="/images/drl.jpeg" 
              alt="Assinatura DRL em LED personalizada premium Pagani Custom" 
              fill 
              className="object-cover border-r border-b border-primary/20 grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#030303]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Conteúdo à Direita */}
        <div className="relative z-20 w-full flex justify-start md:justify-end">
          <div className="max-w-3xl text-left md:text-right">
            <div className="inline-flex items-center justify-end space-x-3 mb-6 w-full">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Recuperação Ótica Premium</span>
              <span className="h-[2px] w-16 bg-primary"></span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-heading font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
              DRL Amarelado <br className="hidden lg:block"/>
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>ou Queimado?</span> <br/>
              <span className="text-primary">Resolvemos o Defeito</span> <br className="hidden lg:block"/>
              <span className="text-primary">Crônico</span> do seu Farol.
            </h1>
            
            <p className="text-lg md:text-xl font-light leading-relaxed text-white/80 border-l-4 md:border-l-0 md:border-r-4 border-primary pl-6 md:pl-0 md:pr-6 md:ml-auto max-w-xl">
              Se você é dono de um Audi, Volkswagen, BMW, ou até mesmo modelos como Fiat Toro e Peugeot 208, talvez já tenha notado um problema frustrante: o DRL (luz de condução diurna) começa a ficar amarelado, perde a força ou apaga de vez. Isso não é mau uso, é um defeito crônico comum nesses sistemas de iluminação originais.
            </p>

            <div className="mt-10 flex justify-start md:justify-end">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-primary text-black font-heading font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 transform -skew-x-12"
              >
                <span className="block skew-x-12">💬 Falar com Especialista no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAUSA DO PROBLEMA E MODELOS AFETADOS */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Box de Causa */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center space-x-2">
              <span className="h-[1px] w-8 bg-primary"></span>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Por que acontece?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tighter">
              Por que o DRL do Audi <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>(e outros modelos)</span> <br/>
              fica amarelo?
            </h2>

            <p className="text-lg text-white/70 font-light leading-relaxed">
              O amarelamento ocorre devido ao superaquecimento dos LEDs originais e à degradação do tubo de acrílico condutor de luz dentro do farol. Com o tempo, essa peça queima e bloqueia a passagem da luz branca, deixando o visual do seu carro envelhecido e desvalorizado.
            </p>

            <div className="bg-[#050505] p-6 border-l-2 border-primary font-light text-white/80">
              <p>
                Ignorar este problema pode fundir o acrílico condutor de luz permanentemente, exigindo reparos muito mais complexos ou até inviabilizando a recuperação estética do conjunto original.
              </p>
            </div>
          </div>

          {/* Modelos Afetados */}
          <div className="lg:col-span-6">
            <div className="bg-[#080808] border border-white/10 p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary/20 group-hover:border-primary transition-colors duration-500"></div>
              
              <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-8">
                Modelos que mais apresentam esse problema:
              </h3>

              <ul className="space-y-6">
                <li className="flex items-start pb-6 border-b border-white/5">
                  <span className="text-primary font-heading font-bold text-xl mr-4">01.</span>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider">Linha Audi</h4>
                    <p className="text-white/60 text-sm mt-1">A3, Q3, Q5, entre outros (Ocorrência altíssima nos faróis originais Xenon e LED).</p>
                  </div>
                </li>
                <li className="flex items-start pb-6 border-b border-white/5">
                  <span className="text-primary font-heading font-bold text-xl mr-4">02.</span>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider">Volkswagen & BMW</h4>
                    <p className="text-white/60 text-sm mt-1">Diversos modelos equipados com assinatura em LED DRL de fábrica.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-heading font-bold text-xl mr-4">03.</span>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider">Outros Veículos</h4>
                    <p className="text-white/60 text-sm mt-1">Frequente também na linha Fiat Toro, Peugeot 208 e SUVs médios.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. A SOLUÇÃO DEFINITIVA */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Imagem do Galpão / Trabalho Real */}
            <div className="relative h-[400px] lg:h-[550px] w-full bg-zinc-900 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
              <Image 
                src="/images/Logo_on_wall_and_uniform_202605122312.jpeg"
                alt="Galpão e Oficina Pagani Custom Floripa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-black/80 px-4 py-2 border-l-2 border-primary backdrop-blur-sm">
                <p className="text-xs uppercase tracking-widest font-heading font-bold text-white">Laboratório de Iluminação · Pagani Custom</p>
              </div>
            </div>

            {/* Texto da Solução */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2">
                <span className="h-[1px] w-8 bg-primary"></span>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Precisão Cirúrgica</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter leading-none">
                A Solução Definitiva <br/>
                <span className="text-primary">sem precisar trocar</span> <br/>
                o farol inteiro
              </h2>

              <p className="text-lg text-white/80 font-light leading-relaxed">
                Muitas concessionárias recomendam a troca completa do farol, o que custa uma fortuna. Na <strong>Pagani Custom</strong>, nós abrimos o farol com maquinário específico, substituímos os LEDs danificados por chips de alta durabilidade e trocamos/recuperamos o condutor acrílico. Seu DRL volta a ter a cor branca original e a potência de fábrica.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-black/50 p-6 border-l border-white/10 hover:border-primary transition-colors">
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Economia Extrema</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Evite gastar milhares de reais em um farol novo na concessionária. A restauração entrega o mesmo resultado visual.</p>
                </div>
                <div className="bg-black/50 p-6 border-l border-white/10 hover:border-primary transition-colors">
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Componentes de Elite</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Substituição por chips de LED com dissipação térmica aprimorada, evitando reincidências de queima.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOOTER / CTA PRINCIPAL */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black border-t border-white/10 text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-white tracking-tight mb-6 max-w-5xl">
          Recupere a Estética e Valor do seu <span className="text-primary">Premium</span>
        </h2>
        
        <p className="text-xl text-white/60 font-light max-w-2xl mb-12 leading-relaxed">
          Atendemos toda a Grande Florianópolis com técnicas homologadas de abertura e vedação hidrofóbica à prova de maresia. Garantia completa de estanqueidade.
        </p>

        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-12 py-6 bg-transparent overflow-hidden border-2 border-primary text-primary hover:text-black transition-colors duration-500 font-heading font-bold uppercase tracking-[0.2em] text-lg shadow-[0_0_30px_rgba(245,231,32,0.15)] hover:shadow-[0_0_50px_rgba(245,231,32,0.4)]"
        >
          <span className="absolute inset-0 w-full h-full -translate-x-full bg-primary group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
          <span className="relative z-10 flex items-center">
            💬 Obter Orçamento de DRL
            <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
        </a>
      </section>

      {/* Schema JSON-LD para SEO local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Conserto e Recuperação de DRL de Farol Automotivo",
                "provider": {
                  "@type": "AutoRepair",
                  "name": "Pagani Custom Floripa",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "R. Marcelino Cândido Machado, 79",
                    "addressLocality": "Florianópolis",
                    "addressRegion": "SC",
                    "postalCode": "88048-005",
                    "addressCountry": "BR"
                  }
                },
                "areaServed": "Florianópolis, SC",
                "description": "Especialistas em conserto de DRL de LED amarelado ou queimado de Audi, VW, BMW, Fiat Toro e Peugeot 208 em Florianópolis com substituição de chips de alta durabilidade."
              }
            ]
          })
        }}
      />
    </article>
  );
}
