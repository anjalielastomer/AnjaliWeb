"use client";

import Image from "next/image";

const page = () => {
  return (
    <main className="bg-white text-textblue min-h-screen px-4 md:px-12 py-10 w-full flex justify-center font-monte">
      <div className="w-full max-w-6xl flex flex-col items-center space-y-10">
        {/* Top Navigation */}
        <div className="w-full flex justify-between text-sm text-textblue">
          <span>&lt; Previous Project</span>
          <span>Next Project &gt;</span>
        </div>

        {/* Header Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10">
         
          <div className="w-full flex flex-row md:flex-row gap-4 justify-between items-center">
             <h1 className="text-4xl md:text-6xl font-bold text-textblue leading-snug font-raleway">
            Our <br/> <span className="text-textorange">Projects</span>
          </h1>
            <div className="bg-bgblue text-white font-bold text-lg px-6 py-5 rounded-full">
              01
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold font-raleway text-textblue">
                Mumbai-Delhi High <br />
                <span className="text-textorange">Speed Rail</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Image and Paragraph 1 */}
        <div className="w-full flex flex-col md:flex-row gap-6 items-center">
          <Image
            src="/project/project1.jpg"
            alt="High Speed Train"
            width={500}
            height={300}
            className="w-full md:w-1/2 rounded-md shadow-md object-cover"
          />
          <p className="text-sm text-gray-700 leading-relaxed md:w-1/2">
            The Mumbai-Delhi High-Speed Rail (HSR) corridor is a proposed mega
            infrastructure project aimed at connecting India’s financial capital,
            Mumbai, with its national capital, Delhi, through a high-speed bullet
            train network. Spanning over 1,300 kilometers, this corridor is
            envisioned as part of India’s broader plan to modernize its
            transportation system and reduce travel time between major cities.
            The project is inspired by the success of the Mumbai-Ahmedabad
            High-Speed Rail line and is expected to incorporate advanced Japanese
            Shinkansen technology, ensuring high safety, reliability, and
            operational efficiency.
          </p>
        </div>

        {/* Image and Paragraph 2 */}
        <div className="w-full flex flex-col md:flex-row gap-6 items-center">
          <p className="text-sm text-gray-700 leading-relaxed md:w-1/2">
            Once operational, the Mumbai-Delhi HSR will significantly cut travel
            time between the two cities, boost regional economies, and foster
            sustainable growth. The route will be serviced by specially designed
            Shinkansen-style trains capable of speeds exceeding 300 km/h. Modern
            stations, advanced signaling systems, and dedicated tracks are key
            features. This ambitious project stands as a testament to India's
            vision for the future of public transportation—fast, safe, reliable,
            and environmentally friendly.
          </p>
          <Image
            src="/project/project2.jpg"
            alt="High Speed Train"
            width={500}
            height={300}
            className="w-full md:w-1/2 rounded-md shadow-md object-cover"
          />
        </div>

        {/* Image and Paragraph 3 */}
        <div className="w-full flex flex-col md:flex-row gap-6 items-center">
          <Image
            src="/project/project2.jpg"
            alt="High Speed Train"
            width={554}
            height={574}
            className="w-full md:w-1/2 rounded-md shadow-md object-cover"
          />
          <p className="text-sm text-gray-700 leading-relaxed md:w-1/2">
            The Mumbai-Delhi High-Speed Rail (HSR) corridor is a proposed mega
            infrastructure project aimed at connecting India’s financial capital,
            Mumbai, with its national capital, Delhi, through a high-speed bullet
            train network. Spanning over 1,300 kilometers, this corridor is
            envisioned as part of India’s broader plan to modernize its
            transportation system and reduce travel time between major cities.
            The project is inspired by the success of the Mumbai-Ahmedabad
            High-Speed Rail line and is expected to incorporate advanced Japanese
            Shinkansen technology, ensuring high safety, reliability, and
            operational efficiency.
          </p>
        </div>

        {/* Final Image */}
        <Image
          src="/project/project3.jpg"
          alt="Train on Track"
          width={1200}
          height={500}
          className="w-full rounded-md shadow-md object-cover"
        />
      </div>
    </main>
  );
};

export default page;
