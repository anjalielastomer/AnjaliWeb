"use client";

import { useEffect, useState } from "react";

interface ProjectImageFormat {
  url: string;
  width: number;
  height: number;
}

interface CoverImage {
  id: number;
  name: string;
  url: string;
  width: number;
  height: number;
  formats: Record<string, ProjectImageFormat>;
}

export interface ProjectData {
  id: string; // Changed to string to match documentId
  title: string;
  description: string;
  subtext: string;
  content: string;
  createdAt: string;
  image1?: string;
  image2?: string;
}

interface StrapiProjectData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  subtext: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover_images?: CoverImage[];
}

interface ApiResponse {
  data: StrapiProjectData[];
  meta: Record<string, any>;
}

// Transform function to match the format used in useProjects
const transformProject = (strapiProject: StrapiProjectData): ProjectData => {
  const images = strapiProject.cover_images || [];
  const getImageUrl = (img?: CoverImage): string =>
    img?.formats?.medium?.url || img?.formats?.small?.url || img?.url || "";

  return {
    id: strapiProject.documentId, // Use documentId as id for consistency
    title: strapiProject.title,
    description: strapiProject.description,
    subtext: strapiProject.subtext,
    content: strapiProject.content,
    image1: getImageUrl(images[0]),
    image2: getImageUrl(images[1]),
    createdAt: strapiProject.createdAt,
  };
};

export const useProjectData = () => {
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/projects?populate=*`
        );
        if (!res.ok) throw new Error("Failed to fetch project data");
        const json: ApiResponse = await res.json();
        if (json.data.length > 0) {
          setProject(transformProject(json.data[0])); // Transform the first project
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { project, loading, error };
};