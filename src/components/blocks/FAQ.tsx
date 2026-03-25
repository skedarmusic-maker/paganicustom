"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Quanto tempo demora uma customização ou restauração?",
      answer: "O tempo varia conforme a complexidade do projeto. Uma restauração de faróis padrão pode levar horas, enquanto a instalação de projetores DRL e envelopamento leva dias. Nosso foco não é velocidade, é a perfeição."
    },
    {
      question: "Vocês dão garantia na pintura e nos serviços de LED?",
      answer: "Sim, todos os nossos serviços possuem garantia documentada. Utilizamos produtos premium (vitrificadores de alta eficiência) e chicotes elétricos adequados para anular riscos na eletrônica do seu veículo."
    },
    {
      question: "O serviço de máscara negra causa problemas com a fiscalização?",
      answer: "A máscara negra interna no farol não interfere no facho de luz principal ou nas regras do Contran, se executada corretamente. Realizamos tudo dentro dos limites legais de rodagem e segurança."
    },
    {
      question: "Atendem motos e caminhonetes em Florianópolis?",
      answer: "Nossa especialidade é a estética automotiva premium seja qual for a categoria. De motos de alta cilindrada até grandes caminhonetes (utilitários), entregamos o mesmo grau de luxo e eficiência."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-black border-t border-white/10" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter mb-4">
            Dúvidas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-white/80 font-sans max-w-xl mx-auto text-lg leading-relaxed">
            Transparência mecânica e técnica. Entenda o nosso processo de customização e alinhe suas expectativas de alto desempenho.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border transition-all duration-300 ${openIndex === index ? 'border-primary bg-[#0f0f0f]' : 'border-white/10 bg-[#0a0a0a] hover:border-white/30'}`}
            >
              <button
                className="w-full px-6 py-6 flex justify-between items-center focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-lg md:text-xl font-heading font-bold text-left uppercase tracking-wide transition-colors ${openIndex === index ? 'text-primary' : 'text-white'}`}>
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'text-primary rotate-45' : 'text-white/50 group-hover:text-primary'}`}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-0 text-white/90 font-sans leading-relaxed border-l-2 border-primary ml-6 mb-4 text-lg">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
