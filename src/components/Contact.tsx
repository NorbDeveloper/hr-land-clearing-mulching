interface ContactProps {
  title: string;
  phone: string;
  callNow: string;
  getDirections: string;
}

export default function Contact({ title, phone, callNow, getDirections }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-10">{title}</h2>
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100">
          <p className="text-3xl sm:text-4xl font-bold text-primary mb-8">{phone}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12104193355"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-primary font-bold py-4 px-8 rounded-lg transition-all hover:scale-105 shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {callNow}
            </a>
            <a
              href="https://www.google.com/maps/place/HR+Land+Clearing%2F+Mulching/@29.1335729,-98.5022274,11.75z/data=!4m7!3m6!1s0xa858a8645ee670a1:0xe5e79018f0f1b9c7!8m2!3d29.145824!4d-98.0491225!15sCiVIUiBsYW5kIGNsZWFyaW5nL211bGNoaW5nIHNvdXRoIHRleGFzkgEVcmVhbF9lc3RhdGVfZGV2ZWxvcGVy4AEA!16s%2Fg%2F11z2kflqjp?entry=tts&g_ep=EgoyMDI2MDYxMC4wIPu8ASoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-lg transition-all hover:scale-105 shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {getDirections}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
