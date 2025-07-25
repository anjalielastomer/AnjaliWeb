import { apiClient } from "@/lib/api";
import { StrapiProjectsResponse, StrapiProject } from "@/types/projects";

interface GetProjectsParams {
  page?: number;
  pageSize?: number;
  populate?: string;
}

export const projectsService = {
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
};
