import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-gray border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-12">
          
          {/* Brand & Info */}
          <div className="space-y-6">
            <Link href="/" className="relative h-20 w-56 block">
              <Image
                src="/images/logo.png"
                alt="Pagani Custom Floripa Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-white/90 font-sans max-w-sm mt-4 text-base">
              Especialistas em customização automotiva em Florianópolis-SC. Qualidade premium, atendimento personalizado e acabamento impecável.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/paganicustomfloripa/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <span className="sr-only">TikTok</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
                  <path d="M448 209.91a210.06 210.06 0 01-122.77-39.25V349.38A162.55 162.55 0 11185 188.31v89.89a74.62 74.62 0 1052.23 71.18V0l88 0a121.18 121.18 0 001.86 22.17h.05A122.18 122.18 0 00381 102.39a121.43 121.43 0 0067 20.14Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wider">Contato & Local</h3>
            <ul className="space-y-4 font-sans text-white/80">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  R. Marcelino Cândido Machado, 79<br/>
                  Costeira do Pirajubaé<br/>
                  Florianópolis - SC, 88048-005
                </span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+554832495596" className="hover:text-primary transition-colors hover:tracking-wide font-medium">(48) 3249-5596</a>
              </li>
              <li className="flex items-start mt-6">
                <svg className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm">
                  <p className="font-bold text-white mb-1">Horário de Funcionamento:</p>
                  <p>Segunda - Sexta: 08:00 – 18:00</p>
                  <p>Sábado: 08:00 – 12:00</p>
                  <p className="text-white/70 font-bold">Domingo: Fechado</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Map Embed */}
          <div className="h-64 lg:h-full min-h-[250px] relative w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4284.500342155242!2d-48.519966104458845!3d-27.651896816856084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273b03a33f2f4f%3A0xc2c22516c3b78808!2sPagani%20Custom%20Floripa!5e0!3m2!1spt-BR!2sbr!4v1774235206338!5m2!1spt-BR!2sbr" 
              className="absolute inset-0 w-full h-full" 
              style={{border:0}} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Pagani Custom Floripa"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-sans text-white/40 space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Pagani Custom Floripa. Todos os direitos reservados.</p>
          <p className="md:pr-24">
            Desenvolvido por <a href="https://focusarts.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors font-medium">Focus&Arts</a>
          </p>
        </div>
      </div>

    </footer>
  );
}
