"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useProjectData } from "@/hooks/useOurProjectData";
import { useProjects, useProject } from "@/hooks/useProjects";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface NavigationProject {
  id: string;
  title: string;
}

interface NavigationState {
  previousProject: NavigationProject | null;
  nextProject: NavigationProject | null;
}

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
  const { id } = useParams();
  const { data: project, isLoading: projectLoading, isError } = useProject(id as string);
  const { data: allProjects, isLoading: listLoading } = useProjects();

  // Helper functions to extract content from HTML
  const extractImagesFromHTML = (htmlString: string): ProjectImage[] => {
    if (typeof window === "undefined") return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const images = doc.querySelectorAll("img");
    return Array.from(images).map((img: HTMLImageElement) => ({
      src: img.src,
      alt: img.alt,
      width: img.width || 500,
      height: img.height || 300,
    }));
  };

  const extractParagraphs = (htmlString: string): string[] => {
    if (typeof window === "undefined") return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const spans = doc.querySelectorAll("span, p");
    const paragraphs: string[] = [];
    let currentParagraph = "";

    spans.forEach((span) => {
      const text = span.textContent?.trim();
      if (text) {
        currentParagraph += currentParagraph ? " " + text : text;
        if (
          text.endsWith(".") ||
          text.endsWith("efficiency.") ||
          text.endsWith("km/h,")
        ) {
          paragraphs.push(currentParagraph);
          currentParagraph = "";
        }
      }
    });

    if (currentParagraph) paragraphs.push(currentParagraph);
    return paragraphs.filter((p) => p.length > 50);
  };

  // Fix the currentIndex logic
  const currentIndex = allProjects?.findIndex(p => p.id === id) ?? -1;

  // Early return should check for valid index
  if (currentIndex === -1 && !projectLoading && !listLoading && allProjects) {
    return (
      <main className="w-full min-h-screen flex justify-center items-center">
        <div className="text-xl text-red-600">Project not found</div>
      </main>
    );
  }

  // Fix navigation logic
  const previousProject = (allProjects && currentIndex > 0) ? allProjects[currentIndex - 1] : null;
  const nextProject = (allProjects && currentIndex !== -1 && currentIndex < allProjects.length - 1)
    ? allProjects[currentIndex + 1]
    : null;

  if (projectLoading || listLoading) {
    return (
      <main className="bg-white text-textblue min-h-screen px-4 md:px-12 py-10 w-full flex justify-center items-center font-monte">
        <div className="text-xl">Loading...</div>
      </main>
    );
  }

  if (isError || !project) {
    return (
      <main className="bg-white text-textblue min-h-screen px-4 md:px-12 py-10 w-full flex justify-center items-center font-monte">
        <div className="text-xl text-red-600">Failed to load project data</div>
      </main>
    );
  }

  // Extract images and paragraphs from project content
  const images = typeof project.content === 'string'
    ? extractImagesFromHTML(project.content)
    : [];
  const paragraphs = typeof project.content === 'string'
    ? extractParagraphs(project.content)
    : [];

  const transition = { duration: 0.6, ease: "easeInOut" } as const;

  return (
    <main className="bg-white text-textblue min-h-screen px-4 md:px-12 py-30 w-full flex justify-center font-monte">
      <div className="w-full max-w-6xl flex flex-col items-center space-y-5">
        {/* Navigation */}
        <div className="w-full mt-10 flex justify-between text-sm text-textblue">
          {previousProject ? (
            <Link href={`/projects/${previousProject.id}`} className="hover:text-textorange">
              &lt; Previous Project
            </Link>
          ) : (
            <span className="text-gray-400 cursor-not-allowed">&lt; Previous Project</span>
          )}
          {nextProject ? (
            <Link href={`/projects/${nextProject.id}`} className="hover:text-textorange">
              Next Project &gt;
            </Link>
          ) : (
            <span className="text-gray-400 cursor-not-allowed">Next Project &gt;</span>
          )}
        </div>

        <div className="bg-gray-300 h-[1px] w-screen"></div>

        {/* Header Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10 py-8 md:py-12">
          <div className="w-full flex flex-row md:flex-row gap-6 md:gap-8 justify-between items-center">
            <motion.h1
              variants={fadeDownRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={transition}
              className="text-4xl md:text-6xl font-bold text-textblue leading-snug font-raleway"
            >
              Our <br /> <span className="text-textorange">Projects</span>
            </motion.h1>

            <div className="bg-bgblue text-white font-bold text-lg px-6 py-5 rounded-full shrink-0">
              {String(currentIndex + 1).padStart(2, "0")}
            </div>

            <div className="max-w-md">
              <motion.h2
                variants={fadeDownLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={transition}
                className="text-2xl md:text-4xl font-semibold font-raleway text-textblue leading-tight"
              >
                {project.title}
              </motion.h2>
              <motion.p
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={transition}
                className="text-sm text-gray-500 mt-2"
              >
                {project.subtext}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Image and Paragraph 1 
        <div className="w-full flex flex-col md:flex-row gap-6 items-start">
          {images[0] && (
            <motion.div
              variants={zoomInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={transition}
              className="w-full md:w-1/2"
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                width={images[0].width}
                height={images[0].height}
                className="rounded-md shadow-md object-cover w-full"
              />
            </motion.div>
          )}
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={transition}
            className="text-sm text-gray-700 leading-relaxed md:w-1/2 text-justify"
          >
            {project.description || "Project description goes here."}
          </motion.p>
        </div>*/}

        <div className="bg-[var(--bgcolour)] w-screen">
          {/* Image and Paragraph 2 
          <div className="max-w-6xl mx-auto pt-20 px-4 flex flex-col md:flex-row-reverse gap-6 items-center">
            {images[1] && (
              <motion.div
                variants={zoomInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={transition}
                className="w-full md:w-1/2"
              >
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  width={images[1].width}
                  height={images[1].height}
                  className="rounded-md shadow-md object-cover w-full"
                />
              </motion.div>
            )}
          </div>*/}

          {/* Full Content Section with proper HTML rendering */}
          <div className="max-w-6xl mx-auto py-12 px-4">
            {typeof project.content === 'string' && (
              <div
                dangerouslySetInnerHTML={{ __html: project.content }}
                className="
                  max-w-none

                  [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-bold [&>h3]:text-textblue [&>h3]:font-raleway
                  [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:border-l-4 [&>h3]:border-textorange [&>h3]:pl-4
                  first:[&>h3]:mt-0

                  [&>p]:text-gray-700 [&>p]:text-sm [&>p]:md:text-base [&>p]:leading-relaxed [&>p]:mb-4

                  [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:my-4 [&>ul]:space-y-2
                  [&>ul>li]:text-gray-700 [&>ul>li]:text-sm [&>ul>li]:md:text-base [&>ul>li]:leading-relaxed
                  [&>ul>li]:marker:text-textorange
                  [&>ul>li>p]:mb-0

                  [&_strong]:font-semibold [&_strong]:text-gray-900

                  [&>figure]:my-8 [&>figure]:rounded-lg [&>figure]:overflow-hidden [&>figure]:shadow-md
                  [&>figure>img]:w-full [&>figure>img]:h-auto [&>figure>img]:object-cover
                "
              />
            )}
          </div>
        </div>

        {/* Final Image */}
        {images[3] && (
          <motion.div
            variants={zoomOutDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={transition}
            className="w-full"
          >
            <Image
              src={images[3].src}
              alt={images[3].alt}
              width={images[3].width}
              height={images[3].height}
              className="rounded-md shadow-md object-cover w-full"
            />
          </motion.div>
        )}

      </div>
    </main>
  );
};

export default ProjectPage;