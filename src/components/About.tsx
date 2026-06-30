interface AboutProps {
  title: string;
  badge: string;
  description: string;
  features: string[];
  serviceAreaTitle: string;
  serviceAreaDescription: string;
}

export default function About({
  title,
  badge,
  description,
  features,
  serviceAreaTitle,
  serviceAreaDescription,
}: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-block bg-secondary text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              {badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">{title}</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">{description}</p>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">{serviceAreaTitle}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{serviceAreaDescription}</p>
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1x0!2d-98.0491225!3d29.145824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa858a8645ee670a1%3A0xe5e79018f0f1b9c7!2sHR%20Land%20Clearing%2F%20Mulching!5e1!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HR Land Clearing & Mulching Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
