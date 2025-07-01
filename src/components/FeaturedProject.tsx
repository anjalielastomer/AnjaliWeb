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
              <p className="text-lg font-raleway text-textblue mb-8 leading-relaxed">
                Delivering <br />
                Projects across <span className="text-textorange">India</span> and <br />
                South-East <span className="text-textorange">Asia</span>
              </p>
            </div>

            <a 
              href="#" 
              className="text-textorange font-monte text-lg font-medium flex items-center hover:underline transition-all duration-300"
            >
              <span className="text-textorange">Explore </span> 
              <span className="text-textblue ml-1">All</span> 
              <Image src='/arrow.svg' alt='arrow' width={20} height={20} className="ml-2"/>
            </a>
          </div>

          {/* Project Cards with Animation */}
          <div className="lg:w-4/5">
            <div className="relative overflow-hidden w-full">
              <div
                className="flex gap-6 py-2 w-max"
                style={{
                  animation: 'scroll-bounce 8s linear infinite alternate',
                }}
              >
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              {/* CSS for back and forth animation */}
              <style jsx>{`
                @keyframes scroll-bounce {
                  0% {
                    transform: translateX(0%);
                  }
                  100% {
                    transform: translateX(calc(-100% + 100vw));
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Separate Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group cursor-pointer flex-shrink-0 w-80 sm:w-96">
      <div className="relative w-full h-[365px] overflow-hidden rounded-[12px] shadow-lg hover:shadow-xl transition-shadow duration-300">
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
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm p-4">
          <h3 className="text-textorange font-monte font-semibold text-[15px] mb-2 leading-snug">
            {project.title}
          </h3>
          <p className="text-[#505050] font-raleway text-[14px] leading-snug mb-3">
            {project.description}
          </p>
          <p className="text-[#7A7A7A] font-raleway text-[13px]">{project.status}</p>
        </div>

        {/* Project Number Badge */}
        <div className="absolute bottom-26 right-4 bg-textorange text-white font-monte text-lg font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-20">
          {`0${project.id}`}
        </div>
      </div>
    </div>
  );
}
