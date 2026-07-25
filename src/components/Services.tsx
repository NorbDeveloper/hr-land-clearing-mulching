interface ServiceItem {
  title: string;
  description: string;
}

interface ServicesProps {
  title: string;
  items: ServiceItem[];
}

const icons = [
  'M12 3L4 9v12h16V9l-8-6z',
  'M2 20L8 8l6 8 4-6 4 10H2z',
  'M12 2a7 7 0 0 0-7 7c0 4 7 11 7 11s7-7 7-11a7 7 0 0 0-7-7z',
  'M4 4v16M8 4v16M12 4v16M16 4v16M20 4v16',
  'M3 12l9-9 9 9M9 21V12h6v9',
  'M4 20L20 4M12 4v16M4 12h16',
  'M12 2v20M2 12h20M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6',
  'M13 2L4 14h7l-1 8 9-12h-7l1-8z',
  'M12 2c-4 6-7 9-7 12a7 7 0 0 0 14 0c0-3-3-6-7-12z',
];

export default function Services({ title, items }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-14">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              <div className="h-1 w-full bg-gradient-to-r from-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="p-6 pt-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 group-hover:from-primary group-hover:to-primary-light flex items-center justify-center mx-auto mb-5 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                  <svg
                    className="w-7 h-7 text-secondary group-hover:text-accent transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={icons[i % icons.length]} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-primary text-center mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary/0 via-secondary/50 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
