// hooks/useArticles.ts
import { useQuery } from "@tanstack/react-query";
import { articlesApi } from "@/lib/articleservice";
import {
  ApiResponse,
  ApiArticle,
  TransformedArticle,
  ApiSingleArticleResponse,
  ParsedContent,
  parseHTMLContent,
} from "@/types/article";

const transformArticleData = (apiData: ApiResponse): TransformedArticle[] => {
  return apiData.data.map((article: ApiArticle): TransformedArticle => {
    const publishDate = new Date(article.publish_time).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );

    return {
      id: article.documentId,
      title: article.title,
      date: publishDate,
      time: article.read_time_text + " read",
      author: article.author,
      // `thumbnail` is the 156px admin thumbnail (see Media.ts `xsmall`) — it was
      // being stretched ~5x into the ~384px article cards and looked pixelated.
      // `medium` is 750px, roughly 2x the card width, which is what a retina
      // display needs.
      image:
        article.cover_image?.formats?.medium?.url ||
        article.cover_image?.formats?.small?.url ||
        article.cover_image?.url ||
        "/placeholder.jpg",
      short_description: article.short_description,
    };
  });
};

// Add interface for single article transformation
interface TransformedSingleArticle {
  id: number;
  title: string;
  author: string;
  date: string;
  coverImage: string;
  parsedContent: ParsedContent[];
}

// Transform single article data
const transformSingleArticleData = (
  apiData: ApiSingleArticleResponse
): TransformedSingleArticle => {
  const publishDate = new Date(apiData.data.publish_time).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const parsedContent = parseHTMLContent(apiData.data.content);

  return {
    id: apiData.data.id,
    title: apiData.data.title,
    author: apiData.data.author,
    date: publishDate,
    coverImage:
      apiData.data.cover_image?.formats?.large?.url ||
      apiData.data.cover_image?.url ||
      "/placeholder.jpg",
    parsedContent,
  };
};

export const useArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: articlesApi.getAll,
    select: (data: ApiResponse) => transformArticleData(data),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (previously cacheTime)
  });
};

// Updated hook for single article with transformation
export const useArticle = (id: string) => {
  return useQuery({
    queryKey: ["article", id],
    queryFn: () => articlesApi.getById(id),
    select: (data: ApiSingleArticleResponse) =>
      transformSingleArticleData(data),
    enabled: !!id, // Only run query if id exists
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
