import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Iluminação Auxiliar & Geral",
      desc: "Restauração de faróis, máscara negra, instalação de LEDs integrados e DRLs (Angel Eyes) sob medida com acabamento de fábrica.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      links: [
        { url: "/restauracao-de-farol", text: "Restauração de Faróis" },
        { url: "/mascara-negra", text: "Máscara Negra" },
        { url: "/instalacao-de-drl", text: "Instalação de DRL" },
        { url: "/angel-eyes", text: "Angel Eyes" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-black relative" id="servicos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter">
            Nossas <span className="text-primary">Especialidades</span>
          </h2>
          <p className="mt-4 text-white/85 font-sans max-w-2xl mx-auto text-lg">
            Muito além do básico. Cada serviço é um manifesto de agressividade estética e precisão milimétrica para seu carro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          
          {/* Card Destaque: Projetor Bi-LED */}
          <div className="lg:col-span-2 group relative bg-[#0a0a0a] border border-white/5 transition-all duration-500 hover:border-primary/50 overflow-hidden flex flex-col md:flex-row shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(245,231,32,0.1)]">
            <div className="absolute top-0 right-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right z-20"></div>
            
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px] overflow-hidden">
               <Image 
                 src="/images/biled/projetorbiled.jpeg" 
                 alt="Instalação de Projetor Bi-LED" 
                 fill 
                 className="object-cover object-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
               />
               {/* Vignette Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10"></div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10 bg-[#0a0a0a]">
               <div className="inline-flex items-center space-x-2 mb-4">
                 <span className="h-[2px] w-8 bg-primary"></span>
                 <span className="text-primary font-bold tracking-widest uppercase text-xs">Carro Chefe</span>
               </div>
               
               <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                 Projetores Bi-LED
               </h3>
               
               <p className="text-white/90 font-sans text-lg leading-relaxed mb-8">
                 Nossa especialidade máxima em iluminação automotiva. Transformação agressiva do sistema original utilizando blocos de Projetores Bi-LED de altíssima performance. 
                 Garantimos um corte de luz milimétrico, potência luminosa massiva e visual premium que domina as ruas com segurança e estilo absolutos.
               </p>
               
               <a href="/projetor-biled" className="inline-flex max-w-max items-center justify-center font-heading font-bold text-sm tracking-widest uppercase text-black bg-primary px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
                 Ver Projeto Bi-LED
               </a>
            </div>
          </div>

          {/* Demais Serviços */}
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col group relative bg-[#0a0a0a] border border-white/5 p-8 transition-all duration-500 hover:border-primary/50 hover:-translate-y-1 overflow-hidden h-full"
            >
              {/* Headlight Flare Effect */}
              <div className="absolute -top-[150px] -right-[150px] w-[300px] h-[300px] bg-[radial-gradient(circle,_rgba(245,231,32,0.15)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right"></div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <div className="h-14 w-14 bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-primary group-hover:border-primary/30 transition-colors duration-500 transform group-hover:rotate-[-5deg] shrink-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d={service.icon} />
                  </svg>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-white mb-3 tracking-wide uppercase group-hover:text-primary transition-colors shrink-0">
                  {service.title}
                </h3>
                
                <p className="text-white/80 font-sans text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>

                {service.links && (
                  <div className="flex flex-col space-y-3 mt-auto shrink-0 border-t border-white/10 pt-4">
                    {service.links.map((link, idx) => (
                      <a key={idx} href={link.url} className="inline-flex items-center text-xs font-heading font-bold uppercase tracking-widest text-white/50 hover:text-primary transition-colors group/link w-max">
                        {link.text}
                        <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform opacity-0 group-hover/link:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
