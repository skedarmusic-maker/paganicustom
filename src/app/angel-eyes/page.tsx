import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Angel Eyes em Florianópolis | Instalação de Halo Rings Premium',
  description: 'Transforme o visual do seu carro com Angel Eyes em Florianópolis. Instalação profissional, tecnologia LED Crystal e RGB. Acabamento de elite e vedação total!',
};

export default function AngelEyesPage() {
  return (
    <article className="bg-[#020202] min-h-screen font-sans text-white/80 overflow-hidden pt-20">
      
      {/* 1. HERO BRUTALISTA FOCAL (Círculos & Depth) */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-12 border-b border-white/5">
        
        {/* Typographic Ambient */}
        <div className="absolute top-[10%] left-[-5%] w-full overflow-hidden select-none pointer-events-none opacity-[0.03] z-0">
           <div aria-hidden="true" className="text-[18vw] leading-none font-heading font-black whitespace-nowrap outline-text text-transparent transform -rotate-2" style={{ WebkitTextStroke: '2px white' }}>
             HALO RINGS PGN
           </div>
        </div>

        {/* Abstract Light Rings Background */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-primary/10 rounded-full opacity-20 pointer-events-none z-0 transform translate-x-1/3"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] border-[2px] border-primary/20 rounded-full opacity-30 pointer-events-none z-0 transform translate-x-1/3 blur-[2px] animate-pulse"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10 items-center">
          
          <div className="lg:col-span-6 z-20">
            <div className="inline-flex items-center space-x-3 mb-8 bg-black border border-white/10 px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
              <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">Aura Luminosa</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Angel <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-transparent" style={{ WebkitTextStroke: '1px #f5e720' }}>Eyes</span><br/>
              <span className="text-2xl md:text-4xl text-white/50 font-light tracking-wide normal-case mt-4 block">em Florianópolis.</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90 border-l-4 border-primary pl-6 mb-8">
              O Olhar de Elite para o seu Veículo.
            </p>
            
            <p className="text-lg font-sans text-white/60 leading-relaxed max-w-lg">
              Quer transformar a assinatura luminosa do seu carro e conferir a ele um visual de carro de luxo? A instalação de Angel Eyes (anéis de LED) é a customização perfeita para quem busca exclusividade e um "olhar" marcante. Inspirado nos designs icônicos das montadoras alemãs, este upgrade valoriza as linhas do farol e destaca o seu projeto em qualquer lugar da Ilha.
            </p>
          </div>

          <div className="lg:col-span-6 relative flex justify-end h-[50vh] lg:h-[70vh] w-full z-10 group perspective-1000">
             <div className="w-full lg:w-[90%] h-full bg-[#050505] border border-white/10 relative overflow-hidden transition-all duration-700 shadow-[0_0_80px_rgba(245,231,32,0.1)] group-hover:shadow-[0_0_120px_rgba(245,231,32,0.2)] transform group-hover:scale-[1.02]">
                <Image 
                  src="/images/angels.jpg" 
                  alt="Angel Eyes (Halo Rings) Pagani Custom Floripa" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
          </div>
          
        </div>
      </section>

      {/* 2. CONCEITO: O QUE SÃO? */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black relative border-b border-primary/20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-5/12">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-8">
              O que são os<br/>
              <span className="text-primary tracking-widest mt-2 block">Halo Rings?</span>
            </h2>
          </div>
          <div className="lg:w-7/12">
            <p className="text-xl text-white/70 font-light leading-relaxed mb-8">
              Os <strong className="text-white">Angel Eyes</strong> são anéis luminosos instalados ao redor dos projetores ou refletores do farol. Eles funcionam como uma luz de posição (lanterna) extremamente estilizada.
            </p>
            <div className="p-8 border-l border-white/10 bg-[#050505] hover:border-primary transition-colors">
              <p className="text-lg text-white/60 font-light leading-relaxed">
                Diferente dos modelos antigos de CCFL (tubos de gás), trabalhamos hoje com a impressionante tecnologia <strong className="text-white">LED SMD e Crystal</strong>. Elas oferecem uma intensidade luminosa infinitamente superior, com preenchimento total de luz, permitindo que os anéis sejam vistos nitidamente mesmo durante o dia e garantindo durabilidade extrema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPÇÕES DE PERSONALIZAÇÃO (Grid Assimétrico Brutalista) */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 bg-[#020202]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter mix-blend-difference mb-4">
                Personalização <br/><span className="text-white/40">Do Clássico ao RGB</span>
              </h2>
              <p className="text-xl text-white/60 font-light max-w-lg">
                Cada projeto é único. Oferecemos diferentes estilos para combinar com o DNA do seu carro.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-primary font-heading font-bold uppercase tracking-widest text-sm block">4 Variantes</span>
              <span className="text-white/20 font-bold uppercase text-6xl block mt-2">V.04</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#050505] border border-white/5 p-8 transition-colors hover:border-white/30 group">
              <div className="w-12 h-12 rounded-full border-[3px] border-white group-hover:scale-110 transition-transform mb-8"></div>
              <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wide mb-3">White Premium (6000K)</h3>
              <p className="text-white/50 font-light leading-relaxed text-sm">
                O visual clássico e indiscutivelmente sofisticado, com luz branca pura. O padrão do luxo europeu.
              </p>
            </div>

            <div className="bg-black border border-white/5 p-8 transition-colors hover:border-primary group">
              <div className="w-12 h-12 rounded-full border-[3px] border-transparent bg-gradient-to-tr from-red-500 via-green-500 to-blue-500 group-hover:rotate-90 transition-transform duration-700 mb-8 p-1">
                <div className="w-full h-full bg-black rounded-full"></div>
              </div>
              <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wide mb-3">Sistema RGB (Multicolor)</h3>
              <p className="text-white/50 font-light leading-relaxed text-sm">
                Controle total pelo smartphone. Mude a cor dos anéis conforme o evento, com centenas de combinações de cores e efeitos pulsantes.
              </p>
            </div>

            <div className="bg-[#050505] border border-white/5 p-8 transition-colors hover:border-white/30 group">
              <div className="w-12 h-12 border-[3px] border-white/80 group-hover:rotate-45 transition-transform duration-500 mb-8" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
              <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wide mb-3">Design Crystal & Hex</h3>
              <p className="text-white/50 font-light leading-relaxed text-sm">
                Modelos modulares geométricos e lapidados (Hexagonais e em formato 'C') que trazem uma estética agressiva para JDM e esportivos.
              </p>
            </div>

            <div className="bg-black border border-white/5 p-8 transition-colors hover:border-orange-500/50 group">
              <div className="flex space-x-2 mb-8 items-center h-12">
                <div className="w-4 h-10 border-2 border-white rounded-full"></div>
                <div className="w-4 h-10 border-2 border-orange-500 shadow-[0_0_10px_#f97316] rounded-full"></div>
              </div>
              <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wide mb-3">Dual Color (Seta)</h3>
              <p className="text-white/50 font-light leading-relaxed text-sm">
                O anel brilha em branco como lanterna e muda para âmbar (laranja) de forma sincronizada com a seta do veículo.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INSTALAÇÃO & O COMBO (Listas e Citação) */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          
          <div className="lg:w-1/2 space-y-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-black text-white uppercase tracking-tighter mb-8">
                Instalação Profissional:<br/><span className="text-primary italic">Segurança em 1º Lugar</span>
              </h2>
              <p className="text-lg text-white/70 font-light">
                Instalar Angel Eyes exige precisão milimétrica. Somos referência em Florianópolis por resolver os danos que instalações amadoras costumam causar:
              </p>
            </div>
            
            <ul className="space-y-8">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/5 border border-white/20 text-white font-bold mr-6">1</span>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Fixação Mecânica Robusta</h4>
                  <p className="text-white/50 font-light">Utilizamos suportes e travas térmicas que impedem terminantemente que o anel se solte e caia dentro do farol com a trepidação natural das ruas.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/5 border border-white/20 text-white font-bold mr-6">2</span>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Drivers de Proteção</h4>
                  <p className="text-white/50 font-light">Instalamos relés e estabilizadores de tensão blindados que protegem os LEDs contra picos de energia do alternador do carro, evitando queimas precoces.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/5 border border-white/20 text-primary font-bold mr-6">3</span>
                <div>
                  <h4 className="text-primary font-bold uppercase tracking-wider mb-2">Vedação Estanque na Maresia</h4>
                  <p className="text-white/50 font-light">Faróis abertos no litoral precisam de atenção redobrada. Reconstruímos o canal com selantes de padrão original (OEM / Butil) para blindar a peça contra a umidade da Ilha.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="bg-[#050505] p-10 lg:p-14 border border-white/5 relative group hover:border-primary transition-colors duration-500">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-primary to-transparent"></div>
              <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-tight mb-6">
                O Complemento Perfeito
              </h3>
              <p className="text-lg text-white/70 font-light mb-6 leading-relaxed">
                Se você já está planejando a instalação de Projetores Bi-LED ou o serviço de Máscara Negra, <strong className="text-white">o Angel Eye é o toque final obrigatório</strong>.
              </p>
              <p className="text-lg text-white/50 font-light italic border-l-2 border-primary pl-6 py-2">
                "A combinação sinérgica desses três serviços no formato 'Full Custom' transforma de forma absurda a percepção de valor do seu carro nas ruas."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. AUTHORITY & LOCATION */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 bg-[#020202] text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter mb-8 max-w-4xl">
          Customização de Faróis na <br/>Grande <span className="text-primary">Florianópolis</span>
        </h2>
        <p className="text-xl text-white/60 font-light max-w-3xl mb-12 leading-relaxed">
          Seja para um BMW, VW, Honda ou qualquer marca, nossa oficina entrega o acabamento puro que parece ter saído direto da engenharia da linha de montagem. O destino impiedoso para entusiastas que buscam o equilíbrio perfeito entre estética agressiva e confiabilidade técnica rigorosa.
        </p>
        <Link 
          href="/contato" 
          className="group relative inline-flex items-center justify-center px-12 py-5 bg-transparent overflow-hidden border-2 border-white text-white hover:text-black hover:border-primary transition-colors duration-500 font-heading font-bold uppercase tracking-[0.2em] text-sm"
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

      {/* 6. FAQ (Structured Minimalist) */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-3 mb-8">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Informação Técnica</span>
          </div>
          <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter mb-12">Perguntas Frequentes (FAQ)</h2>
          
          <div className="space-y-4">
            <details className="group bg-[#050505] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-white uppercase tracking-wide">
                <span>1. Angel Eye consome muita bateria do carro?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-white/60 font-light mt-4 leading-relaxed group-open:animate-fadeIn">
                Absolutamente não. A altíssima eficiência da tecnologia LED consome uma fração irrisória e mínima de energia em comparação às lâmpadas originais de fábrica pingo (halógenas). Não afeta nem sobrecarrega a vida útil da bateria em momento algum.
              </p>
            </details>
            
            <details className="group bg-[#050505] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-white uppercase tracking-wide">
                <span>2. Posso ser multado por usar Angel Eyes?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-white/60 font-light mt-4 leading-relaxed group-open:animate-fadeIn">
                Quando devidamente configurado (na cor branca regulamentar ou âmbar) e inteligentemente utilizado como circuito de luz de posição, o Angel Eye é amplamente aceito como acessório premium de customização estética, desde que você não anule ou substitua as funções obrigatórias de sinalização noturnas.
              </p>
            </details>

            <details className="group bg-[#050505] border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-white uppercase tracking-wide">
                <span>3. O brilho dos Anéis de LED diminui com o tempo?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-white/60 font-light mt-4 leading-relaxed group-open:animate-fadeIn">
                Pelo contrário. Nós trabalhamos puramente com placas base e chips de altíssima qualidade (SMD/Cob) que possuem dissipação térmica física altamente eficiente através de condutores de alumínio. Mantemos a intensidade gritante do brilho por intermináveis e severos anos de uso contínuo!
              </p>
            </details>
          </div>
        </div>
      </section>

    </article>
  );
}
