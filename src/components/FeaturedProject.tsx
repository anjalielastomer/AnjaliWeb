"use client"
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useFeaturedProjects } from '@/hooks/useProjects';
import { motion, Variants } from 'framer-motion';

// Define variants and the Heading component outside the main component
const slideInFromLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Heading = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={slideInFromLeft}
    viewport={{ once: false, amount: 0.5 }}
  >
    <h2 className="text-3xl sm:text-4xl font-bold font-raleway text-textblue mb-6 pb-8">
      Featured <span className="text-textorange">Projects</span>
    </h2>
  </motion.div>
);


export default function FeaturedProjects() {
  const [isHovering, setIsHovering] = useState(false);
  const [isExploreAllHovered, setIsExploreAllHovered] = useState(false);

  const { data: projects, isLoading, error } = useFeaturedProjects();
  
  
  if (isLoading) {
    return (
      <section className="bg-bgcolour py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Heading />
          <div className="flex justify-center items-center h-64">
            <div className="text-textblue">Loading projects...</div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="bg-bgcolour py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Heading />
          <div className="flex justify-center items-center h-64">
            <div className="text-red-500">Error loading projects</div>
          </div>
        </div>
      </section>
    );
  }

  // No projects state
  if (!projects || projects.length === 0) {
    return (
      <section className="bg-bgcolour py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Heading />
          <div className="flex justify-center items-center h-64">
            <div className="text-textblue">No featured projects available</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-bgcolour py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Heading />
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
          {/* Left Text Box (Animated) */}
          <motion.div
            className="lg:w-1/5 flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            variants={slideInFromLeft}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              <p className="text-[28px] font-medium text-textblue md:mb-8 leading-13">
                Delivering <br />
                Projects across <span className="text-textorange">
                  India
                </span>{" "}
                and <br />
                South-East <span className="text-textorange">Asia</span>
              </p>
            </div>

            <div className="w-full flex justify-start items-center mt-15">
              <Link
                href='/projects'
                className="group transition-colors pr-14 py-3 rounded-2xl text-[28px] font-normal items-center gap-2 font-raleway hidden md:flex"
                onMouseEnter={() => setIsExploreAllHovered(true)}
                onMouseLeave={() => setIsExploreAllHovered(false)}
              >
                <span
                  className="transition-colors duration-300"
                  style={{
                    color: isExploreAllHovered ? 'var(--textblue)' : 'var(--textorange)'
                  } as React.CSSProperties}
                >
                  Explore
                </span>
                <span
                  className="transition-colors duration-300"
                  style={{
                    color: isExploreAllHovered ? 'var(--textorange)' : 'var(--textblue)'
                  } as React.CSSProperties}
                >
                  All
                </span>
                <Image src='/arrow.svg' alt='arrow' width={27} height={27} className="group-hover:hidden" />
                <Image src='/send.svg' alt='arrow' width={27} height={27} className="hidden group-hover:block" />
              </Link>
            </div>
          </motion.div>

          {/* Project Cards (Unchanged) */}
          <div className="lg:w-4/5">
            <div
              className="relative overflow-hidden w-full"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div
                className="flex gap-6 py-2 w-max animate-scroll-infinite"
                style={{ animationPlayState: isHovering ? 'paused' : 'running' }}
              >
                {[...projects,...projects].map((project, idx) => (
                  <ProjectCard key={`${project.id}-${idx}`} project={project} index={idx % projects.length} />
                ))}
              </div>

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
          <div className="w-full flex justify-center items-center mt-5">
              <Link
                href='/projects'
                className="group transition-colors py-3 rounded-2xl text-[28px] font-normal items-center gap-2 font-raleway flex md:hidden"
                onMouseEnter={() => setIsExploreAllHovered(true)}
                onMouseLeave={() => setIsExploreAllHovered(false)}
              >
                <span
                  className="transition-colors duration-300"
                  style={{
                    color: isExploreAllHovered ? 'var(--textblue)' : 'var(--textorange)'
                  } as React.CSSProperties}
                >
                  Explore
                </span>
                <span
                  className="transition-colors duration-300"
                  style={{
                    color: isExploreAllHovered ? 'var(--textorange)' : 'var(--textblue)'
                  } as React.CSSProperties}
                >
                  All
                </span>
                <Image src='/arrow.svg' alt='arrow' width={27} height={27} className="group-hover:hidden" />
                <Image src='/send.svg' alt='arrow' width={27} height={27} className="hidden group-hover:block" />
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}

// ProjectCard component remains unchanged
function ProjectCard({ project, index }: {
  project: {
    id: string;
    title: string;
    description: string;
    subtext: string;
    content: string;
    image1: string;
    image2: string;
    createdAt: string;
  };
  index: number;
}) {
  return (
    <div className="group cursor-pointer flex-shrink-0 w-80 sm:w-96">
      <div className="relative w-full h-[365px] overflow-hidden rounded-[12px]">
        <div className="relative w-full h-full">
          <Image
            src={project.image1 || '/placeholder.jpg'}
            alt={project.title}
            fill
            className="object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {project.image2 && (
            <Image
              src={project.image2}
              alt={`${project.title} New`}
              fill
              className="object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm p-4 group-hover:bg-[var(--textorange)] transition-colors duration-300">
          <h3 className="text-[var(--textorange)] font-monte font-medium text-lg mb-2 leading-snug group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-[#334155] text-base leading-snug mb-3 group-hover:text-white transition-colors duration-300">
            {project.description}
          </p>
          <p className="flex justify-between text-textblue font-raleway text-[#193055] opacity-75 text-[13px] group-hover:text-white transition-colors duration-300">
            {project.subtext}
            <Image
              src="/send.png"
              alt="send"
              width={25}
              height={4}
              className="animate-blink group-hover:hidden"
            />
            <Image
              src="/send-white.png"
              alt="send"
              width={25}
              height={4}
              className="animate-blink hidden group-hover:block"
            />
          </p>
        </div>

        <div className="absolute bottom-31 right-4 bg-[var(--textorange)] text-white font-monte text-lg font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white group-hover:text-[var(--textorange)] transition-all duration-300 z-20">
          {`0${index + 1}`}
        </div>
      </div>
    </div>
  );
}