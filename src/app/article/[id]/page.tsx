"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
export interface Section {
  heading: string;
  content: string;
}

export interface Project {
  id: number;
  title: string;
  author: string;
  date: string;
  tags: string[];
  sections: Section[];
  conclusion: string;
  coverImage: string;
  additionalImage: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "The Future of Railroads: Innovation on Track and Track Systems for High Speed Transport Systems",
    author: "Sachi Chen",
    date: "October 15, 2023",
    tags: ["Future", "Railroads", "Track Systems", "High-Speed Transport"],
    sections: [
      {
        heading: "1. Electrification and Green Energy",
        content:
          "The future of railroads is electric. With global climate goals becoming more aggressive and governments pushing for decarbonization, many rail systems are adopting electrified tracks powered by renewable sources. Countries like Japan and Germany have already made major strides, while others are piloting hydrogen-powered trains. These systems reduce emissions, are quieter, and improve operational efficiency."
      },
      {
        heading: "2. Hyperloop and Magnetic Levitation (Maglev)",
        content:
          "Next-generation high-speed transport is reimagined with rail travel systems today moving towards hyperloop and maglev. These systems offer reduced friction and aerodynamic drag, enabling ultra-high-speed travel. Japan’s Chuo Shinkansen maglev line and Elon Musk’s hyperloop concept are leading examples. Though expensive, they are projected to transform inter-city mobility and logistics in the coming decades."
      },
      {
        heading: "3. Automation and AI-Powered Trains",
        content:
          "Much like autonomous cars, trains are also becoming smarter and more self-sufficient. Leveraging AI, machine learning, and big data, future trains will be able to predict maintenance issues, adjust schedules in real-time, and manage energy consumption more efficiently. European rail operators are already testing automated train pilots and predictive analytics to reduce delays and optimize usage."
      }
    ],
    conclusion:
      "The future of railroads is fast, green, smart, and integrated. Whether it’s hyperloop tubes slicing through deserts or AI-driven trains gliding on maglev tracks, innovation in rail transport holds immense potential. More than just a means of moving people and goods, railways are becoming engines of economic growth and climate action. As cities expand and global population increases, the investment toward a smarter, cleaner, and faster railway system is not just desirable but indispensable.",
    coverImage: "/railroad-cover.jpg",
    additionalImage: "/images/train.jpg"
  },
  {
    id: 2,
    title: "Mastering CSS Grid: Advanced Layout Techniques",
    author: "Sachi Chen",
    date: "October 15, 2023",
    tags: ["Future", "Railroads", "Track Systems", "High-Speed Transport"],
    sections: [
      {
        heading: "1. Electrification and Green Energy",
        content:
          "The future of railroads is electric. With global climate goals becoming more aggressive and governments pushing for decarbonization, many rail systems are adopting electrified tracks powered by renewable sources. Countries like Japan and Germany have already made major strides, while others are piloting hydrogen-powered trains. These systems reduce emissions, are quieter, and improve operational efficiency."
      },
      {
        heading: "2. Hyperloop and Magnetic Levitation (Maglev)",
        content:
          "Next-generation high-speed transport is reimagined with rail travel systems today moving towards hyperloop and maglev. These systems offer reduced friction and aerodynamic drag, enabling ultra-high-speed travel. Japan’s Chuo Shinkansen maglev line and Elon Musk’s hyperloop concept are leading examples. Though expensive, they are projected to transform inter-city mobility and logistics in the coming decades."
      },
      {
        heading: "3. Automation and AI-Powered Trains",
        content:
          "Much like autonomous cars, trains are also becoming smarter and more self-sufficient. Leveraging AI, machine learning, and big data, future trains will be able to predict maintenance issues, adjust schedules in real-time, and manage energy consumption more efficiently. European rail operators are already testing automated train pilots and predictive analytics to reduce delays and optimize usage."
      }
    ],
    conclusion:
      "The future of railroads is fast, green, smart, and integrated. Whether it’s hyperloop tubes slicing through deserts or AI-driven trains gliding on maglev tracks, innovation in rail transport holds immense potential. More than just a means of moving people and goods, railways are becoming engines of economic growth and climate action. As cities expand and global population increases, the investment toward a smarter, cleaner, and faster railway system is not just desirable but indispensable.",
    coverImage: "/images/tunnel.jpg",
    additionalImage: "/images/train.jpg"
  }
];

const ProjectPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();

  const projectId = Number(id);
  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[currentIndex];

  const goToProject = (offset: number) => {
    const newIndex = currentIndex + offset;
    if (newIndex >= 0 && newIndex < projects.length) {
      router.push(`/article/${projects[newIndex].id}`);
    }
  };

  if (!project) return <div className="px-8 py-6">Project not found</div>;

  return (
    <div className="w-full min-h-screen px-10 mt-20">
      <div className="text-sm flex justify-between text-blue-500">
        <button
          onClick={() => goToProject(-1)}
          disabled={currentIndex === 0}
          className="hover:underline disabled:text-gray-400"
        >
          &lt; Previous Article
        </button>

        <button
          onClick={() => goToProject(1)}
          disabled={currentIndex === projects.length - 1}
          className="hover:underline disabled:text-gray-400"
        >
          Next Article &gt;
        </button>
      </div>
      <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl font-semibold mt-6">{project.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {project.author} • Published on {project.date}
      </p>

      <Image src={project.coverImage} alt="Cover" width={832} height={368} className="w-full rounded-lg my-4" />

      {project.sections.map((sec, i) => (
        <div key={i} className="mb-6">
          <h2 className="font-semibold text-lg text-orange-600">{sec.heading}</h2>
          <p className="text-gray-700 mt-2">{sec.content}</p>
        </div>
      ))}

      <Image src={project.additionalImage} alt="Cover" width={832} height={368} className="w-full rounded-lg my-4" />

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800">Conclusion: Tracks to Tomorrow</h2>
        <p className="text-gray-700 mt-2">{project.conclusion}</p>
      </div>
      </div>
    </div>
  );
};

export default ProjectPage;
