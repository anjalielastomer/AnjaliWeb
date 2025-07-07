import Image from 'next/image';

const logos = [
  '/aboutus/ournotableclientele01.png',
  '/aboutus/ournotableclientele02.png',
  '/aboutus/ournotableclientele03.png',
  '/aboutus/ournotableclientele04.png',
  '/aboutus/ournotableclientele05.png',
  '/aboutus/ournotableclientele06.png',
  '/aboutus/ournotableclientele07.png',
  '/aboutus/ournotableclientele08.png',
];

const NotableClientele: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        Our Notable{' '}
        <span className="text-orange-500">
          Clientele
        </span>
      </h2>
      <p className="max-w-3xl mx-auto text-blue-900 mb-10 leading-relaxed">
        Our clients in India include some of the country's most distinguished organisations. We are a significant exporter of track goods to Bangladesh and Sri Lanka Railways. Using high-quality materials, we offer professional and dependable services.
      </p>
      <div className="flex flex-wrap justify-center gap-10 items-center">
        {logos.map((logo, idx) => (
          <div key={idx} className="flex justify-center items-center w-24 h-24">
            <Image
              src={logo}
              alt={`Logo ${idx + 1} of notable clientele`}
              width={96}
              height={96}
              className="object-contain"
              priority={idx < 3} // prioritize first few logos for better loading
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NotableClientele;

