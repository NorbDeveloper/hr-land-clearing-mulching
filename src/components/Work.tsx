interface WorkItem {
  title: string;
  description: string;
}

interface WorkProps {
  title: string;
  items: WorkItem[];
}

const images = [
  '/images/s1-fm.jpg',
  '/images/s2-lc.jpg',
  '/images/s3-bc-r.jpg',
  '/images/s5-pc.jpg',
  '/images/s6-trc.jpg',
  '/images/s7-sp.jpg',
];

export default function Work({ title, items }: WorkProps) {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-14">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={images[i % images.length]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-0 group-hover:-translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
