"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useProjects } from "@/hooks/useProjects"; // Updated hook

// --- Animation variants are unchanged ---
const fadeDownRight: Variants = {
  hidden: { opacity: 0, x: -50, y: -50 },
  visible: { opacity: 1, x: 0, y: 0 },
};
const fadeDownLeft: Variants = {
  hidden: { opacity: 0, x: 50, y: -50 },
  visible: { opacity: 1, x: 0, y: 0 },
};
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};
const zoomInUp: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 },
};
const zoomOutDown: Variants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: { opacity: 1, scale: 1 },
};

const ProjectPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: projectList, isLoading, isError } = useProjects();
  const project = projectList?.[currentIndex];

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToNext = () => {
    if (projectList && currentIndex < projectList.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  if (isLoading) {
    return <main className="w-full min-h-screen flex justify-center items-center"><div className="text-xl">Loading...</div></main>;
  }

  if (isError || !project) {
    return <main className="w-full min-h-screen flex justify-center items-center"><div className="text-xl text-red-600">Failed to load project data</div></main>;
  }
  
  const transition = { duration: 0.6, ease: "easeInOut" } as const;

  return (
    <main className="bg-white text-textblue min-h-screen px-4 md:px-12 py-10 w-full flex justify-center font-monte">
      <div className="w-full max-w-6xl flex flex-col items-center space-y-5">
        
        {/* Make sure this block is present */}
        <div className="w-full flex mt-10 justify-between text-sm text-textblue">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="hover:underline disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            &lt; Previous Project
          </button>
          <button
            onClick={goToNext}
            disabled={!projectList || currentIndex === projectList.length - 1}
            className="hover:underline disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            Next Project &gt;
          </button>
        </div>
        
        <div className="bg-gray-300 h-[1px] w-full mt-2 mb-8"></div>

        {/* The 'key' ensures the content re-animates when the project changes */}
        <div key={project.id} className="w-full">
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10">
              <div className="w-full flex flex-row md:flex-row gap-4 justify-between items-center">
                <motion.h1
                  variants={fadeDownRight}
                  initial="hidden"
                  animate="visible"
                  transition={transition}
                  className="text-4xl md:text-6xl font-bold text-textblue leading-snug font-raleway"
                >
                  Our <br /> <span className="text-textorange">Projects</span>
                </motion.h1>
                <div className="bg-bgblue text-white font-bold text-lg px-6 py-5 rounded-full">
                  {String(currentIndex + 1).padStart(2, "0")}
                </div>
                <div>
                  <motion.h2
                    variants={fadeDownLeft}
                    initial="hidden"
                    animate="visible"
                    transition={transition}
                    className="text-2xl md:text-4xl font-semibold font-raleway text-textblue"
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p
                    variants={fadeLeft}
                    initial="hidden"
                    animate="visible"
                    transition={transition}
                    className="text-sm text-gray-500"
                  >
                    {project.subtext}
                  </motion.p>
                </div>
              </div>
            </div>

            <div className="mt-8 w-full flex flex-col md:flex-row gap-6 items-start">
              {project.image1 && (
                <motion.div
                  variants={zoomInUp}
                  initial="hidden"
                  animate="visible"
                  transition={transition}
                  className="w-full md:w-1/2"
                >
                  <Image
                    src={project.image1}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="rounded-md shadow-md object-cover w-full"
                  />
                </motion.div>
              )}
              <motion.p
                variants={fadeLeft}
                initial="hidden"
                animate="visible"
                transition={transition}
                className="text-sm text-gray-700 leading-relaxed md:w-1/2 text-justify"
              >
                {project.description}
              </motion.p>
            </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;