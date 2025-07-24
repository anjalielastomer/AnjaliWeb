import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { projectsService } from "@/lib/projectService";
import {
  StrapiProjectsResponse,
  StrapiProject,
  Project,
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
  return {
    id: strapiProject.documentId,
    title: strapiProject.title,
    description: strapiProject.description,
    subtext: strapiProject.subtext,
    content: strapiProject.content,
    coverImage: strapiProject.cover_image?.url || "",
    createdAt: strapiProject.createdAt,
  };
};


