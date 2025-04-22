import {
  JavascriptSVG,
  MongoDBSVG,
  ReactSVG,
  ShadcnLandingSVG,
  ShadcnSVG,
  ShopApiSVG,
  Sk8terSVG,
  TailwindSVG,
  TypescriptSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";

export const ProjectList: ProjectType[] = [
  {
    icon: <ShopApiSVG />,
    title: "LJSport.id",
    subtitle: "E-commerse back-end",
    technologies: [
      {
        name: "NextJS",
        icon: <JavascriptSVG color="#F7DF1E" size={16} />,
      },
      {
        name: "TypeScript",
        icon: <TypescriptSVG color="#3178C6" size={16} />,
      },
      {
        name: "MySQL",
        icon: <TypescriptSVG color="#3178C6" size={16} />,
      },
      {
        name: "Laravel",
        icon: <MongoDBSVG color="#47A248" size={16} />,
      },
      {
        name: "PHP",
        icon: <MongoDBSVG color="#47A248" size={16} />,
      },
    ],
    description:
      "LJSport.id is a custom apparel company specializing in jerseys and sportswear. A high-performance landing page with 90+ SEO score, achieving #1 ranking for 'lj sport' search term. Additionally, I built a comprehensive dashboard for order management, invoice processing, and tracking.",
    imgUrl: "",
    videoUrl: "https://vimeo.com/1077655697",
    githubUrl: "NONE",
    websiteUrl: "https://ljsport.id/",
  },
  {
    icon: <ShadcnLandingSVG />,
    title: "Racephoria",
    subtitle: "Pushbike Realtime Scoreboard",
    technologies: [
      {
        name: "NextJS",
        icon: <ReactSVG color="#61DAFB" size={16} />,
      },

      {
        name: "TypeScript",
        icon: <TypescriptSVG color="#3178C6" size={16} />,
      },
      {
        name: "Shadcn",
        icon: <ShadcnSVG color="#000000" size={16} />,
      },
      {
        name: "Tailwind",
        icon: <TailwindSVG color="#06B6D4" size={16} />,
      },
      {
        name: "Excel",
        icon: <TailwindSVG color="#06B6D4" size={16} />,
      },
    ],
    description:
      "Implementing an automated scoring system using Google Sheets and Apps Script, with real-time data synchronization to a Next.js dashboard. The system features a secure backend API to protect sensitive spreadsheet URLs, while providing a modern UI built with Shadcn and Tailwind CSS for optimal user experience.",
    imgUrl: "",
    videoUrl: "https://vimeo.com/1077657328",
    githubUrl: "https://github.com/thosangs/pla_lamsel",
    websiteUrl: "https://racephoria.pages.dev/",
  },
  {
    icon: <Sk8terSVG />,
    title: "Tikum",
    subtitle: "Pushbike Realtime Scoreboard",
    technologies: [
      {
        name: "NextJS",
        icon: <ReactSVG color="#61DAFB" size={16} />,
      },

      {
        name: "TypeScript",
        icon: <TypescriptSVG color="#3178C6" size={16} />,
      },
      {
        name: "Shadcn",
        icon: <ShadcnSVG color="#000000" size={16} />,
      },
      {
        name: "Tailwind",
        icon: <TailwindSVG color="#06B6D4" size={16} />,
      },
      {
        name: "Excel",
        icon: <TailwindSVG color="#06B6D4" size={16} />,
      },
      {
        name: "SEO",
        icon: <TailwindSVG color="#06B6D4" size={16} />,
      },
    ],
    description:
      "Developing a high-performance scoring system leveraging Google Sheets and Apps Script, with real-time data synchronization to a Next.js dashboard. The system implements a secure backend API to protect sensitive spreadsheet URLs, while delivering a modern UI built with Shadcn and Tailwind CSS. Achieved perfect 100 Lighthouse SEO score through optimized metadata, semantic HTML, and performance enhancements.",
    imgUrl: "/images/tikum.png",
    videoUrl: "",
    githubUrl: "https://github.com/thosangs/tikum_pushbike",
    websiteUrl: "https://tikum.pages.dev/",
  },
];
