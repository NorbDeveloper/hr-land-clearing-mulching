interface HeroProps {
  title: string;
  subtitle: string;
  cta: string;
}

export default function Hero({ title, subtitle, cta }: HeroProps) {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/machine.jpeg"
          alt="HR Machine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1> 
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <button
          onClick={scrollToContact}
          className="inline-block bg-secondary hover:bg-secondary-light text-primary font-bold py-4 px-10 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
        >
          {cta}
        </button>
      </div>
    </section>
  );
}
