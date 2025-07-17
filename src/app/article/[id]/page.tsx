import { notFound } from "next/navigation";
import Image from "next/image";

// Dummy data (replace this with actual API call or DB logic)
const articles = [
  {
    id: "1",
    title: "The Future of Railroads: Innovation on Track and Track Systems for High Speed Transport Systems",
    author: "Saanvi Chawla",
    date: "Dec 15, 2023",
    readTime: "6 min read",
    image1: "/images/tunnel.jpg",
    image2: "/images/train.jpg",
    sections: [
      {
        heading: "1. Electrification and Cleaner Energy",
        content:
          "The future of railroads is electric. With global climate goals becoming more aggressive...",
      },
      {
        heading: "2. Magnetic and Hyperloop-Inspired Tracks",
        content:
          "Next-generation high-speed transport is inching closer with rail travel tunnels, Maglev trains...",
      },
      {
        heading: "3. Autonomous and AI-Powered Trains",
        content:
          "Much like autonomous cars, trains are becoming smarter and more self-sufficient...",
      },
    ],
    conclusion:
      "The future of railroads is fast, green, smart, and integrated...",
  },
  // Add more articles if needed
];

// Fetch article by ID
const getArticleById = (id: string) => {
  return articles.find((article) => article.id === id);
};

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleById(params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {article.author} • {article.date} • {article.readTime}
      </p>

      <Image
        src={article.image1}
        alt="Railroad Tunnel"
        width={700}
        height={400}
        className="rounded-lg mb-6"
      />

      {article.sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
          <p className="text-justify">{section.content}</p>
        </div>
      ))}

      <Image
        src={article.image2}
        alt="Modern Train"
        width={700}
        height={400}
        className="rounded-lg my-6"
      />

      <h2 className="text-xl font-semibold mb-2">Conclusion: Tracks to Tomorrow</h2>
      <p className="text-justify">{article.conclusion}</p>
    </div>
  );
}
