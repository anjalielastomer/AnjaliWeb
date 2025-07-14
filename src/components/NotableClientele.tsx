import Image from 'next/image';

const logos = [
  '/aboutus/logo1.png',
  '/aboutus/logo2.png',
  '/aboutus/logo3.png',
  '/aboutus/logo4.png',
  '/aboutus/logo5.png',
  '/aboutus/logo6.png',
  '/aboutus/logo7.png',
  '/aboutus/logo8.png',
  '/aboutus/logo9.png',
  '/aboutus/logo10.png',
  '/aboutus/logo11.png',
  '/aboutus/logo12.png',
  '/aboutus/logo13.png',
  '/aboutus/logo14.png',
  '/aboutus/logo1.png',
  '/aboutus/logo2.png',
  '/aboutus/logo3.png',
  '/aboutus/logo4.png',
  '/aboutus/logo5.png',
  '/aboutus/logo6.png',
  '/aboutus/logo7.png',
  '/aboutus/logo8.png',
  '/aboutus/logo9.png',
  '/aboutus/logo10.png',
  '/aboutus/logo11.png',
  '/aboutus/logo12.png',
  '/aboutus/logo13.png',
  '/aboutus/logo14.png',
];

const NotableClientele: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 text-center overflow-hidden">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        Our Notable{' '}
        <span className="text-orange-500">Clientele</span>
      </h2>
      <p className="max-w-3xl mx-auto text-blue-900 mb-10 leading-relaxed">
        Our clients in India include some of the country's most distinguished organisations. We are a significant exporter of track goods to Bangladesh and Sri Lanka Railways. Using high-quality materials, we offer professional and dependable services.
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 animate-slideX">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center w-24 h-24 shrink-0"
            >
              <Image
                src={logo}
                alt={`Logo ${idx + 1} of notable clientele`}
                width={96}
                height={96}
                className="object-contain"
                priority={idx < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotableClientele;
