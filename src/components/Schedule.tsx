interface ScheduleProps {
  title: string;
  days: { day: string; hours: string }[];
}

export default function Schedule({ title, days }: ScheduleProps) {
  const today = new Date().getDay();
  const dayIndex = today === 0 ? 6 : today - 1;

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">
          {title}
        </h2>
        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          {days.map((d, i) => (
            <div
              key={d.day}
              className={`flex justify-between items-center px-6 py-4 ${
                i === dayIndex ? 'bg-secondary/15 border-l-4 border-secondary' : ''
              } ${i !== days.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <span className={`font-semibold ${i === dayIndex ? 'text-secondary' : 'text-gray-800'}`}>
                {d.day}
              </span>
              <span className={i === dayIndex ? 'text-secondary font-bold' : 'text-gray-600'}>
                {d.hours}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          {today >= 1 && today <= 6 ? '' : ''}
        </p>
      </div>
    </section>
  );
}
