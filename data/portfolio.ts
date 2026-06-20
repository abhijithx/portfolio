export interface Project {
  title: string;
  subtitle: string;
  features: string[];
  tags: string[];
  color: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "",
    subtitle: " ",
    features: [
      "",
      "",
      "",
    ],
    tags: ["", "", "", ""],
    color: "bg-green-600",
    github: "",
  },
  {
    title: "",
    subtitle: "",
    features: [
      "",
      "",
      "",
      "",
    ],
    tags: ["", "", "", ""],
    color: "bg-blue-600",
    github: "",
  },
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

export const experience: Experience = {
  title: "EXPERIENCE",
  company: "",
  period: "",
  achievements: [],
  technologies: [],
};

export interface Education {
  degree: string;
  institution: string;
  score: string;
  period: string;
}

export const education: Education[] = [
  {
     degree: "MCA",
    institution: "CET, Thiruvananthapuram",
    score: "80%",
    period: "2025–2027",
  },
  {
    degree: "BCA",
    institution: "NSS College, Rajakumary",
    score: "70%",
    period: "2021–2024",
  },
  {
    degree: "Class 12",
    institution: "ST.Marys H S Murikkasery",
    score: "90%",
    period: "2019–2021",
  },
];

export interface Activity {
  role: string;
  organization: string;
  period: string;
}

export const activities: Activity[] = [
  {
    role: "Team ",
    organization: "Google Developer's Student Club",
    period: "2026–2027",
  },
  {
    role: "Technical Team ",
    organization: "ASCA",
    period: "2025–2027",
  },
];

export interface FunCard {
  title: string;
  subtitle: string;
  color: string;
  icon: string;
}

export const funCards: FunCard[] = [
  {
    title: "OPTIMIZATION",
    subtitle: "87% Faster",
    color: "bg-orange-500",
    icon: "trophy",
  }
  // {
  //   title: "LEETCODE",
  //   subtitle: "Problem Solver",
  //   color: "bg-gray-800",
  //   icon: "code",
  // }
//   {
//     title: "IMDB",
//     subtitle: "Playlist",
//     color: "bg-gradient-to-br from-red-500 to-pink-600",
//     icon: "clapperboard",
//   },
//   {
//     title: "MEOW",
//     subtitle: "Cat Lover",
//     color: "bg-gradient-to-br from-pink-500 to-purple-600",
//     icon: "cat",
//   },
];
