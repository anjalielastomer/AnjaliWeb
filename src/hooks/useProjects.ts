import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { projectsService } from "@/lib/projectService";
import {
  StrapiProjectsResponse,
  StrapiProject,
  Project,
  StrapiImage
} from "@/types/projects";

interface UseProjectsParams {
  page?: number;
  pageSize?: number;
}

interface UseProjectsOptions
  extends Omit<
    UseQueryOptions<StrapiProjectsResponse>,
    "queryKey" | "queryFn"
  > {}

export const useProjects = (
  params?: UseProjectsParams,
  options?: UseProjectsOptions
) => {
  const queryKey = ["projects", params];

  return useQuery<StrapiProjectsResponse>({
    queryKey,
    queryFn: () => {
      return projectsService.getProjects({
        page: params?.page || 1,
        pageSize: params?.pageSize || 25,
        populate: "*",
      });
    },
    ...options,
  });
};

export const useProject = (
  id: string,
  options?: Omit<
    UseQueryOptions<{ data: StrapiProject }>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery<{ data: StrapiProject }>({
    queryKey: ["project", id],
    queryFn: () => projectsService.getProjectById(id),
    enabled: !!id,
    ...options,
  });
};

export const transformStrapiProject = (
  strapiProject: StrapiProject
): Project => {
  const images = strapiProject.cover_images || [];

  const getImageUrl = (img?: StrapiImage): string =>
    img?.formats?.medium?.url || img?.formats?.small?.url || img?.url || "";

  return {
    id: strapiProject.documentId,
    title: strapiProject.title,
    description: strapiProject.description,
    subtext: strapiProject.subtext,
    content: strapiProject.content,
    image1: getImageUrl(images[0]),
    image2: getImageUrl(images[1]),
    createdAt: strapiProject.createdAt,
  };
};


