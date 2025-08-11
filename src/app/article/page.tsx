"use client";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { TransformedArticle } from "@/types/article";
import { useArticles } from "@/hooks/useArticles";
import { toast } from "sonner";
import { AiOutlineCheckCircle } from "react-icons/ai";

const ArticlesPage: React.FC = () => {
  const { data: articles = [], isLoading, error, isError } = useArticles();

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl text-textblue">Loading articles...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl text-red-600">
          Error:{" "}
          {error instanceof Error ? error.message : "An unknown error occurred"}
        </div>
      </div>
    );
  }

  const handleSubscribe = () => {
    toast(
      <div className="flex flex-col items-center text-center">
        <AiOutlineCheckCircle size={80} className="text-[var(--textorange)] mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800">Thank you!</h2>
        <p className="text-sm text-gray-600 mt-1">Subscribed!</p>
      </div>
    );
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto min-h-fit bg-white justify-center font-monte flex flex-col md:flex-row gap-10 mt-20 px-7 md:px-14 pb-20">
      <div className="flex flex-col items-center md:items-start">
        {/* Header Section */}
        <h1 data-aos="fade-right" className="text-3xl md:text-7xl font-bold text-textblue mb-2 leading-snug flex flex-row md:flex-col gap-5 font-raleway">
          Our <span className="text-textorange">Articles</span>
        </h1>

        {/* Subscribe + Scrollable Articles Section */}
        <div data-aos="zoom-in-up" className="flex flex-col lg:flex-row gap-10 mt-6">
          {/* Subscribe Box */}
          <div className="bg-[#FFF6EF] p-6 rounded-lg w-full lg:max-w-xs h-fit">
            <h3 className="font-semibold text-lg mb-2 text-[#2D3A4A]">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Get the latest articles and project updates delivered to your
              inbox.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-white rounded-md border border-[#ff7f00] mb-3 focus:outline-none focus:ring-[#ff7f00]"
            />
            <button onClick={handleSubscribe} className="bg-textorange text-white px-4 py-2 rounded-md w-full hover:bg-[#ff7f00] transition cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>

        {/* Latest Insights */}
        <div data-aos="zoom-in-up" className="mt-16">
          <h2 className="text-2xl font-bold text-textblue md:text-left text-center">
            Latest <span className="text-textorange">Insights</span>
          </h2>
          <p className="text-sm text-textblue mt-7 md:text-left text-center">
            Stay updated with industry trends and innovations
          </p>
        </div>
      </div>

      {/* Scrollable Articles List */}
      <div data-aos="fade-left" className="">
        <div className="flex-1 max-h-[995px] overflow-y-auto pr-3 custom-scrollbar mt-5">
          <div className="flex flex-col gap-6">
            {articles.map((article: TransformedArticle) => (
              <div
                key={article.id}
                className="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-[0_4px_8px_rgba(255,165,0,0.4)] transition-shadow duration-300 transition"
              >
                <div className="w-full sm:w-1/3 h-48 sm:h-auto relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      {article.date} • {article.time}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-800 mt-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {article.short_description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-gray-700 font-medium">
                      {article.author}
                    </p>
                    <Link href={`/article/${article.id}`}>
                      <FiArrowUpRight className="text-textorange text-xl" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
