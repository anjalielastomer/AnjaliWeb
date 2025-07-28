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
  data: ProjectData[];
  meta: Record<string, any>;
}

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
        setProject(json.data[0]); // Using only the first project
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
