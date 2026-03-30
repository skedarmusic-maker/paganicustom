import React from "react";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-black relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter mb-4">
            Agende sua <span className="text-primary">Evolução</span>
          </h1>
          <p className="text-white/60 font-sans max-w-2xl text-lg">
            Sua visão, nossa execução. Preencha os detalhes e nossa equipe entrará em contato para transformar seu projeto em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Informações de Contato Direto */}
          <div className="space-y-10">
            <div className="bg-zinc-900/50 border border-white/5 p-8 relative group hover:border-primary/30 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
              <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 flex items-center">
                <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Onde Nos Encontrar
              </h3>
              <address className="font-sans text-white/70 text-lg leading-relaxed not-italic">
                <span itemProp="streetAddress">R. Marcelino Cândido Machado, 79</span><br/>
                <span itemProp="addressLocality">Costeira do Pirajubaé</span><br/>
                <span itemProp="addressRegion">Florianópolis - SC</span>, <span itemProp="postalCode">88048-005</span>
              </address>
            </div>

            <div className="bg-zinc-900/50 border border-white/5 p-8 relative group hover:border-primary/30 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
              <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 flex items-center">
                <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Fale Diretamente
              </h3>
              <a href="tel:+554832495596" className="font-sans text-primary hover:text-white transition-colors text-2xl font-bold tracking-wider">
                (48) 3249-5596
              </a>
              <p className="mt-4 font-sans text-white/50">Chamadas e WhatsApp</p>
            </div>

            <div className="bg-zinc-900/50 border border-white/5 p-8 relative group hover:border-primary/30 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
              <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 flex items-center">
                <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Expediente
              </h3>
              <ul className="space-y-3 font-sans text-white/70">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Segunda - Sexta</span>
                  <span className="text-primary">08:00 – 18:00</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Sábado</span>
                  <span className="text-primary">08:00 – 12:00</span>
                </li>
                <li className="flex justify-between text-white/40">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-zinc-950 border border-white/10 p-8 md:p-12 relative overflow-hidden">
            {/* Elemento estético */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
            
            <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-white/60 uppercase tracking-widest font-heading">Seu Nome</label>
                  <input type="text" id="name" className="w-full bg-black border border-white/20 p-4 text-white font-sans focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors peer rounded-none" placeholder="Como quer ser chamado?" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-white/60 uppercase tracking-widest font-heading">Telefone / WhatsApp</label>
                  <input type="tel" id="phone" className="w-full bg-black border border-white/20 p-4 text-white font-sans focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors peer rounded-none" placeholder="(48) 90000-0000" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-xs font-bold text-white/60 uppercase tracking-widest font-heading">Qual serviço deseja?</label>
                <select id="service" defaultValue="" className="w-full bg-black border border-white/20 p-4 text-white font-sans focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors rounded-none appearance-none">
                  <option value="" disabled>Escolha uma opção</option>
                  <option value="farol">Restauração/Personalização de Farol</option>
                  <option value="mascara-negra">Aplicação de Máscara Negra</option>
                  <option value="led">Instalação de LEDs</option>
                  <option value="estetica">Estética Automotiva</option>
                  <option value="envelopamento">Envelopamento</option>
                  <option value="outro">Projeto Exclusivo / Outro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-white/60 uppercase tracking-widest font-heading">Conte sobre o seu projeto</label>
                <textarea id="message" rows={4} className="w-full bg-black border border-white/20 p-4 text-white font-sans focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none rounded-none" placeholder="Marca, modelo, ano do carro e o que você tem em mente..." required></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-black font-heading font-black text-lg uppercase tracking-widest py-5 px-8 hover:bg-white transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(245,231,32,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                Solicitar Orçamento
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
