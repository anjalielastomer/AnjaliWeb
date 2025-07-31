// hooks/useProjects.ts

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { projectsService } from "@/lib/projectService";
import {
  StrapiProjectsResponse,
  StrapiProject,
  Project,
  StrapiImage,
  StrapiFeaturedProjectsResponse,
} from "@/types/projects";

// This is the single source of truth for transforming a project object.
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


type ProjectsQueryKey = ["projects", { page?: number; pageSize?: number } | undefined];

export const useProjects = (
  params?: { page?: number; pageSize?: number },
  options?: Omit<UseQueryOptions<StrapiProjectsResponse, Error, Project[], ProjectsQueryKey>, "queryKey" | "queryFn">
) => {
  const queryKey: ProjectsQueryKey = ["projects", params];
  return useQuery<StrapiProjectsResponse, Error, Project[], ProjectsQueryKey>({
    queryKey,
    queryFn: () =>
      projectsService.getProjects({
        page: params?.page || 1,
        pageSize: params?.pageSize || 25,
        populate: "*",
      }),
    select: (response) =>
      response.data
        .filter((project) => project !== null)
        .map(transformStrapiProject),
    ...options,
  });
};


type ProjectQueryKey = ["project", string];

export const useProject = (
  id: string,
  options?: Omit<UseQueryOptions<{ data: StrapiProject }, Error, Project, ProjectQueryKey>, "queryKey" | "queryFn">
) => {
  const queryKey: ProjectQueryKey = ["project", id];
  return useQuery<{ data: StrapiProject }, Error, Project, ProjectQueryKey>({
    queryKey,
    queryFn: () => projectsService.getProjectById(id),
    enabled: !!id,
    select: (response) =>
      transformStrapiProject(response.data),
    ...options,
  });
};


type FeaturedProjectsQueryKey = ["featured-projects", { page?: number; pageSize?: number } | undefined];

export const useFeaturedProjects = (
  params?: { page?: number; pageSize?: number },
  options?: Omit<UseQueryOptions<StrapiFeaturedProjectsResponse, Error, Project[], FeaturedProjectsQueryKey>, "queryKey" | "queryFn">
) => {
  const queryKey: FeaturedProjectsQueryKey = ["featured-projects", params];
  return useQuery<StrapiFeaturedProjectsResponse, Error, Project[], FeaturedProjectsQueryKey>({
    queryKey,
    queryFn: () =>
      projectsService.getFeaturedProjects({
        page: params?.page || 1,
        pageSize: params?.pageSize || 25,
      }),
    select: (response) =>
      response.data
        .filter((featuredProject) => featuredProject.project !== null)
        .map((featuredProject) => transformStrapiProject(featuredProject.project)),
    ...options,
  });
};