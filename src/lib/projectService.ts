import { apiClient } from "@/lib/api";
import {
  StrapiProjectsResponse,
  StrapiProject,
  StrapiFeaturedProjectsResponse,
} from "@/types/projects";

interface GetProjectsParams {
  page?: number;
  pageSize?: number;
  populate?: string;
}

export const projectsService = {
  // Keep existing methods
  async getProjects(
    params: GetProjectsParams = {}
  ): Promise<StrapiProjectsResponse> {
    const queryParams: Record<string, string> = {
      populate: params.populate || "*",
    };

    if (params.page) {
      queryParams["pagination[page]"] = params.page.toString();
    }

    if (params.pageSize) {
      queryParams["pagination[pageSize]"] = params.pageSize.toString();
    }

    return apiClient.get<StrapiProjectsResponse>("/projects?populate=*");
  },

  async getProjectById(id: string): Promise<{ data: StrapiProject }> {
    return apiClient.get<{ data: StrapiProject }>(`/projects/${id}`, {
      populate: "*",
    });
  },

  // New method for featured projects
  async getFeaturedProjects(
    params: GetProjectsParams = {}
  ): Promise<StrapiFeaturedProjectsResponse> {
    const queryParams: Record<string, string> = {};

    if (params.page) {
      queryParams["pagination[page]"] = params.page.toString();
    }

    if (params.pageSize) {
      queryParams["pagination[pageSize]"] = params.pageSize.toString();
    }

    return apiClient.get<StrapiFeaturedProjectsResponse>(
      "/home-page-featured-projects?populate[project][populate]=*"
    );
  },
};
