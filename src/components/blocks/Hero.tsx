import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden">

      {/* Background texture layer */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/Design sem nome (38).jpg"
          alt="Fundo abstrato automotivo"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
      </div>

      {/* Car image — anchored to right-bottom, visible on mobile with opacity, restored on desktop */}
      <div className="absolute right-0 bottom-0 z-10 w-[95%] lg:w-[55%] h-[60%] lg:h-full pointer-events-none opacity-25 lg:opacity-100 mix-blend-lighten lg:mix-blend-normal">
        <Image
          src="/images/Pagani Custom Floripa20250720-205113 site2.jpg"
          alt="Carro customizado pela Pagani Custom"
          fill
          className="object-contain object-right-bottom drop-shadow-2xl"
          priority
        />
        {/* Fade-left so car doesn't fight with text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 lg:via-black/50 to-transparent w-full lg:w-1/2"></div>
        {/* Fade-top for mobile specifically to merge shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/20 to-black lg:hidden"></div>
      </div>

      {/* Content — z-20 always above the car */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-20">
        <div className="max-w-full lg:max-w-[50%] space-y-8">

          <div className="inline-block border border-primary/30 bg-primary/5 px-4 py-1.5 backdrop-blur-sm -skew-x-12">
            <span className="text-primary font-heading font-bold tracking-widest text-xs uppercase block skew-x-12">
              A Arte de Transformar
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black text-white leading-none tracking-tighter uppercase">
            Estética <br />
            <span className="border-text">Automotiva</span> <br />
            <span className="text-primary drop-shadow-[0_0_30px_rgba(245,231,32,0.7)] relative inline-block mt-2 text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
              & Faróis
              <span className="absolute -inset-2 bg-primary/10 blur-2xl opacity-60 z-[-1]"></span>
            </span> <br />
            <span className="text-2xl md:text-3xl lg:text-4xl tracking-normal text-white/80 block mt-4 font-light">
              em Florianópolis
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 font-sans max-w-md font-light border-l-2 border-primary pl-6 hover:border-l-[4px] transition-all">
            Eleve o nível do seu projeto na Costeira do Pirajubaé. Polimento, vedação, máscara negra e personalização de excelência na Grande Floripa. Seu carro, nossas regras.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="/portfolio"
              className="bg-primary text-black font-heading font-bold text-sm tracking-widest uppercase px-8 py-4 text-center hover:bg-white transition-colors duration-300 transform -skew-x-12 group"
            >
              <span className="block skew-x-12 group-hover:scale-105 transition-transform">Ver Projetos</span>
            </a>
            <a
              href="https://wa.me/554832495596"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/20 text-white font-heading font-bold text-sm tracking-widest uppercase px-8 py-4 text-center hover:border-primary hover:text-primary transition-all duration-300 transform -skew-x-12"
            >
              <span className="block skew-x-12">Falar com Especialista</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
