"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ProjectData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  subtext: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ApiResponse {
  data: ProjectData;
  meta: Record<string, any>;
}

const ProjectPage: React.FC = () => {
  const [projectData, setProjectData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(
          "https://lovable-gift-31985371d0.strapiapp.com/api/projects/xk4ya6tekmic7e4irlq4hqfs?populate=*"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }
        const data = await response.json();
        setProjectData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, []);

  // Function to extract images from HTML content
  const extractImagesFromHTML = (htmlString: string): ProjectImage[] => {
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

  // Function to extract text content and split into paragraphs
  const extractParagraphs = (htmlString: string): string[] => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const spans = doc.querySelectorAll("span");
    const paragraphs: string[] = [];
    let currentParagraph = "";

    spans.forEach((span) => {
      const text = span.textContent?.trim();
      if (text) {
        if (currentParagraph) {
          currentParagraph += " " + text;
        } else {
          currentParagraph = text;
        }

        // Check if this is end of paragraph (rough heuristic)
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

    if (currentParagraph) {
      paragraphs.push(currentParagraph);
    }

    return paragraphs.filter((p) => p.length > 50); // Filter out short fragments
  };

  if (loading) {
    return (
      <main className="bg-white text-textblue min-h-screen px-4 md:px-12 py-10 w-full flex justify-center items-center font-monte">
        <div className="text-xl">Loading...</div>
      </main>
    );
  }

  if (error || !projectData?.data) {
    return (
      <main className="bg-white text-textblue min-h-screen px-4 md:px-12 py-10 w-full flex justify-center items-center font-monte">
        <div className="text-xl text-red-600">Failed to load project data</div>
      </main>
    );
  }

  const { data } = projectData;
  const images = extractImagesFromHTML(data.content);
  const paragraphs = extractParagraphs(data.content);

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
              Our <br /> <span className="text-textorange">Projects</span>
            </h1>
            <div className="bg-bgblue text-white font-bold text-lg px-6 py-5 rounded-full">
              {String(data.id).padStart(2, "0")}
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
          {images[0] && (
            <Image
              src={images[0].src}
              alt={images[0].alt}
              width={images[0].width}
              height={images[0].height}
              className="w-full md:w-1/2 rounded-md shadow-md object-cover"
            />
          )}
          <p className="text-sm text-gray-700 leading-relaxed md:w-1/2">
            {paragraphs[0] || data.description}
          </p>
        </div>

        {/* Image and Paragraph 2 */}
        <div className="w-full flex flex-col md:flex-row gap-6 items-center">
          <p className="text-sm text-gray-700 leading-relaxed md:w-1/2">
            {paragraphs[1] ||
              "Once operational, the Mumbai-Delhi HSR will significantly cut travel time between the two cities, boost regional economies, and foster sustainable growth. The route will be serviced by specially designed Shinkansen-style trains capable of speeds exceeding 300 km/h. Modern stations, advanced signaling systems, and dedicated tracks are key features."}
          </p>
          {images[1] && (
            <Image
              src={images[1].src}
              alt={images[1].alt}
              width={images[1].width}
              height={images[1].height}
              className="w-full md:w-1/2 rounded-md shadow-md object-cover"
            />
          )}
        </div>

        {/* Image and Paragraph 3 */}
        <div className="w-full flex flex-col md:flex-row gap-6 items-center">
          {images[2] && (
            <Image
              src={images[2].src}
              alt={images[2].alt}
              width={images[2].width}
              height={images[2].height}
              className="w-full md:w-1/2 rounded-md shadow-md object-cover"
            />
          )}
          <p className="text-sm text-gray-700 leading-relaxed md:w-1/2">
            {paragraphs[2] || paragraphs[0] || data.description}
          </p>
        </div>

        {/* Final Image */}
        {images[3] && (
          <Image
            src={images[3].src}
            alt={images[3].alt}
            width={images[3].width}
            height={images[3].height}
            className="w-full rounded-md shadow-md object-cover"
          />
        )}
      </div>
    </main>
  );
};

export default ProjectPage;
