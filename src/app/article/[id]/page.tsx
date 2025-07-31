"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
// 1. Make sure you are importing both hooks
import { useArticle, useArticles } from "@/hooks/useArticles"; 
import { ParsedContent } from "@/types/article";

const ProjectPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();

  // Fetch the single article being viewed
  const { data: article, isLoading: isArticleLoading, error, isError } = useArticle(id as string);

  // 2. Fetch the list of all articles to determine navigation
  const { data: articles, isLoading: areArticlesLoading } = useArticles();

  // 3. Find the actual previous and next articles based on the list's index
  const currentIndex = articles?.findIndex(a => a.id.toString() === id);

  // Safely find the previous and next articles
  const prevArticle = (articles && typeof currentIndex === "number" && currentIndex > 0)
    ? articles[currentIndex - 1]
    : null;

  // The 'articles && currentIndex != null' check solves the error.
  const nextArticle = (articles && currentIndex != null && currentIndex < articles.length - 1)
    ? articles[currentIndex + 1]
  : null;
  // 4. New navigation functions with built-in safety checks
  const goToPrevious = () => {
    if (prevArticle) {
      router.push(`/article/${prevArticle.id}`);
    }
    // If no prevArticle, do nothing.
  };

  const goToNext = () => {
    if (nextArticle) {
      router.push(`/article/${nextArticle.id}`);
    }
    // If no nextArticle, do nothing.
  };

  // The isLoading check now accounts for both API calls
  if (isArticleLoading || areArticlesLoading) {
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
        {/* 5. Update onClick handlers; the className is unchanged */}
        <button onClick={goToPrevious} className="hover:text-blue-800">
          &lt; Previous Article
        </button>

        <button onClick={goToNext} className="hover:text-blue-800">
          Next Article &gt;
        </button>
      </div>

      <div className="bg-gray-300 h-[1px] w-screen absolute left-0 my-5" />

      <div className="w-full max-w-[832px] mx-auto flex flex-col items-center text-justify">
        <h1 className="text-3xl font-semibold mt-6 pt-6 font-monte text-center">{article.title}</h1>
        <div className="w-full flex gap-5 mt-4 py-2 border-t border-b border-gray-200">
          <Image  src={'/ladygaga.svg'} height={35} width={35} alt="image"/>
          <p className="w-full text-sm text-gray-500">
            {article.author} <br /> Published on {article.date}
          </p>
        </div>

        <Image
          src={article.coverImage}
          alt="Cover"
          width={832}
          height={368}
          className="rounded-lg my-4"
        />

        {article.parsedContent && article.parsedContent.length > 0 ? (
          article.parsedContent.map((item: ParsedContent, index: number) => {
            if (item.type === "heading") {
              return (
                <div key={index} className="mb-6 w-full">
                  <h2 className="font-semibold text-lg text-[var(--textorange)]">
                    {item.content}
                  </h2>
                </div>
              );
            } else if (item.type === "paragraph") {
              return (
                <div key={index} className="mb-6 w-full">
                  <p className="text-[var(--textblue)] mt-2">{item.content}</p>
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
                    className="rounded-lg my-4"
                  />
                </div>
              );
            }
            return null;
          })
        ) : (
          <div className="mb-6 w-full">
            <p className="text-[var(--textblue)]">
              No content available for this article.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;