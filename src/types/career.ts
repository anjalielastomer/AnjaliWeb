// Type definitions
export interface CardData {
  title: string;
  highlight: string;
  description: string;
  image: string;
}

export interface FormData {
  data: {
    name: string;
    contact: string;
    email: string;
    position: string;
    resume: string;

  };
}



export const cardData: CardData[] = [
  {
    title: "Innovation",
    highlight: "Driven",
    description:
      "Work with cutting-edge technology and be part of revolutionary railway solutions that shape the future of transportation.",
    image: "/career/rocket.svg",
  },
  {
    title: "Career",
    highlight: "Growth",
    description:
      "Advance your career with comprehensive training programs, mentorship opportunities, and clear advancement paths.",
    image: "/career/growth.svg",
  },
  {
    title: "Team",
    highlight: "Excellence",
    description:
      "Collaborate with industry experts and passionate professionals in a supportive, inclusive work environment.",
    image: "/career/excellence.svg",
  },
  {
    title: "Comprehensive",
    highlight: "Benefits",
    description:
      "Enjoy competitive salaries, health insurance, retirement plans, and performance bonuses.",
    image: "/career/benifits.svg",
  },
  {
    title: "Work-Life",
    highlight: "Balance",
    description:
      "Flexible schedules, remote work options, and generous PTO to maintain a healthy work-life balance.",
    image: "/career/balance.svg",
  },
  {
    title: "Global",
    highlight: "Impact",
    description:
      "Contribute to projects that connect cities, countries, and continents, making a real difference in the world.",
    image: "/career/impact.svg",
  },
];

