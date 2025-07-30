"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useArticle } from "@/hooks/useArticles";
import { ParsedContent } from "@/types/article";

const ProjectPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();

  // Use the React Query hook instead of manual state management
  const { data: article, isLoading, error, isError } = useArticle(id as string);

  // Navigation functions (you can enhance these to fetch actual article IDs)
  const goToProject = (offset: number) => {
    const currentId = Number(id);
    const newId = currentId + offset;
    if (newId > 0) {
      router.push(`/article/${newId}`);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen px-10 mt-20 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading article...</div>
      </div>
    );
  }

  if (isError || !article) {
    return (
      <div className="w-full min-h-screen px-10 mt-20 flex items-center justify-center">
        <div className="text-xl text-red-600">
          {error instanceof Error ? error.message : "Article not found"}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto w-full min-h-screen px-10 mt-20">
      <div className="text-sm flex justify-between text-blue-500">
        <button onClick={() => goToProject(-1)} className="hover:underline">
          &lt; Previous Article
        </button>

        <button onClick={() => goToProject(1)} className="hover:underline">
          Next Article &gt;
        </button>
      </div>

      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-semibold mt-6">{article.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {article.author} • Published on {article.date}
        </p>

        <Image
          src={article.coverImage}
          alt="Cover"
          width={832}
          height={368}
          className="w-full rounded-lg my-4"
        />

        {/* Add safety check for parsedContent */}
        {article.parsedContent && article.parsedContent.length > 0 ? (
          article.parsedContent.map((item: ParsedContent, index: number) => {
            if (item.type === "heading") {
              return (
                <div key={index} className="mb-6 w-full">
                  <h2 className="font-semibold text-lg text-orange-600">
                    {item.content}
                  </h2>
                </div>
              );
            } else if (item.type === "paragraph") {
              return (
                <div key={index} className="mb-6 w-full">
                  <p className="text-gray-700 mt-2">{item.content}</p>
                </div>
              );
            } else if (item.type === "image" && item.imageUrl) {
              return (
                <div key={index} className="mb-6 w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.imageAlt || "Article image"}
                    width={832}
                    height={368}
                    className="w-full rounded-lg my-4"
                  />
                </div>
              );
            }
            return null;
          })
        ) : (
          <div className="mb-6 w-full">
            <p className="text-gray-700">
              No content available for this article.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
