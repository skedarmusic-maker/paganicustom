import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Customização Automotiva Perto de Mim | Pagani Custom Floripa',
  description: 'Procurando customização automotiva em Florianópolis? A Pagani Custom é o estúdio de alto padrão referência em iluminação, Bi-LED e estética ótica.',
};

export default function CustomizacaoAutomotivaPage() {
  const projects = [
    {
      title: "Projetor Bi-LED (Performance Extrema)",
      desc: "Substituição do refletor halógeno original por lentes Bi-LED premium com corte de luz milimétrico que não ofusca a via e oferece iluminação 3x mais forte.",
      link: "/projetor-biled",
      image: "/images/biled/projetorbiled.jpeg"
    },
    {
      title: "DRL Sequencial (Assinatura Premium)",
      desc: "Integração de barra DRL com seta sequencial dual-color sob medida no farol, garantindo acabamento limpo (estilo original de fábrica).",
      link: "/instalacao-de-drl",
      image: "/images/drl.jpeg"
    },
    {
      title: "Angel Eyes Crystal (DNA Europeu)",
      desc: "Anéis de LED em acrílico de alta densidade inspirados na estética alemã de luxo, gerando luz contínua sem pontos pretos.",
      link: "/angel-eyes",
      image: "/images/angels.jpg"
    },
    {
      title: "Máscara Negra (Agressividade Estética)",
      desc: "Remoção do cromo interno do farol e pintura em Black Piano ou Preto Fosco de alta temperatura para um visual esportivo e elegante.",
      link: "/mascara-negra",
      image: "/images/mascaranegra/mascaranegra.jpeg"
    },
    {
      title: "Proteção de Farol PPF (Blindagem Invisível)",
      desc: "Aplicação de película de proteção termoplástica (PPF) para evitar danos por pedras na estrada e conter o amarelecimento solar precoce.",
      link: "/protecao-de-farol",
      image: "/images/rest farol/restauracao de farol2.jpeg"
    }
  ];

  const faqs = [
    {
      q: "O que faz uma loja de customização automotiva?",
      a: "Uma loja de customização de alto padrão altera o veículo para melhorar sua estética ou performance sem comprometer a segurança. Na Pagani Custom, focamos no Retrofit e customização de faróis, elevando o design ótico do carro a níveis premium."
    },
    {
      q: "É permitido colocar projetor de LED no farol?",
      a: "Sim, desde que a linha de corte de iluminação seja respeitada, evitando o ofuscamento de outros motoristas. Nossos projetos Bi-LED são calibrados milimetricamente em equipamento a laser para garantir máxima segurança e adequação viária."
    },
    {
      q: "Quanto tempo demora um projeto de customização de farol?",
      a: "Por ser um trabalho artesanal e de alta engenharia, a maioria dos projetos leva entre 24h a 48h. Abertura segura, pintura, instalação dos LEDs, polimento e a cura total da selagem exigem esse prazo para garantir qualidade vitalícia."
    }
  ];

  return (
    <article className="bg-[#020202] min-h-screen font-sans text-white/80 overflow-hidden pt-24 pb-32 relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HERO SECTION */}
        <div className="mb-20 text-center lg:text-left">
          <div className="inline-flex items-center space-x-3 mb-6 justify-center lg:justify-start w-full">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Estúdio de Customização Premium</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-6">
            Customização Automotiva <span className="text-transparent" style={{ WebkitTextStroke: '2px #f5e720' }}>Perto de Você</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto lg:mx-0 leading-relaxed">
            Não entregue seu veículo a curiosos. Se você busca por <strong className="text-white font-semibold">customização automotiva perto de mim</strong>, encontrou o estúdio referência na Grande Florianópolis. Engenharia ótica, estética agressiva e acabamento com padrão de fábrica.
          </p>
        </div>

        {/* PROJETOS GRID */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-12 uppercase tracking-tight text-center lg:text-left">
            5 Projetos de Destaque que <span className="text-primary">Definem Nosso Padrão</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group bg-black/60 border border-white/5 hover:border-primary/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl relative"
              >
                {/* Image background block */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale opacity-75 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">Projeto 0{idx + 1}</span>
                    <h3 className="text-xl font-heading font-bold text-white uppercase mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-6 font-light">
                      {project.desc}
                    </p>
                  </div>

                  <Link 
                    href={project.link}
                    className="inline-flex items-center text-xs font-heading font-bold uppercase tracking-widest text-primary border-t border-white/10 pt-4 w-full justify-between hover:text-white transition-colors group/link"
                  >
                    Ver detalhes do serviço
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EEAT HIGHLIGHTS (Por que escolher?) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 bg-black/40 border border-white/5 p-8 md:p-12">
          <div className="lg:border-r lg:border-white/10 lg:pr-8">
            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Estética & Durabilidade</h4>
            <h3 className="text-2xl font-heading font-bold text-white uppercase mb-4">Selagem de Fábrica</h3>
            <p className="text-sm text-white/75 font-light leading-relaxed">
              Utilizamos polímeros de vedação originais idênticos aos usados pelas montadoras de luxo. Garantimos zero farol embaçado ou infiltrações na primeira chuva ou lavagem.
            </p>
          </div>

          <div className="lg:border-r lg:border-white/10 lg:px-8">
            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Individualidade</h4>
            <h3 className="text-2xl font-heading font-bold text-white uppercase mb-4">Consultoria Personalizada</h3>
            <p className="text-sm text-white/75 font-light leading-relaxed">
              Não fazemos trabalho genérico. Analisamos a proposta de design do seu modelo e moldamos as lentes e iluminação para que combinem perfeitamente com a personalidade do veículo.
            </p>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Fácil Acesso</h4>
            <h3 className="text-2xl font-heading font-bold text-white uppercase mb-4">Florianópolis / SC</h3>
            <p className="text-sm text-white/75 font-light leading-relaxed">
              Nosso estúdio definitivo fica na Costeira do Pirajubaé. Muito fácil de chegar de toda a Ilha e do Continente (São José e Palhoça), facilitando o acompanhamento do seu projeto.
            </p>
          </div>
        </div>

        {/* FAQs - GEO OPTIMIZATION */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wider">Perguntas Frequentes</h2>
            <p className="text-white/60 text-sm mt-2">Dúvidas comuns sobre customização automotiva de alto padrão</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-white/5 bg-black/60 p-6 md:p-8"
              >
                <h3 className="text-lg font-heading font-bold text-white uppercase mb-3 flex items-start">
                  <span className="text-primary mr-3 font-black">?</span>
                  {faq.q}
                </h3>
                <p className="text-sm text-white/75 pl-6 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="border border-white/10 bg-black p-12 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h2 className="text-3xl font-heading font-bold text-white uppercase tracking-widest mb-4">Pare de Procurar</h2>
          <p className="text-white/80 font-light max-w-2xl mx-auto mb-8 text-base">
            Seu carro merece o melhor tratamento óptico e estético. Conecte-se com a equipe que é referência em customização automotiva na Grande Florianópolis.
          </p>
          <div>
            <a 
              href="https://wa.me/554832495596"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-heading font-bold text-sm tracking-widest uppercase text-black bg-primary px-10 py-5 hover:bg-white hover:text-black transition-all duration-300 transform group-hover:-translate-y-1"
            >
              Falar com um Especialista no WhatsApp
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
