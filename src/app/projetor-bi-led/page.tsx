import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Instalação de Projetor Bi-LED em Florianópolis | Pagani Custom Floripa',
  description: 'Farol fraco e sem foco? Descubra como deixar o farol do seu carro mais forte com a instalação de Projetores Bi-LED em Florianópolis. Muito superior às lâmpadas de LED comuns.',
  keywords: [
    'projetor biled', 
    'instalacao projetor biled', 
    'farol fraco solucao', 
    'melhorar farol carro', 
    'projetor led farol', 
    'iluminação automotiva florianopolis', 
    'pagani custom floripa'
  ],
};

export default function ProjetorBiLEDUpgradePage() {
  const whatsappNumber = "554832495596";
  const whatsappMsg = encodeURIComponent("Quero melhorar a iluminação do meu carro com Projetor Bi-LED. Como funciona?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <article className="bg-[#030303] min-h-screen font-sans text-white/90 overflow-hidden">
      
      {/* 1. HERO BRUTALISTA PREMIUM */}
      <section className="relative w-full flex flex-col justify-end pt-12 pb-16 md:pb-24 md:min-h-[85vh] px-4 sm:px-6 lg:px-12 border-b border-white/10">
        
        {/* Fundo Tipográfico Gigante */}
        <div className="absolute top-10 right-0 w-full overflow-hidden select-none pointer-events-none opacity-[0.03] z-0 flex justify-end">
          <div aria-hidden="true" className="text-[12vw] leading-none font-heading font-black whitespace-nowrap outline-text text-transparent text-right" style={{ WebkitTextStroke: '2px white' }}>
            BI-LED UPGRADE
          </div>
        </div>

        {/* Imagem de Fundo/Lateral */}
        <div className="absolute top-24 left-0 w-[80vw] lg:w-[45vw] h-[70vh] z-10 hidden md:block">
          <div className="relative w-full h-full shadow-[0_0_80px_rgba(0,0,0,0.95)]">
            <Image 
              src="/images/projetorbiled.jpeg" 
              alt="Instalação de Projetor Bi-LED de alta performance na Pagani Custom" 
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
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Alta Performance Ótica</span>
              <span className="h-[2px] w-16 bg-primary"></span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-heading font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
              Farol Fraco ou <br className="hidden lg:block"/>
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Sem Foco?</span> <br/>
              <span className="text-primary">Descubra a Solução Definitiva</span> <br className="hidden lg:block"/>
              para Iluminação Automotiva.
            </h1>
            
            <p className="text-lg md:text-xl font-light leading-relaxed text-white/80 border-l-4 md:border-l-0 md:border-r-4 border-primary pl-6 md:pl-0 md:pr-6 md:ml-auto max-w-xl">
              Você já se pegou pesquisando &quot;como deixar meu farol mais forte&quot; ou &quot;solução para farol fraco&quot; depois de pegar a estrada à noite e não enxergar nada? Se você apenas colocar uma lâmpada de LED super forte no seu farol original, a luz vai espalhar, ofuscar quem vem no sentido contrário e você continuará sem enxergar o chão. A solução profissional para isso chama-se <strong>Projetor Bi-LED</strong>.
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

      {/* 2. O QUE É E VANTAGENS */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* O que é Projetor Bi-LED */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center space-x-2">
              <span className="h-[1px] w-8 bg-primary"></span>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Foco Inteligente</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tighter">
              O que é o Projetor Bi-LED <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>e por que ele é a melhor</span> <br/>
              solução para o seu carro?
            </h2>

            <p className="text-lg text-white/70 font-light leading-relaxed">
              Diferente da lâmpada de LED comum, o <strong>Projetor Bi-LED</strong> possui uma lente ótica própria que projeta e foca 100% da luz no asfalto. Ele cria uma &quot;linha de corte&quot; perfeita: ilumina a estrada com máxima intensidade lateral e frontal, mas corta a luz na altura exata para não cegar os motoristas no sentido oposto.
            </p>

            <div className="bg-[#050505] p-6 border-l-2 border-primary font-light text-white/80">
              <p>
                O sistema conta com um solenoide eletrônico interno que faz a alternância instantânea entre farol baixo e farol alto usando o mesmo chip emissor de luz, garantindo reações imediatas na estrada.
              </p>
            </div>
          </div>

          {/* Vantagens */}
          <div className="lg:col-span-6">
            <div className="bg-[#080808] border border-white/10 p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary/20 group-hover:border-primary transition-colors duration-500"></div>
              
              <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-8">
                Vantagens de instalar o Projetor Bi-LED:
              </h3>

              <ul className="space-y-6">
                <li className="flex items-start pb-6 border-b border-white/5">
                  <span className="text-primary font-heading font-bold text-xl mr-4">01.</span>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider">Aplicável em todos os veículos</h4>
                    <p className="text-white/60 text-sm mt-1">Pode ser adaptado em praticamente qualquer farol nacional ou importado de parábola simples ou dupla.</p>
                  </div>
                </li>
                <li className="flex items-start pb-6 border-b border-white/5">
                  <span className="text-primary font-heading font-bold text-xl mr-4">02.</span>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider">Segurança Extrema</h4>
                    <p className="text-white/60 text-sm mt-1">Aumenta em até 4x a visibilidade e o alcance em rodovias escuras, com chuva intensa ou neblina.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-heading font-bold text-xl mr-4">03.</span>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider">Estética Premium e Moderna</h4>
                    <p className="text-white/60 text-sm mt-1">Deixa o conjunto ótico do seu carro com visual imponente de veículos importados de última geração.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PARÁBOLA SIMPLES VS PROJETOR BI-LED */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Imagem da Peça Bi-LED */}
            <div className="relative h-[400px] lg:h-[550px] w-full bg-zinc-900 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
              <Image 
                src="/images/pecabiled.jpeg"
                alt="Peça e Projetor Bi-LED premium desmontados para instalação personalizada"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-black/80 px-4 py-2 border-l-2 border-primary backdrop-blur-sm">
                <p className="text-xs uppercase tracking-widest font-heading font-bold text-white">Componente Premium Ótico · Pagani Custom</p>
              </div>
            </div>

            {/* Comparativo de Lâmpadas normais */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2">
                <span className="h-[1px] w-8 bg-primary"></span>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Por que não usar lâmpadas normais?</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter leading-none">
                &quot;Posso só colocar <br/>
                <span className="text-primary">uma lâmpada de LED</span> <br/>
                mais forte no farol?&quot;
              </h2>

              <p className="text-lg text-white/80 font-light leading-relaxed">
                Não recomendamos essa prática. Colocar lâmpadas superfortes de LED em faróis de parábola simples (sem projetor) apenas gera um espalhamento descontrolado da luz. O resultado? Você continua sem foco real no chão e acaba cegando os outros motoristas, o que é passível de multas e falhas em vistorias.
              </p>

              <p className="text-base text-white/60 font-light">
                O Projetor Bi-LED atua como um sistema completo de reestruturação do farol: ele substitui o defletor interno do farol por um bloco ótico autônomo com foco colimado, entregando potência, precisão extrema e design moderno dentro das normas vigentes de trânsito.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3.5 CROSS-SELLING: CONSERTO DRL AMARELADO AUDI/VW */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#080808] border-t border-b border-white/5 text-center flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-primary font-heading font-bold uppercase tracking-widest text-xs">Estética e Valorização</span>
          <h3 className="text-2xl md:text-3xl font-heading font-black uppercase text-white tracking-tight leading-tight">
            O DRL em LED do seu Audi, VW ou BMW está amarelado, fraco ou apagado?
          </h3>
          <p className="text-white/60 font-light max-w-2xl mx-auto text-base">
            Somos especialistas no conserto do DRL amarelado de veículos premium. Aproveite o retrofit de iluminação para corrigir esse defeito crônico estético.
          </p>
          <div className="pt-4">
            <Link 
              href="/conserto-drl-amarelado/" 
              className="text-white hover:text-primary transition-colors font-heading font-bold uppercase tracking-wider text-sm border-b border-white hover:border-primary pb-2"
            >
              Conheça nosso Serviço de Recuperação de DRL →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FOOTER / CTA PRINCIPAL */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black border-t border-white/10 text-center flex flex-col items-center justify-center relative">
        
        {/* Imagem do Galpão de Fundo Sutil */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none">
          <Image 
            src="/images/Logo_on_wall_and_uniform_202605122312.jpeg"
            alt="Oficina Pagani Custom em Florianópolis"
            fill
            className="object-cover"
          />
        </div>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-white tracking-tight mb-6 max-w-5xl relative z-10">
          Chega de farol fraco. <br className="sm:hidden"/>
          Valorize seu carro com <span className="text-primary">Projetor Bi-LED</span>
        </h2>
        
        <p className="text-xl text-white/60 font-light max-w-2xl mb-12 leading-relaxed relative z-10">
          Transforme sua visibilidade ao dirigir à noite com precisão absoluta. Atendemos toda a Grande Florianópolis com profissionais especialistas em Retrofit Ótico Premium.
        </p>

        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-12 py-6 bg-transparent overflow-hidden border-2 border-primary text-primary hover:text-black transition-colors duration-500 font-heading font-bold uppercase tracking-[0.2em] text-lg shadow-[0_0_30px_rgba(245,231,32,0.15)] hover:shadow-[0_0_50px_rgba(245,231,32,0.4)] relative z-10"
        >
          <span className="absolute inset-0 w-full h-full -translate-x-full bg-primary group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
          <span className="relative z-10 flex items-center">
            💬 Melhorar Farol com Bi-LED
            <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
        </a>
      </section>

      {/* Schemas JSON-LD para SEO local e FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "AutoRepair",
                "@id": "https://paganicustomfloripa.com.br/#localbusiness",
                "name": "Pagani Custom Floripa",
                "image": "https://paganicustomfloripa.com.br/images/logo.png",
                "telePhone": "+554832495596",
                "url": "https://paganicustomfloripa.com.br",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "R. Marcelino Cândido Machado, 79",
                  "addressLocality": "Florianópolis",
                  "addressRegion": "SC",
                  "postalCode": "88048-005",
                  "addressCountry": "BR"
                },
                "areaServed": {
                  "@type": "AdministrativeArea",
                  "name": "Florianópolis"
                }
              },
              {
                "@type": "Service",
                "name": "Instalação de Projetor Bi-LED e Retrofit Ótico",
                "provider": {
                  "@type": "AutoRepair",
                  "name": "Pagani Custom Floripa"
                },
                "areaServed": "Florianópolis, SC",
                "description": "Upgrade de iluminação automotiva de alta performance com a instalação de projetores Bi-LED no farol. Solução definitiva contra faróis fracos e sem foco em Florianópolis."
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Farol fraco de lâmpada comum tem solução?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sim! O upgrade e instalação de Projetores Bi-LED é a solução definitiva mais eficiente, pois foca 100% da luz no chão de forma linear, garantindo alcance e potência sem espalhar a iluminação."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "A instalação de Projetor Bi-LED altera a estética do carro?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sim. Além de multiplicar a eficiência de iluminação por 4x, o visual óptico do carro fica moderno e sofisticado, similar ao conjunto óptico de veículos de luxo importados."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Projetor Bi-LED causa ofuscamento em outros motoristas?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Não. Ao contrário de lâmpadas de LED genéricas instaladas em faróis comuns, o projetor Bi-LED conta com lente específica e chapa de linha de corte que foca a luz para baixo dos retrovisores dos outros motoristas."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "DRL amarelado do Audi tem conserto?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sim! A Pagani Custom é especialista no conserto e recuperação de DRL de LED amarelado ou fraco de Audi, VW e BMW em Florianópolis, restaurando a cor branca original de fábrica com chips de alta durabilidade."
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
