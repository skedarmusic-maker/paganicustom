import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projetor Bi-LED em Florianópolis | Instalação e Customização',
  description: 'Upgrade de iluminação premium em Florianópolis. Instalação de Projetor Bi-LED com linha de corte perfeita, mais segurança e estética. Agende sua consultoria!',
};

export default function BiLedPage() {
  return (
    <article className="bg-black min-h-screen font-sans text-white/90 overflow-hidden">
      
      {/* 1. HERO MASSIVO E BRUTALISTA (Sem centralização clichê) */}
      <section className="relative w-full flex flex-col justify-start md:justify-end pt-10 pb-12 md:min-h-[90vh] md:pb-24 px-4 sm:px-6 lg:px-12 border-b border-white/10">
        
        {/* Layer 0: Fundo Typográfico Massivo (Outline) */}
        <div className="absolute top-10 left-0 w-full overflow-hidden select-none pointer-events-none opacity-[0.03] z-0">
           <div aria-hidden="true" className="text-[15vw] leading-none font-heading font-black whitespace-nowrap outline-text text-transparent" style={{ WebkitTextStroke: '2px white' }}>
             PROJETOR BI-LED PGN
           </div>
        </div>

        {/* Layer 1: Imagens Sobrepostas Fragmentadas */}
        <div className="absolute top-24 right-4 lg:right-24 w-2/3 lg:w-[45vw] h-[50vh] z-10 hidden md:block group perspective-1000">
          <div className="relative w-full h-full transform transition-transform duration-1000 rotate-y-[-10deg] rotate-x-[5deg] group-hover:rotate-y-0 group-hover:rotate-x-0">
             <Image 
               src="/images/biled/projetorbiled.jpeg" 
               alt="Farol Bi-LED Customizado Pagani Floripa" 
               fill 
               className="object-cover border border-white/20 grayscale group-hover:grayscale-0 transition-all duration-700"
               priority
             />
             <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 border border-primary/40 bg-black/80 backdrop-blur-sm z-20 overflow-hidden hidden lg:block hover:scale-105 transition-transform duration-500">
                <Image 
                  src="/images/biled/WhatsApp Image 2026-03-24 at 15.22.37.jpeg" 
                  alt="Instalação Bi-LED detalhe" 
                  fill 
                  className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
             </div>
          </div>
        </div>

        {/* Layer 2: Conteúdo de Tensão Assimétrica */}
        <div className="relative z-20 max-w-4xl pt-6 md:pt-10">
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="h-[2px] w-12 bg-primary"></span>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">UPGRADE PREMIUM</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-heading font-black text-white uppercase tracking-tighter leading-[0.9] mb-6 mix-blend-difference">
            Instalação de <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)', color: 'black'}}>Projetores</span><br/>
            <span className="text-primary">Bi-LED</span> em<br/>Florianópolis.
          </h1>
          
            <p className="text-xl md:text-2xl font-light max-w-2xl leading-relaxed text-white/95 border-l-2 border-primary pl-6">
            Iluminação e Estética de Alta Performance.
          </p>
        </div>
      </section>

      {/* 2. PROBLEMA VS SOLUÇÃO */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 relative h-[400px] lg:h-auto border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
             <Image 
               src="/images/biled/WhatsApp Image 2026-03-24 at 15.22.36.jpeg" 
               alt="Diferença da iluminação Bi-LED na estrada" 
               fill 
               className="object-cover object-center"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-16">
            <h2 className="text-3xl font-heading font-black uppercase tracking-wide mb-8">
              A Modernização <span className="text-primary">Definitiva</span>
            </h2>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
              <p>
                Cansado de dirigir à noite com faróis fracos ou de usar lâmpadas de LED comuns que ofuscam os outros motoristas e reprovam em vistorias? A instalação de Projetores Bi-LED é a modernização definitiva para o sistema de iluminação do seu veículo.
              </p>
              <p>
                Diferente da simples troca de lâmpadas em espelhos refletores originais, o projeto Bi-LED substitui o sistema interno do farol por um módulo ótico completo. O resultado é um feixe de luz denso, focado e com alcance até <strong className="text-white">300% maior</strong> que as lâmpadas halógenas convencionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GRID FRAGMENTADO DAS VANTAGENS */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <div className="order-2 lg:order-1 space-y-24">
              <div className="relative group pl-8 md:pl-12 border-l border-white/10 hover:border-primary transition-colors duration-500">
                <div className="absolute left-0 top-0 w-8 md:w-12 h-[1px] bg-white/10 group-hover:bg-primary transition-colors duration-500"></div>
                <h3 className="text-2xl font-heading font-bold text-white uppercase mb-4 opacity-90">Linha de Corte Perfeita (Cut-off)</h3>
                <p className="font-light text-white/80 leading-relaxed text-lg">
                  O grande diferencial técnico do projetor. Ele cria uma linha de corte nítida na projeção da luz, garantindo que a via seja iluminada ao máximo debaixo da linha de visão dos motoristas que vêm no sentido contrário. Isso elimina o ofuscamento e garante segurança total.
                </p>
              </div>

              <div className="relative group pl-8 md:pl-12 border-l border-white/10 hover:border-primary transition-colors duration-500">
                <div className="absolute left-0 top-0 w-8 md:w-12 h-[1px] bg-white/10 group-hover:bg-primary transition-colors duration-500"></div>
                <h3 className="text-2xl font-heading font-bold text-white uppercase mb-4 opacity-90">Potência Instantânea</h3>
                <p className="font-light text-white/80 leading-relaxed text-lg">
                  Ao contrário do Xenon, que demora alguns segundos para aquecer e atingir a cor ideal, o Bi-LED entrega 100% da sua capacidade luminosa de forma imediata (flash instantâneo).
                </p>
              </div>
              
              <div className="relative group pl-8 md:pl-12 border-l border-white/10 hover:border-primary transition-colors duration-500">
                <div className="absolute left-0 top-0 w-8 md:w-12 h-[1px] bg-white/10 group-hover:bg-primary transition-colors duration-500"></div>
                <h3 className="text-2xl font-heading font-bold text-white uppercase mb-4 opacity-90">Aprovação em Vistorias</h3>
                <p className="font-light text-white/80 leading-relaxed text-lg">
                  Por respeitar a geometria correta de iluminação e não espalhar a luz de forma desordenada (como os "kits LED" baratos fazem), o feixe de luz focado do projetor é o padrão exigido para segurança viária.
                </p>
              </div>

              <div className="relative group pl-8 md:pl-12 border-l border-white/10 hover:border-primary transition-colors duration-500">
                <div className="absolute left-0 top-0 w-8 md:w-12 h-[1px] bg-white/10 group-hover:bg-primary transition-colors duration-500"></div>
                <h3 className="text-2xl font-heading font-bold text-white uppercase mb-4 opacity-90">Durabilidade e Refrigeração</h3>
                <p className="font-light text-white/80 leading-relaxed text-lg">
                  Projetos de alta qualidade contam com corpo em alumínio de aviação e cooler (ventilador turbo) interno. Essa gestão térmica eficiente garante uma vida útil que pode ultrapassar as <strong className="text-white">50.000 horas</strong> de uso contínuo.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="sticky top-32">
                <h2 className="text-[10vw] lg:text-[6rem] leading-none font-heading font-black text-white/5 uppercase break-words mb-8">
                  COMO<br/>FUNCIO<br/>NA?
                </h2>
                <div className="bg-zinc-900 border border-white/10 p-10 relative">
                  <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary -translate-y-1 translate-x-1"></div>
                  <p className="text-xl font-light text-white/90 leading-relaxed relative z-10">
                    O sistema Bi-LED integra o chip de LED de alta potência e a lente projetora em uma única peça compacta. 
                    <br/><br/>
                    O termo <span className="text-primary font-bold">"Bi"</span> refere-se à capacidade do mesmo projetor realizar as funções de farol baixo e farol alto com precisão imediata.
                  </p>
                  
                  <div className="mt-12 w-full h-64 relative border border-white/10 grayscale hover:grayscale-0 transition-duration-700">
                    <Image 
                      src="/images/biled/pecabiled.jpeg" 
                      alt="Peça Projetor Bi-LED" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOOTER AUTHORITY & CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 border-t border-white/10 bg-black flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-white tracking-tight mb-8 max-w-5xl">
          Especialistas em Customização Automotiva em <span className="text-primary">Florianópolis</span>
        </h2>
        
        <p className="text-xl text-white/80 font-light max-w-3xl mb-16 leading-relaxed">
          Nossa oficina em Florianópolis é especializada na <strong className="text-white">abertura segura de faróis</strong> e instalação não destrutiva de módulos Bi-LED.
        </p>

        <Link 
          href="/contato" 
          className="group relative inline-flex items-center justify-center px-12 py-6 bg-transparent overflow-hidden border-2 border-primary text-primary hover:text-black transition-colors duration-500 font-heading font-bold uppercase tracking-[0.2em] text-lg shadow-[0_0_30px_rgba(245,231,32,0.15)] hover:shadow-[0_0_50px_rgba(245,231,32,0.4)]"
        >
          <span className="absolute inset-0 w-full h-full -translate-x-full bg-primary group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
          <span className="relative z-10">Agendar Consultoria Bi-LED</span>
        </Link>
      </section>

    </article>
  );
}
