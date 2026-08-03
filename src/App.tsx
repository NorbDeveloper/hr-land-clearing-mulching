import { useLanguage } from './hooks/useLanguage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { lang, t, changeLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar t={t.nav} lang={lang} onChangeLanguage={changeLanguage} />
      <Hero title={t.hero.title} subtitleTag={t.hero.subtitleTag} subtitle={t.hero.subtitle} cta={t.hero.cta} />
      <Services title={t.services.title} items={t.services.items} />
      <Work title={t.work.title} items={t.work.items} />
      <About
        title={t.about.title}
        badge={t.about.badge}
        description={t.about.description}
        features={t.about.features}
        serviceAreaTitle={t.about.serviceAreaTitle}
        serviceAreaDescription={t.about.serviceAreaDescription}
      />
      <Schedule title={t.schedule.title} days={t.schedule.days} />
      <Contact
        title={t.contact.title}
        phone={t.contact.phone}
        callNow={t.contact.callNow}
        getDirections={t.contact.getDirections}
      />
      <Footer rights={t.footer.rights} />
    </div>
  );
}
