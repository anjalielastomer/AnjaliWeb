"use client"
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Mumbai-Delhi High Speed Rail',
    description: "Supply of premium rail pads for India's first high-speed rail corridor.",
    status: 'Completed 2023',
    imageUrl: '/Projects 1.png',
  },
  {
    id: 2,
    title: 'Bangalore Metro Phase 3',
    description: 'Comprehensive elastomeric Solutions for metro rail expansion project.',
    status: 'Ongoing',
    imageUrl: '/Projects 2.png',
  },
  {
    id: 3,
    title: 'Eastern Freight Corridor',
    description: 'Heavy-duty bearing pads for dedicated freight corridor infrastructure.',
    status: 'Completed 2022',
    imageUrl: '/Projects 3.png',
  },
  {
    id: 4,
    title: 'Mumbai Metro Line 3',
    description: 'Supply of premium rail pads for 33.5 km underground metro line.',
    status: 'Completed 2023',
    imageUrl: '/Projects 4.png',
  },
  {
    id: 5,
    title: 'Delhi-Meerut RRTS',
    description: 'Advanced fastening systems for rapid rail transit system.',
    status: 'Ongoing',
    imageUrl: '/Projects 5.png',
  },
  {
    id: 6,
    title: 'Chennai Suburban Railway',
    description: 'Complete elastomeric solution package for 160 km network.',
    status: 'Completed 2022',
    imageUrl: '/Projects 6.png',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-bgcolour py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-monte text-textblue mb-6">
          Featured <span className="text-textorange">Projects</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
          {/* Fixed Text Box */}
          <div className="lg:w-1/5 flex flex-col justify-between">
            <div>
              <p className="text-3xl font-raleway text-textblue mb-8 leading-relaxed">
                Delivering <br />
                Projects across <span className="text-textorange">India</span> and <br />
                South-East <span className="text-textorange">Asia</span>
              </p>
            </div>

            <a
              href="#"
              className="group text-textorange font-monte text-3xl font-medium flex items-center transition-all duration-300"
            >
              <span className="text-textorange">Explore</span>
              <span className="text-textblue ml-1">All</span>
              <Image src='/arrow.svg' alt='arrow' width={27} height={27} className="group-hover:hidden" />
              <Image src='/send.svg' alt='arrow' width={27} height={27} className="hidden group-hover:block" />
            </a>
          </div>

          {/* Project Cards with Smooth Scroll */}
          <div className="lg:w-4/5">
            <div className="relative overflow-hidden w-full">
              <div
                className="flex gap-6 py-2 w-max animate-scroll-infinite"
              >
                {/* Repeat projects twice for seamless effect */}
                {[...projects, ...projects].map((project, idx) => (
                  <ProjectCard key={`${project.id}-${idx}`} project={project} />
                ))}
              </div>

              {/* Smooth infinite scroll animation */}
              <style jsx>{`
                @keyframes scroll-infinite {
                  0% {
                    transform: translateX(0%);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll-infinite {
                  animation: scroll-infinite 30s linear infinite;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group cursor-pointer flex-shrink-0 w-80 sm:w-96">
      <div className="relative w-full h-[365px] overflow-hidden rounded-[12px]">
        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm p-4 group-hover:bg-orange-500 transition-colors duration-300">
          <h3 className="text-orange-500 font-monte font-semibold text-[15px] mb-2 leading-snug group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-[#505050] font-raleway text-[14px] leading-snug mb-3 group-hover:text-white transition-colors duration-300">
            {project.description}
          </p>
          <p className="flex justify-between text-[#7A7A7A] font-raleway text-[13px] group-hover:text-white transition-colors duration-300">
            {project.status}
            <Image src="/send.png" alt="send" width={25} height={4} className="animate-blink group-hover:hidden" />
            <Image src="/send-white.png" alt="send" width={25} height={4} className="animate-blink hidden group-hover:block" />
          </p>
        </div>

        {/* Project Number Badge */}
        <div className="absolute bottom-28 right-4 bg-orange-500 text-white font-monte text-lg font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white group-hover:text-orange-500 transition-all duration-300 z-20">
          {`0${project.id}`}
        </div>
      </div>
    </div>
  );
}