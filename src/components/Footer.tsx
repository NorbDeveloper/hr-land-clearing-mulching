interface FooterProps {
  rights: string;
}

export default function Footer({ rights }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="/images/logo.jpeg" alt="HR" className="h-10 w-10 rounded-full object-cover border-2 border-secondary" />
          <span className="font-bold text-lg text-accent">HR Land Clearing & Mulching</span>
        </div>
        <p className="text-sm">
          &copy; {year} HR Land Clearing & Mulching. {rights}
        </p>
      </div>
    </footer>
  );
}
