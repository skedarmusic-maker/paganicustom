export default function Portfolio() {
  const media = [
    {
      src: "/images/port/Apresento%20a%20voc%C3%AAs%20um%20dos%20projetos%20mais%20%E2%80%9Cdo%20caralho%E2%80%9D%20que%20j%C3%A1%20fizemos.Projeto%20tirado%20como%20refer%C3%AAnci%20(1).mp4",
      tag: "Projeto Lancer",
      colSpan: "lg:col-span-2"
    },
    {
      src: "/images/port/Atualiza%C3%A7%C3%A3o%20lanterna%20central%20-%20Jeep%20Commander%23jeepcommander%23commanderbrasil%23commander2022%23comman.mp4",
      tag: "Jeep Commander",
      colSpan: ""
    },
    {
      src: "/images/port/Friso%20vermelho%20e%20restaura%C3%A7%C3%A3o%20das%20lentes%20-%20Golf%20GTI%23golfgti%23golfgtibr%23golfmk7%23golfmk7gti%23personal.mp4",
      tag: "VW Golf GTI",
      colSpan: ""
    },
    {
      src: "/images/Corre%C3%A7%C3%A3o%20de%20infiltra%C3%A7%C3%A3o%20-%20Mercedes%20GLA200.mp4",
      tag: "Mercedes GLA200 - Infiltração",
      colSpan: "lg:col-span-2"
    }
  ];

  return (
    <section className="py-24 bg-dark-gray border-y border-white/5 overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter">
            <span className="border-text opacity-70">Prova Visual</span> <br/> O Portfólio
          </h2>
        </div>
        <div className="md:text-right text-white/90 font-sans max-w-sm">
          <p className="border-l-2 md:border-l-0 md:border-r-2 border-primary pl-4 md:pr-4 md:pl-0">
            Não contamos histórias, mostramos resultados. Centenas de veículos de elite modificados com o padrão Pagani.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        {media.map((item, index) => (
          <div key={index} className={`relative h-[300px] md:h-[450px] group overflow-hidden border border-white/10 ${item.colSpan} bg-black flex items-center justify-center`}>
            <div className="absolute inset-0 z-0">
               <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
               >
                  <source src={item.src} type="video/mp4" />
               </video>
            </div>
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 z-10 pointer-events-none"></div>
            
            {/* Faux Play Button for aesthetics */}
            <div className="z-20 h-16 w-16 rounded-full border border-white/30 flex items-center justify-center bg-black/30 backdrop-blur-sm group-hover:border-primary group-hover:text-primary transition-all duration-500 group-hover:scale-110">
               <svg className="h-6 w-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 3l14 9-14 9V3z" />
               </svg>
            </div>
            
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
              <span className="text-primary font-heading uppercase text-xs font-bold tracking-widest bg-black px-4 py-2 border-l-2 border-primary">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16 px-4">
        <a href="https://www.instagram.com/paganicustomfloripa/" target="_blank" rel="noopener noreferrer" className="inline-block border border-white/20 text-white font-heading font-bold text-sm tracking-widest uppercase px-12 py-5 hover:border-primary hover:text-primary transition-all duration-300 transform -skew-x-12">
          <span className="block skew-x-12">Explorar Acervo no Instagram</span>
        </a>
      </div>
    </section>
  );
}
