import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Instalação de DRL em Florianópolis | Luz Diurna e Seta Sequencial',
  description: 'Instale DRL no seu carro em Florianópolis. Mais segurança em rodovias e um visual moderno com LED Dual Color e seta sequencial. Solicite orçamento!',
};

export default function DrlPage() {
  return (
    <article className="bg-[#040404] min-h-screen font-sans text-white/80 overflow-hidden pt-20">
      
      {/* 1. HERO BRUTALISTA LINEAR */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-12">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

        {/* Tipografia de Fundo */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden select-none pointer-events-none opacity-[0.02] z-0">
           <div aria-hidden="true" className="text-[20vw] leading-none font-heading font-black whitespace-nowrap outline-text text-transparent" style={{ WebkitTextStroke: '3px white' }}>
             DAYTIME RUNNING LIGHT
           </div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center space-x-4 mb-8">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">Assinatura Luminosa</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 mix-blend-difference">
              Instalação de <span className="text-transparent" style={{ WebkitTextStroke: '2px #f5e720' }}>DRL</span><br/>
              <span className="text-3xl md:text-5xl text-white/50 lowercase tracking-normal font-sans font-light block mt-4">em Florianópolis.</span>
            </h1>
            
            <p className="text-2xl font-light leading-relaxed text-white/90 mb-6">
              Luz de Rodagem Diurna e <strong className="text-white">Estilo Exclusivo</strong>.
            </p>
            
            <p className="text-lg font-sans text-white/60 leading-relaxed border-l border-white/20 pl-6">
              A Luz de Rodagem Diurna (DRL) deixou de ser um item exclusivo de carros de luxo para se tornar um componente essencial de segurança e design automotivo. Em Florianópolis, onde as condições climáticas mudam rapidamente e o tráfego em rodovias estaduais e federais é constante, ter um sistema de DRL eficiente é sinônimo de visibilidade e conformidade com a legislação.
            </p>
          </div>

          <div className="relative min-h-[50vh] lg:min-h-full flex flex-col justify-center group perspective-1000">
             {/* 
               CAMPO MONTADO PARA A IMAGEM 
               Quando o usuário tiver a foto, basta substituir esta div abaixo pelo formato padrão do Next.js:
               <Image src="/images/sua-foto.jpg" alt="..." fill className="object-cover" />
             */}
             <div className="w-full h-[60vh] bg-[#0a0a0a] border border-white/10 relative overflow-hidden transition-all duration-700 transform group-hover:rotate-y-[-5deg] group-hover:shadow-[0_0_50px_rgba(255,245,32,0.1)]">
                <Image 
                  src="/images/drl.jpeg" 
                  alt="Instalação de DRL Pagani Custom Floripa" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             </div>
          </div>
          
        </div>
      </section>

      {/* 2. O QUE É DRL? */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter mb-8 leading-none">
              O que é o <span className="text-primary">DRL</span> <br/>e por que instalar no seu carro?
            </h2>
            <div className="p-8 border border-white/10 bg-[#050505] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
               <p className="text-lg text-white/70 font-light leading-relaxed relative z-10">
                 O DRL (<i className="text-white">Daytime Running Light</i>) é um sistema de iluminação frontal que liga automaticamente com a ignição do veículo. Seu objetivo principal não é iluminar a via, mas sim tornar o seu carro <strong className="text-white">instantaneamente mais visível</strong> para pedestres e outros motoristas durante o dia.
               </p>
            </div>
          </div>
          
          <div className="md:w-1/2 flex items-center">
            <p className="text-xl text-white/80 font-light leading-relaxed">
              Além do indiscutível fator segurança, a instalação de fitas de LED <span className="text-primary font-bold">Dual Color</span> ou módulos DRL integrados transforma radicalmente a estética frontal, dando ao seu veículo (como hatches populares tipo VW Polo e Ônix, sedans ou picapes como Fiat Toro e Hilux) um aspecto muito mais moderno e <strong className="text-white">"Premium"</strong>, brutalmente similar aos modelos recém-lançados das grandes montadoras globais.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DIFERENCIAIS DA INSTALAÇÃO (Cards Minimalistas em Linha/Grid) */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 bg-[#020202]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-20 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter mb-6">
              Diferenciais da nossa Instalação
            </h2>
            <p className="text-xl max-w-2xl text-white/60 font-light mx-auto lg:mx-0">
              Não trabalhamos com adaptações frágeis ou fitas de LED superficiais que queimam em poucos meses. Nosso foco em Florianópolis é a qualidade industrial estrutural:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            
            {/* ITEM A */}
            <div className="flex flex-col group">
              <div className="h-[2px] w-full bg-white/10 mb-6 relative">
                 <div className="absolute top-0 left-0 h-full w-0 bg-primary group-hover:w-full transition-all duration-700"></div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-4 flex items-center">
                <span className="text-primary mr-3 text-3xl">•</span> Tecnologia Dual Color (Seta Sequencial)
              </h3>
              <p className="text-white/60 font-light leading-relaxed">
                Instalamos sistemas híbridos que funcionam como luz de posição branca incandescente e, ao acionar a seta, mudam automaticamente para a cor âmbar de forma sequencial (efeito dinâmico varrido), garantindo um visual europeu exclusivo.
              </p>
            </div>

            {/* ITEM B */}
            <div className="flex flex-col group">
              <div className="h-[2px] w-full bg-white/10 mb-6 relative">
                 <div className="absolute top-0 left-0 h-full w-0 bg-primary group-hover:w-full transition-all duration-700"></div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-4 flex items-center">
                <span className="text-primary mr-3 text-3xl">•</span> Integração Elétrica Segura
              </h3>
              <p className="text-white/60 font-light leading-relaxed">
                Repudiamos o amadorismo. Utilizamos chicotes independentes e relés de proteção dimensionados para que a instalação não sobrecarregue em absolutamente nada o sistema elétrico original do seu veículo (ECU/BCM).
              </p>
            </div>

            {/* ITEM C */}
            <div className="flex flex-col group">
              <div className="h-[2px] w-full bg-white/10 mb-6 relative">
                 <div className="absolute top-0 left-0 h-full w-0 bg-primary group-hover:w-full transition-all duration-700"></div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-4 flex items-center">
                <span className="text-primary mr-3 text-3xl">•</span> Resistência Absoluta
              </h3>
              <p className="text-white/60 font-light leading-relaxed">
                Em regiões litorâneas, a vedação é o calcanhar de aquiles. Nossos módulos DRL possuem certificação estrita de resistência à água (IP67+), suportando a umidade severa, maresia e as variações térmicas drásticas do cofre do motor.
              </p>
            </div>

            {/* ITEM D */}
            <div className="flex flex-col group">
              <div className="h-[2px] w-full bg-white/10 mb-6 relative">
                 <div className="absolute top-0 left-0 h-full w-0 bg-primary group-hover:w-full transition-all duration-700"></div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide mb-4 flex items-center">
                <span className="text-primary mr-3 text-3xl">•</span> Acabamento "OEM Look"
              </h3>
              <p className="text-white/60 font-light leading-relaxed">
                Projetamos a estética da instalação de tal forma que o bloco de LED pareça ter vindo inerentemente de fábrica no carro, integrando-o milimetricamente por dentro do farol cirurgicamente ou nos nichos exatos do para-choque frontal.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. LEGISLAÇÃO SC (Authority Info) */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center border border-white/10 p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl"></div>
          
          <h2 className="text-2xl md:text-4xl font-heading font-black text-white uppercase tracking-tighter mb-6">
            O DRL e a <span className="text-primary">Legislação</span> em Rodovias de SC
          </h2>
          
          <p className="text-lg text-white/70 font-light leading-relaxed mb-0">
            Com as constantes atualizações na lei federal do "Farol Aceso em Rodovias", ter um sistema de DRL devidamente instalado, forte e visível <strong className="text-white">regulariza a situação do seu veículo</strong> para circulação diurna lícita em rodovias estaduais e federais (como a Via Expressa, SC-401 e BR-101). Isso poupa estresse, evita multas desnecessárias, e elimina a necessidade de manter o farol baixo (halógeno) torrando o tempo todo, prolongando absurdamente a vida útil das suas lâmpadas principais noturnas.
          </p>
        </div>
      </section>

      {/* 5. CTA EXCLUSIVO */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 bg-[#050505] flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-white tracking-tight mb-8">
          Especialistas em<br/> Iluminação na <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #f5e720' }}>Ilha e Continente</span>
        </h2>
        
        <p className="text-xl text-white/60 font-light max-w-3xl mb-12 leading-relaxed">
          Se você busca transformar o "olhar" do seu carro com fitas de LED de altíssima performance ou módulos integrados, nossa equipe técnica em Florianópolis está pronta para entregar um projeto infalível. Unimos a precisão matemática da engenharia elétrica com o bom gosto refinado da customização automotiva.
        </p>

        <Link 
          href="/contato" 
          className="group relative inline-flex items-center justify-center px-10 py-5 font-heading font-bold uppercase tracking-[0.2em] text-black bg-white hover:bg-primary transition-colors duration-300"
        >
          Transformar Iluminação Diurna
          <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-3 mb-8">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Knowledge Base</span>
          </div>
          <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter mb-12">Perguntas Frequentes (FAQ)</h2>
          
          <div className="grid gap-6">
            <div className="bg-[#030303] border border-white/5 p-8">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                 <span className="text-primary mr-3 font-heading">01</span> O DRL substitui o farol baixo à noite?
              </h4>
              <p className="text-white/60 font-light leading-relaxed pl-10 border-l border-white/10 ml-4 py-2 mt-2">
                Não. O DRL é um sistema técnico exclusivo para o uso diurno de sinalização. À noite, a óptica muda. O sistema deve ser configurado corretamente (por nós) para reduzir drasticamente a intensidade (função dim) ou desligar automaticamente quando o farol principal for acionado, protegendo a sua segurança e impossibilitando o ofuscamento criminoso de outros motoristas.
              </p>
            </div>
            
            <div className="bg-[#030303] border border-white/5 p-8">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                 <span className="text-primary mr-3 font-heading">02</span> A instalação elétrica do DRL corta fios originais do carro?
              </h4>
              <p className="text-white/60 font-light leading-relaxed pl-10 border-l border-white/10 ml-4 py-2 mt-2">
                Nós priorizamos estritamente instalações "Plug & Play" avançadas ou trabalhamos com derivações blindadas super seguras (conectores originais automotivos). Isso preserva ao máximo e de forma inviolável a integridade física do chicote original do seu carro para não comprometer sua garantia ou causar curtos no futuro.
              </p>
            </div>

            <div className="bg-[#030303] border border-white/5 p-8">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                 <span className="text-primary mr-3 font-heading">03</span> O silicone do LED do DRL vai amarelar com o tempo de sol?
              </h4>
              <p className="text-white/60 font-light leading-relaxed pl-10 border-l border-white/10 ml-4 py-2 mt-2">
                Nós trabalhamos única e exclusivamente com componentes de primeira linha mundial (chips de LED robustos de marcas consagradas) e polímeros industriais que possuem dissipação térmica física e eficiência anti-UV natural, varrendo e evitando o "efeito gema de ovo" precoce clássico e vergonhoso presenciado nas fitas de LED de baixa qualidade do mercado livre.
              </p>
            </div>
          </div>
        </div>
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
                "name": "Instalação de DRL (Luz de Rodagem Diurna) e Fita de LED",
                "provider": {
                  "@type": "AutoRepair",
                  "name": "Pagani Custom Floripa"
                },
                "areaServed": "Florianópolis, SC",
                "description": "Instalação profissional de fitas de LED Dual Color (Seta Sequencial) e módulos DRL (Daytime Running Light) com vedação rigorosa e estética premium."
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "O DRL substitui o farol baixo à noite?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Não. O DRL é um sistema exclusivo para uso diurno. À noite, o sistema deve reduzir a intensidade ou desligar ao acionar o farol principal."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "A instalação elétrica do DRL corta fios originais do carro?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nós priorizamos instalações 'Plug & Play' ou derivações blindadas, preservando a integridade física do chicote original do seu carro."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "O silicone da fita de LED do DRL vai amarelar com o sol?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Trabalhamos exclusivamente com polímeros industriais que possuem eficiência anti-UV natural, evitando o amarelamento precoce de fitas de menor qualidade."
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
