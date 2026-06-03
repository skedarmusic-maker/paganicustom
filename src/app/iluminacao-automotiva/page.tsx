import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Iluminação Automotiva de Elite em Florianópolis | Pagani Custom",
  description: "Descubra a arte da iluminação automotiva de precisão na Pagani Custom Floripa. Projetores Bi-LED, customização ótica e restauração de faróis com padrão de fábrica.",
  openGraph: {
    title: "Iluminação Automotiva de Elite | Pagani Custom Floripa",
    description: "Eleve o padrão de segurança e estética do seu veículo com quem é autoridade no mercado premium de iluminação automotiva.",
    url: "https://paganicustom.com.br/iluminacao-automotiva", // Assuming this will be the final URL
  },
};

const FeatureIcon = ({ path }: { path: string }) => (
  <div className="h-14 w-14 bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-primary group-hover:border-primary/30 transition-all duration-500 transform group-hover:rotate-[-5deg] shrink-0">
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={path} />
    </svg>
  </div>
);

export default function Page() {
  const services = [
    {
      title: "A Revolução dos Projetores Bi-LED Signature",
      description: "Nosso serviço de assinatura foca na implementação de projetores Bi-LED de última geração. Com uma temperatura de cor de 6000K, entregamos uma iluminação 300% superior aos sistemas originais, garantindo uma visibilidade sem precedentes em qualquer condição climática. O diferencial reside na nossa técnica de instalação plug-and-play, que preserva a integridade elétrica do veículo, aliada a um alinhamento perfeito do feixe e uma vedação técnica que elimina qualquer risco de infiltração.",
      iconPath: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
    },
    {
      title: "Customização Ótica e Assinatura Luminosa",
      description: "Para aqueles que buscam exclusividade, oferecemos soluções de customização que redefinem a identidade visual do carro. Especialistas em acabamentos sofisticados, executamos a Máscara Negra com pintura interna em Black Piano ou fosco, além da instalação de DRL (Daytime Running Lights) com seta sequencial dual-color. Nossos Angel Eyes (Halo Rings) são inspirados na sofisticação das marcas premium alemãs, conferindo uma assinatura luminosa única e imponente.",
      iconPath: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z",
    },
    {
      title: "Restauração e Preservação com Padrão de Fábrica",
      description: "A clareza das lentes é vital para a eficiência da iluminação automotiva. Através de um processo de polimento técnico e restauração avançada, devolvemos a transparência original ao policarbonato. Finalizamos com proteção UV de alta performance e vitrificação de longa duração, protegendo o conjunto ótico contra o amarelamento e agentes externos de forma definitiva.",
      iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black pt-16 pb-24 md:pt-24 md:pb-32 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-[radial-gradient(circle,_rgba(245,231,32,0.2)_0%,_transparent_50%)]"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-[radial-gradient(circle,_rgba(245,231,32,0.1)_0%,_transparent_60%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block border border-primary/30 bg-primary/5 px-4 py-1.5 backdrop-blur-sm -skew-x-12">
              <span className="text-primary font-heading font-bold tracking-widest text-xs uppercase block skew-x-12">
                Precisão & Performance
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-none tracking-tighter uppercase">
              Iluminação <span className="border-text">Automotiva</span> de <span className="text-primary drop-shadow-[0_0_20px_rgba(245,231,32,0.5)]">Elite</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-sans max-w-3xl mx-auto font-light">
              A iluminação automotiva deixou de ser um componente meramente funcional para se tornar o ponto de convergência entre segurança extrema e estética de alto padrão. Na Pagani Custom Floripa, compreendemos que cada feixe de luz deve ser projetado com precisão cirúrgica, elevando a experiência de condução ao patamar de excelência que apenas materiais de elite podem proporcionar.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-dark-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col group relative bg-dark border border-white/5 p-8 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 overflow-hidden h-full">
                <div className="absolute -top-[150px] -right-[150px] w-[300px] h-[300px] bg-[radial-gradient(circle,_rgba(245,231,32,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right"></div>
                <div className="relative z-10 flex-grow flex flex-col">
                  <FeatureIcon path={service.iconPath} />
                  <h2 className="text-2xl font-heading font-bold text-white mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-white/85 font-sans text-base leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority & Commitment Section */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter leading-[1.1]">
                Compromisso com a <span className="border-text-primary">Perfeição</span>
              </h3>
              <p className="text-lg text-white/90 font-sans font-light">
                Líder em Florianópolis e com avaliação máxima de 5.0 estrelas no Google, a Pagani Custom Floripa é o destino de proprietários que não aceitam o básico. Em nosso centro técnico na Costeira do Pirajubaé, cada projeto é tratado como uma obra de arte única, onde o acabamento impecável é a nossa regra absoluta.
              </p>
              <blockquote className="border-l-4 border-primary bg-white/5 pl-6 pr-4 py-4 italic text-white/90 text-lg backdrop-blur-sm -skew-x-6">
                <span className="block skew-x-6">
                  Pagani Custom Floripa: Onde a tecnologia de iluminação automotiva encontra a precisão absoluta.
                </span>
              </blockquote>
            </div>
            <div className="relative h-[400px] w-full border border-white/10 group overflow-hidden">
              <div className="absolute inset-0 bg-dark-gray"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.05),rgba(255,255,255,0))]"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-7xl lg:text-8xl text-primary font-heading font-black drop-shadow-[0_0_15px_rgba(245,231,32,0.4)]">5.0</span>
                <span className="mt-2 text-xl font-heading font-bold text-white uppercase tracking-widest">Avaliação Máxima</span>
                <span className="mt-1 text-sm text-white/70 font-sans">no Google</span>
                <div className="mt-8 h-px w-20 bg-primary/50"></div>
              </div>
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/50 group-hover:border-primary transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/50 group-hover:border-primary transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tighter">
            Agende sua <span className="text-primary">Transformação</span>
          </h4>
          <p className="mt-4 text-lg text-white/85 font-sans max-w-2xl mx-auto">
            Eleve o padrão de segurança e estética do seu veículo com quem é autoridade no mercado premium.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-8 text-white/90">
            <div className="text-left sm:text-right">
              <p className="font-bold">📍 Costeira do Pirajubaé, Florianópolis</p>
            </div>
            <div className="h-12 w-px bg-white/20 hidden sm:block"></div>
            <div className="text-left">
              <p className="font-bold">⏰ Seg-Sex (08h-18h) | Sáb (08h-12h)</p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="https://wa.me/554832495596?text=Olá! Gostaria de agendar uma avaliação para um projeto de iluminação automotiva."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-black font-heading font-bold text-base tracking-widest uppercase px-10 py-4 text-center hover:bg-white transition-colors duration-300 transform -skew-x-12 group"
            >
              <span className="block skew-x-12 group-hover:scale-105 transition-transform">
                Falar com Especialista
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}