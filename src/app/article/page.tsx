"use client";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
const articles = new Array(10).fill({
  id: "1",
  title: "Mastering CSS Grid: Advanced Layout Techniques",
  date: "Dec 12, 2024",
  time: "5 min read",
  author: "Sarah Chen",
  image: "/article1.jpg", // Change this based on index if needed
});

const ArticlesPage = () => {
  return (
    <div className="w-full min-h-fit bg-white justify-center font-monte flex gap-10 mt-20 px-14 pb-20 ">
        <div className="flex flex-col">
      {/* Header Section */}
      <h1 className="text-7xl font-bold text-textblue mb-2 leading-snug flex flex-col gap-5 font-raleway">
        Our <span className="text-textorange">Articles</span>
      </h1>

      {/* Subscribe + Scrollable Articles Section */}
      <div className="flex flex-col lg:flex-row gap-10 mt-6">
        {/* Subscribe Box */}
        <div className="bg-[#FFF6EF] p-6 rounded-lg w-full lg:max-w-xs h-fit">
          <h3 className="font-semibold text-lg mb-2 text-[#2D3A4A]">Stay Updated</h3>
          <p className="text-sm text-gray-600 mb-4">
            Get the latest articles and project updates delivered to your inbox.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 bg-white rounded-md border border-gray-300 mb-3 focus:outline-none focus:ring-2 focus:ring-textorange"
          />
          <button className="bg-textorange text-white px-4 py-2 rounded-md w-full hover:bg-[#ff7f00] transition">
            Subscribe
          </button>
        </div>

        
      </div>

      {/* Latest Insights */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-textblue">
          Latest <span className="text-textorange">Insights</span>
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Stay updated with industry trends and innovations
        </p>
      </div>
      </div>
      {/* Scrollable Articles List */}
      <div className="">
        <div className="flex-1 max-h-[600px] overflow-y-auto pr-3 custom-scrollbar mt-5">
          <div className="flex flex-col gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
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
                      Discover powerful CSS Grid features that go beyond basic layouts. From subgrid to container queries, learn how to create complex, responsive designs with minimal code.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-gray-700 font-medium">{article.author}</p>
                    <Link href={`/article/${article.id}`}><FiArrowUpRight className="text-textorange text-xl" /></Link>
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
