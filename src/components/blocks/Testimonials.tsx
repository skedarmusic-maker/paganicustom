export default function Testimonials() {
  const reviews = [
    {
      name: "Rafael Costa",
      text: "Serviço impecável na restauração dos faróis da minha BMW. O detalhamento e a máscara negra ficaram perfeitos. Atendimento de primeira linha.",
      date: "1 mês atrás"
    },
    {
      name: "Thiago Mendes",
      text: "Levei meu carro para instalação de LEDs e DRL, o resultado superou as expectativas. Profissionais que realmente entendem do que fazem no sul da ilha.",
      date: "2 semanas atrás"
    },
    {
      name: "Lucas Silva",
      text: "Fiz o polimento técnico e vitrificação. O carro parece que acabou de sair da concessionária. Recomendo de olhos fechados a Pagani Custom.",
      date: "3 meses atrás"
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden" id="avaliacoes">
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter">
              A Voz de Quem <br />
              <span className="text-primary">Exige o Melhor</span>
            </h2>
          </div>
          <div className="md:w-1/3 md:text-right">
            <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4">
              <span className="text-4xl font-heading font-bold text-white">5.0</span>
              <div className="flex flex-col items-start">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-white/50 font-bold uppercase tracking-wider mt-1">40+ Avaliações</span>
              </div>
              <div className="ml-4 pl-4 border-l border-white/20">
                 <svg className="w-6 h-6 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.545,6.477,2.545,12s4.477,10,10,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                 </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-black border border-white/10 p-8 hover:border-primary/50 transition-all duration-300 transform md:hover:-translate-y-2 relative">
              <div className="absolute top-0 right-8 w-8 h-1 bg-primary"></div>
              
              <div className="flex text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 font-sans italic mb-8 leading-relaxed">&quot;{review.text}&quot;</p>
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <span className="text-white font-heading font-bold uppercase tracking-wide text-sm">{review.name}</span>
                <span className="text-white/40 text-xs flex items-center gap-1 font-bold">
                  {review.date}
                </span>
              </div>
              
              {/* Structured Data for SEO */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org/",
                    "@type": "Review",
                    "itemReviewed": {
                      "@type": "LocalBusiness",
                      "name": "Pagani Custom Floripa"
                    },
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5"
                    },
                    "name": "Avaliação de Serviço Automotivo",
                    "author": {
                      "@type": "Person",
                      "name": review.name
                    },
                    "reviewBody": review.text
                  })
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
