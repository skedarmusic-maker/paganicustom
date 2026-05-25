import { Metadata } from 'next';

// Ícones SVG inline — sem dependência de lucide-react
const Lightbulb = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.9 10.6 18 9.3 18 8A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" />
  </svg>
);
const Paintbrush = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" /><path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" /><path d="M14.5 17.5 4.5 15" />
  </svg>
);
const Sparkles = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
  </svg>
);
const ShieldCheck = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" />
  </svg>
);
const Award = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

export const metadata: Metadata = {
  title: "Iluminação Automotiva de Elite em Florianópolis | Pagani Custom",
  description: "Descubra a arte da iluminação automotiva de precisão na Pagani Custom Floripa. Projetores Bi-LED, customização ótica, máscara negra e restauração de faróis.",
  keywords: ["iluminação automotiva", "farol de led", "projetor bi-led florianópolis", "máscara negra", "restauração de farol", "pagani custom", "florianópolis"],
};

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="container mx-auto px-4 text-center animate-[fade-in-up_1s_ease-out]">
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight">
            Iluminação Automotiva de <span className="text-primary">Elite</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
            A Arte da Precisão e Performance na Pagani Custom Floripa
          </p>
          <p className="mt-6 max-w-4xl mx-auto text-base text-gray-400">
            A iluminação automotiva deixou de ser um componente meramente funcional para se tornar o ponto de convergência entre segurança extrema e estética de alto padrão. Na Pagani Custom Floripa, compreendemos que cada feixe de luz deve ser projetado com precisão cirúrgica, elevando a experiência de condução ao patamar de excelência que apenas materiais de elite podem proporcionar.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 py-16 md:py-24 space-y-20">

        {/* Section 1: Projetores Bi-LED */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 animate-[fade-in-up_1s_ease-out]">
            <div className="inline-flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold">A Revolução dos Projetores Bi-LED Signature</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Nosso serviço de assinatura foca na implementação de projetores Bi-LED de última geração. Com uma temperatura de cor de 6000K, entregamos uma iluminação 300% superior aos sistemas originais, garantindo uma visibilidade sem precedentes em qualquer condição climática.
            </p>
            <p className="text-gray-300 leading-relaxed">
              O diferencial reside na nossa técnica de instalação <strong className="font-semibold text-white">plug-and-play</strong>, que preserva a integridade elétrica do veículo, aliada a um alinhamento perfeito do feixe e uma vedação técnica que elimina qualquer risco de infiltração.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-[fade-in-right_1.2s_ease-out]">
            <div className="bg-dark-gray p-6 rounded-lg border border-gray-800">
              <h3 className="font-heading font-bold text-lg text-primary">Visibilidade Extrema</h3>
              <p className="mt-2 text-gray-400 text-sm">Iluminação 300% superior aos sistemas de fábrica.</p>
            </div>
            <div className="bg-dark-gray p-6 rounded-lg border border-gray-800">
              <h3 className="font-heading font-bold text-lg text-primary">Instalação Segura</h3>
              <p className="mt-2 text-gray-400 text-sm">Técnica plug-and-play que preserva a garantia do veículo.</p>
            </div>
            <div className="bg-dark-gray p-6 rounded-lg border border-gray-800">
              <h3 className="font-heading font-bold text-lg text-primary">Alinhamento Perfeito</h3>
              <p className="mt-2 text-gray-400 text-sm">Feixe de luz ajustado com precisão para máxima eficiência.</p>
            </div>
            <div className="bg-dark-gray p-6 rounded-lg border border-gray-800">
              <h3 className="font-heading font-bold text-lg text-primary">Vedação Técnica</h3>
              <p className="mt-2 text-gray-400 text-sm">Proteção total contra umidade e infiltração.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Customização Ótica */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 md:order-2 animate-[fade-in-up_1s_ease-out]">
            <div className="inline-flex items-center gap-3">
              <Paintbrush className="w-8 h-8 text-primary" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Customização Ótica e Assinatura Luminosa</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Para aqueles que buscam exclusividade, oferecemos soluções de customização que redefinem a identidade visual do carro. Especialistas em acabamentos sofisticados, executamos a <strong className="font-semibold text-white">Máscara Negra</strong> com pintura interna em Black Piano ou fosco, além da instalação de <strong className="font-semibold text-white">DRL (Daytime Running Lights)</strong> com seta sequencial dual-color.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nossos <strong className="font-semibold text-white">Angel Eyes (Halo Rings)</strong> são inspirados na sofisticação das marcas premium alemãs, conferindo uma assinatura luminosa única e imponente.
            </p>
          </div>
          <div className="md:order-1 animate-[fade-in-right_1.2s_ease-out]">
             <div className="bg-dark-gray p-8 rounded-lg border border-gray-800 space-y-4">
                <h3 className="font-heading text-xl font-bold text-white">Nossos Acabamentos Exclusivos:</h3>
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300"><strong>Máscara Negra:</strong> Acabamento em Black Piano ou fosco para um visual agressivo e elegante.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300"><strong>DRL com Seta Sequencial:</strong> Modernidade e segurança com iluminação diurna e setas dinâmicas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300"><strong>Angel Eyes (Halo Rings):</strong> Uma assinatura luminosa icônica, inspirada no design europeu.</span>
                  </li>
                </ul>
             </div>
          </div>
        </section>

        {/* Section 3: Restauração */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 animate-[fade-in-up_1s_ease-out]">
            <div className="inline-flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Restauração e Preservação com Padrão de Fábrica</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A clareza das lentes é vital para a eficiência da iluminação automotiva. Através de um processo de polimento técnico e restauração avançada, devolvemos a transparência original ao policarbonato.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Finalizamos com <strong className="font-semibold text-white">proteção UV de alta performance</strong> e <strong className="font-semibold text-white">vitrificação de longa duração</strong>, protegendo o conjunto ótico contra o amarelamento e agentes externos de forma definitiva.
            </p>
          </div>
          <div className="flex justify-center items-center animate-[fade-in-right_1.2s_ease-out]">
            <div className="relative p-8 bg-dark-gray rounded-lg border border-gray-800 w-full max-w-md">
                <ShieldCheck className="absolute -top-6 -left-6 w-16 h-16 text-primary bg-dark-gray p-2 rounded-full border-4 border-black" />
                <h3 className="font-heading text-xl font-bold text-white">Proteção Definitiva</h3>
                <p className="mt-2 text-gray-300">Nosso processo de vitrificação cria uma barreira duradoura que preserva a clareza e o valor dos seus faróis, garantindo performance e estética por muito mais tempo.</p>
            </div>
          </div>
        </section>

      </div>

      {/* Commitment Section */}
      <section className="bg-dark py-20 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Award className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Compromisso com a Perfeição</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Líder em Florianópolis e com avaliação máxima de <strong className="text-white">5.0 estrelas no Google</strong>, a Pagani Custom Floripa é o destino de proprietários que não aceitam o básico. Em nosso centro técnico na Costeira do Pirajubaé, cada projeto é tratado como uma obra de arte única, onde o acabamento impecável é a nossa regra absoluta.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Agende sua Transformação</h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-300">
            Eleve o padrão de segurança e estética do seu veículo com quem é autoridade no mercado premium.
          </p>
          <div className="mt-8">
            <a
              href="https://api.whatsapp.com/send?phone=5548000000000&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20ilumina%C3%A7%C3%A3o%20automotiva."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-black font-heading font-bold py-4 px-10 rounded-lg text-lg hover:bg-primary-hover transition-colors duration-300"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// Componente Footer de fallback caso o real não esteja importado
const Footer = () => (
  <footer className="bg-black py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
    <p>© {new Date().getFullYear()} Pagani Custom. Todos os direitos reservados.</p>
  </footer>
);