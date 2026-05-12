import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Proteção de Farol em Florianópolis | PPF e Blindagem Química',
  description: 'Proteja seus faróis contra amarelamento, pedras e oxidação. Soluções definitivas de PPF e proteção de conjunto ótico em Florianópolis. Agende na Pagani Custom!',
};

export default function ProtecaoFarolPage() {
  return (
    <article className="bg-[#020202] min-h-screen font-sans text-white/80 overflow-hidden pt-20">

      {/* 1. HERO BRUTALISTA - PROTEÇÃO DEFINITIVA */}
      <section className="relative w-full min-h-[95vh] flex flex-col justify-center px-4 sm:px-6 lg:px-12 border-b border-white/10">

        {/* Typographic Background */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-[0.04] z-0">
          <div aria-hidden="true" className="text-[18vw] leading-none font-heading font-black whitespace-nowrap outline-text text-transparent break-words max-w-full" style={{ WebkitTextStroke: '2px white' }}>
            PROTEÇÃO TOTAL PGN
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center relative z-10">

          <div className="lg:col-span-7 z-20 order-2 lg:order-1 relative">
            <div className="inline-flex items-center space-x-3 mb-6 bg-primary/10 border border-primary/30 px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Escudo Invisível de Alto Impacto</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white uppercase tracking-tighter leading-[0.9] mb-6 mix-blend-difference">
              Proteção <span className="text-primary block mt-2">de Faróis</span>
              <span className="text-xl md:text-3xl text-white/60 font-light tracking-wide normal-case mt-3 block">Blindagem em Florianópolis</span>
            </h1>

            <p className="text-xl md:text-2xl font-light max-w-xl leading-relaxed text-white/90 border-l-4 border-primary pl-6">
              Protegendo o <strong className="text-white">conjunto ótico</strong> contra o amarelamento e agentes externos de forma definitiva.
            </p>
            <p className="mt-8 text-lg font-sans text-white/60 max-w-2xl leading-relaxed">
              Você já reparou como o sol de Florianópolis e a maresia destroem o verniz dos faróis em tempo recorde? A Pagani Custom Floripa oferece o que há de mais avançado em proteção de lentes, garantindo que a transparência original do seu carro seja preservada por anos, não apenas semanas.
            </p>
          </div>

          <div className="lg:col-span-5 relative h-[50vh] lg:h-[70vh] w-full z-10 order-1 lg:order-2 group">
            <div className="w-full h-full border border-white/20 overflow-hidden relative shadow-[0_0_50px_rgba(245,231,32,0.05)] hover:shadow-[0_0_80px_rgba(245,231,32,0.15)]">
              <Image
                src="/images/protecao-farol.png"
                alt="Proteção de Farol com PPF - Pagani Custom"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. O COMPROMISSO (Asymmetric Layout) */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black relative border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 space-y-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tight leading-tight">
              Compromisso com a <span className="text-primary italic">Perfeição</span>
            </h2>
            <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
              <p>
                Líder em Florianópolis e com avaliação máxima de <strong className="text-white">5.0 estrelas no Google</strong>, a Pagani Custom Floripa é o destino de proprietários que não aceitam o básico.
              </p>
              <p>
                Em nosso centro técnico na Costeira do Pirajubaé, cada projeto é tratado como uma obra de arte única, onde o acabamento impecável é a nossa regra absoluta. A proteção de faróis não é apenas um serviço estético, é uma <strong className="text-primary">preservação de patrimônio</strong>.
              </p>
              <p className="border-l border-white/20 pl-6 text-white/50 italic">
                "Não aplicamos apenas um filme. Entregamos uma blindagem técnica contra as condições extremas do nosso clima litorâneo."
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[500px] lg:h-[700px] w-full border border-white/5 bg-[#0a0a0a] group overflow-hidden shadow-2xl flex items-center justify-center">
            <Image
              src="/images/protecao-farol-detalhe.png"
              alt="Detalhe da proteção de farol Pagani"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 bg-black/80 px-6 py-3 border-l-2 border-primary backdrop-blur-sm z-20">
              <span className="text-white text-xs font-heading font-bold uppercase tracking-widest block">Padrão de Acabamento Pagani</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECNOLOGIAS (Timeline Brutalista) */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-[#050505] border-y border-white/10">
        <div className="max-w-7xl mx-auto">

          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter mix-blend-difference mb-6">
              Nossas Armas contra o <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white/20" style={{ WebkitTextStroke: '1px #f5e720' }}>Desgaste</span> Ótico
            </h2>
            <p className="text-xl max-w-2xl text-white/60 font-light">
              Escolha o nível de blindagem que o seu conjunto ótico merece:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PPF */}
            <div className="group relative border border-white/10 bg-black p-8 hover:border-primary/50 transition-colors duration-500 hover:-translate-y-2">
              <div className="text-6xl font-heading font-black text-white/5 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">01</div>
              <h3 className="text-xl font-heading font-bold text-white uppercase mt-12 mb-4">PPF Ultra Clear</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Filme de poliuretano termoplástico regenerativo. A proteção física definitiva contra pedras de estrada, riscos e 100% dos raios UV.
              </p>
            </div>

            {/* Vitrificação */}
            <div className="group relative border border-white/10 bg-black p-8 hover:border-primary/50 transition-colors duration-500 hover:-translate-y-2 lg:translate-y-8">
              <div className="text-6xl font-heading font-black text-white/5 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">02</div>
              <h3 className="text-xl font-heading font-bold text-white uppercase mt-12 mb-4">Nano Vitrificação 9H</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Camada cerâmica que se funde ao policarbonato, criando uma superfície hidrofóbica extrema que repele sujeira e bloqueia a oxidação química.
              </p>
            </div>

            {/* Selante */}
            <div className="group relative border-2 border-primary bg-[#050505] p-8 hover:bg-black transition-colors duration-500 hover:-translate-y-2 lg:translate-y-16 overflow-hidden shadow-[0_0_30px_rgba(245,231,32,0.1)]">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/20 blur-xl"></div>
              <div className="text-6xl font-heading font-black text-primary/20 absolute top-4 right-4 group-hover:text-primary/40 transition-colors">03</div>
              <h3 className="text-xl font-heading font-bold text-white uppercase mt-12 mb-4">Blindagem de Verniz UV</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Reposição da camada de proteção original com verniz de alta performance, essencial para faróis que acabaram de passar por restauração.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VANTAGENS */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter sticky top-32">
              Por que <span className="text-primary italic">Blindar</span> seus Faróis?
            </h2>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">

            <div className="border-t border-white/20 pt-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Preservação Original</h4>
              <p className="text-white/60 font-light">Mantenha os faróis originais de fábrica sem precisar de lixamentos agressivos no futuro.</p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Resistência a Pedras</h4>
              <p className="text-white/60 font-light">O PPF absorve o impacto de detritos na estrada, evitando trincas e marcas profundas no policarbonato.</p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Fácil Limpeza</h4>
              <p className="text-white/60 font-light">A superfície ultra lisa impede que insetos e contaminação química grudem na lente do farol.</p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Visual Premium</h4>
              <p className="text-white/60 font-light">O conjunto ótico sempre novo transmite uma imagem de cuidado e alto valor para o seu veículo.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION FINAL */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 bg-black border-t border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-white tracking-tight mb-8 z-10 relative">
          Agende sua <br /><span className="text-primary mt-2 block">Transformação</span>
        </h2>

        <p className="text-xl text-white/60 font-light max-w-3xl mb-12 leading-relaxed z-10 relative">
          Se você busca o padrão insano de acabamento e durabilidade que só quem vive a estética automotiva 24h por dia pode entregar, sua busca termina aqui. Localizados estrategicamente na Ilha, somos especialistas em proteger o que há de mais valioso no design do seu carro.
        </p>

        <Link
          href="/contato"
          className="group relative inline-flex z-10 items-center justify-center px-12 py-6 bg-transparent overflow-hidden border-2 border-primary text-primary hover:text-black transition-colors duration-500 font-heading font-bold uppercase tracking-[0.2em] text-lg shadow-[0_0_30px_rgba(245,231,32,0.1)] hover:shadow-[0_0_50px_rgba(245,231,32,0.5)]"
        >
          <span className="absolute inset-0 w-full h-full -translate-x-full bg-primary group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
          <span className="relative z-10 flex items-center">
            Garantir Minha Vaga
            <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
        </Link>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Proteção de Faróis e PPF Automotivo",
            "provider": {
              "@type": "AutoRepair",
              "name": "Pagani Custom Floripa"
            },
            "areaServed": "Florianópolis, SC",
            "description": "Blindagem de faróis contra amarelamento e pedras usando PPF e vitrificação 9H profissional."
          })
        }}
      />
    </article>
  );
}
