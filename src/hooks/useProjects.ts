import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { projectsService } from "@/lib/projectService";
import {
  StrapiProjectsResponse,
  StrapiProject,
  Project,
  StrapiImage,
  StrapiFeaturedProjectsResponse,
  StrapiFeaturedProject,
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

// Original projects hook
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

// Original single project hook
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

// New featured projects hook
interface UseFeaturedProjectsParams {
  page?: number;
  pageSize?: number;
}

export const useFeaturedProjects = (
  params?: UseFeaturedProjectsParams,
  options?: Omit<UseQueryOptions<Project[]>, "queryKey" | "queryFn">
) => {
  const queryKey = ["featured-projects", params];

  return useQuery<Project[]>({
    queryKey,
    queryFn: async () => {
      const response = await projectsService.getFeaturedProjects({
        page: params?.page || 1,
        pageSize: params?.pageSize || 25,
      });

      // Transform each featured project to Project structure
      return response.data.map((featuredProject) =>
        transformStrapiProject(featuredProject.project)
      );
    },
    ...options,
  });
};

// Original transform function
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

// Additional transform functions for featured projects
export const transformStrapiFeaturedProject = (
  strapiFeaturedProject: StrapiFeaturedProject
): Project => {
  return transformStrapiProject(strapiFeaturedProject.project);
};

export const transformStrapiFeaturedProjects = (
  response: StrapiFeaturedProjectsResponse
): Project[] => {
  return response.data.map(transformStrapiFeaturedProject);
};
