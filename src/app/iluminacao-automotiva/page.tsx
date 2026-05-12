import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Iluminação Automotiva de Elite em Florianópolis | Pagani Custom',
  description: 'Onde a tecnologia de iluminação automotiva encontra a precisão absoluta. Projetores Bi-LED, Customização Ótica e Restauração de Faróis em Florianópolis.',
};

export default function IluminacaoElitePage() {
  return (
    <article className="bg-black min-h-screen font-sans text-white/90 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative w-full flex flex-col justify-center min-h-[80vh] px-4 sm:px-6 lg:px-12 border-b border-white/10 bg-[#050505]">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/10 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-20 max-w-5xl">
          <div className="inline-flex items-center space-x-2 mb-8">
            <span className="h-[2px] w-12 bg-primary"></span>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">PAGANI CUSTOM FLORIPA</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
            Iluminação <br/>
            <span className="text-primary">Automotiva</span> <br/>
            de Elite.
          </h1>
          
          <p className="text-xl md:text-2xl font-light max-w-2xl leading-relaxed text-white/80 border-l-2 border-primary pl-6">
            A Arte da Precisão e Performance na Pagani Custom Floripa.
          </p>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12">
            <p className="text-lg text-white/70 leading-relaxed italic">
              A iluminação automotiva deixou de ser um componente meramente funcional para se tornar o ponto de convergência entre segurança extrema e estética de alto padrão. Na Pagani Custom Floripa, cada feixe de luz é projetado com precisão cirúrgica.
            </p>

            <div className="space-y-8">
              <div className="group border-t border-white/10 pt-8 hover:border-primary transition-colors">
                <h3 className="text-2xl font-heading font-bold text-primary uppercase mb-4">A Revolução dos Projetores Bi-LED Signature</h3>
                <p className="text-white/80 leading-relaxed font-light">
                  Nosso serviço de assinatura foca na implementação de projetores Bi-LED de última geração. Com uma temperatura de cor de 6000K, entregamos uma iluminação 300% superior aos sistemas originais, garantindo uma visibilidade sem precedentes em qualquer condição climática.
                </p>
              </div>

              <div className="group border-t border-white/10 pt-8 hover:border-primary transition-colors">
                <h3 className="text-2xl font-heading font-bold text-primary uppercase mb-4">Customização Ótica e Assinatura Luminosa</h3>
                <p className="text-white/80 leading-relaxed font-light">
                  Para aqueles que buscam exclusividade, oferecemos soluções que redefinem a identidade visual do carro. Especialistas em acabamentos sofisticados como Máscara Negra em Black Piano, DRL com seta sequencial e Angel Eyes inspirados nas marcas premium alemãs.
                </p>
              </div>

              <div className="group border-t border-white/10 pt-8 hover:border-primary transition-colors">
                <h3 className="text-2xl font-heading font-bold text-primary uppercase mb-4">Restauração e Preservação</h3>
                <p className="text-white/80 leading-relaxed font-light">
                  Devolvemos a transparência original ao policarbonato com polimento técnico e proteção UV de alta performance, protegendo o conjunto ótico contra o amarelamento e agentes externos de forma definitiva.
                </p>
              </div>
            </div>
          </div>

          <div className="sticky top-24 space-y-8">
            <div className="relative aspect-[4/5] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
               <Image 
                 src="/images/biled/projetorbiled.jpeg" 
                 alt="Iluminação Elite Pagani Custom" 
                 fill 
                 className="object-cover"
               />
               <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                  <p className="text-primary font-black text-4xl">5.0 ★</p>
                  <p className="text-white text-xs uppercase tracking-widest mt-2">Avaliação Máxima no Google</p>
               </div>
            </div>
            
            <div className="bg-zinc-900/50 p-8 border-l-4 border-primary">
              <h4 className="font-bold text-white mb-2 uppercase">Localização Estratégica</h4>
              <p className="text-sm text-white/60">Costeira do Pirajubaé, Florianópolis. Onde a tecnologia encontra a precisão absoluta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-4 text-center bg-[#050505] border-t border-white/10">
        <h2 className="text-4xl md:text-6xl font-heading font-black uppercase mb-12">Pronto para a <span className="text-primary">Transformação?</span></h2>
        <Link 
          href="/contato" 
          className="inline-block px-12 py-6 bg-primary text-black font-heading font-black uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105"
        >
          Agendar Consultoria de Elite
        </Link>
      </section>

    </article>
  );
}
