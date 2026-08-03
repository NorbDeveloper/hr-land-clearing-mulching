export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    home: string;
    services: string;
    work: string;
    about: string;
    schedule: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitleTag: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    items: { title: string; description: string }[];
  };
  work: {
    title: string;
    items: { title: string; description: string }[];
  };
  about: {
    title: string;
    badge: string;
    description: string;
    features: string[];
    serviceAreaTitle: string;
    serviceAreaDescription: string;
  };
  schedule: {
    title: string;
    days: { day: string; hours: string }[];
  };
  contact: {
    title: string;
    phone: string;
    callNow: string;
    getDirections: string;
  };
  footer: {
    rights: string;
  };
}
