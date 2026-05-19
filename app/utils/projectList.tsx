import {
  AirflowSVG,
  DockerSVG,
  JavascriptSVG,
  KafkaSVG,
  MongoDBSVG,
  PostgreSVG,
  PythonSVG,
  ReactSVG,
  ShadcnLandingSVG,
  ShadcnSVG,
  ShopApiSVG,
  Sk8terSVG,
  SparkAirflowSVG,
  SparkSVG,
  SqlCourseSVG,
  SqlSVG,
  TailwindSVG,
  TypescriptSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";

export const ProjectList: ProjectType[] = [
  {
    icon: <SqlCourseSVG />,
    title: "Interactive SQL Class",
    subtitle: "Kuasai SQL dari Nol",
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
        name: "Tailwind",
        icon: <TailwindSVG color="#06B6D4" size={16} />,
      },
      {
        name: "PostgreSQL",
        icon: <PostgreSVG color="#336791" size={16} />,
      },
      {
        name: "SQL",
        icon: <SqlSVG color="#CC2927" size={16} />,
      },
    ],
    description:
      "A free SQL practice platform built under tukangdata.com — think LeetCode but for SQL. Learners solve real query problems organized by topic (Selection, Filter, Aggregation, Conditional, Union, Join) against a live PostgreSQL dataset, with an inline query editor, instant evaluation, sample expected output, hint system, and a real-time class leaderboard tracking who's passed, attempted, or skipped each problem.",
    imgUrl: "/images/sql-tukangdata.webp",
    videoUrl: "",
    githubUrl: "NONE",
    websiteUrl: "https://sql.tukangdata.com",
  },
  {
    icon: <ShadcnLandingSVG />,
    title: "Asset Monitor",
    subtitle: "All-in-One Market Dashboard",
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
        name: "Tailwind",
        icon: <TailwindSVG color="#06B6D4" size={16} />,
      },
      {
        name: "Shadcn",
        icon: <ShadcnSVG color="#000000" size={16} />,
      },
    ],
    description:
      "An all-in-one monitoring dashboard tracking Gold (IDR/gram), USD/IDR exchange rate, and Brent Crude Oil prices in real-time across multiple timeframes (1H to 20T+). Includes a portfolio valuation tool that calculates total holdings from owned gold grams and USD positions, plus a curated news feed filtered by asset class.",
    imgUrl: "/images/secengmon.webp",
    videoUrl: "",
    githubUrl: "NONE",
    websiteUrl: "https://secengmon.pages.dev",
  },
  {
    icon: <SparkAirflowSVG />,
    title: "Spark + Airflow Bootcamp",
    subtitle: "Data Engineering with Docker",
    technologies: [
      {
        name: "Apache Spark",
        icon: <SparkSVG color="#E25A1C" size={16} />,
      },
      {
        name: "Apache Airflow",
        icon: <AirflowSVG color="#017CEE" size={16} />,
      },
      {
        name: "Docker",
        icon: <DockerSVG color="#2496ED" size={16} />,
      },
      {
        name: "PostgreSQL",
        icon: <PostgreSVG color="#336791" size={16} />,
      },
      {
        name: "Apache Kafka",
        icon: <KafkaSVG color="#231F20" size={16} />,
      },
      {
        name: "Python",
        icon: <PythonSVG color="#3776AB" size={16} />,
      },
    ],
    description:
      "A comprehensive Docker-based data engineering environment featuring Apache Spark for distributed data processing, Apache Airflow for workflow orchestration, and Apache Kafka for real-time streaming. Includes PostgreSQL database, Jupyter notebooks, and DataHub for data governance. Designed for the Dibimbing Data Engineering Bootcamp with complete containerization setup.",
    imgUrl: "",
    videoUrl: "",
    githubUrl: "https://github.com/thosangs/dibimbing_spark_airflow",
    websiteUrl: "https://github.com/thosangs/dibimbing_spark_airflow",
  },
  {
    icon: <SqlCourseSVG />,
    title: "Advanced SQL Course",
    subtitle: "PostgreSQL Learning Repository",
    technologies: [
      {
        name: "PostgreSQL",
        icon: <PostgreSVG color="#336791" size={16} />,
      },
      {
        name: "SQL",
        icon: <SqlSVG color="#CC2927" size={16} />,
      },
      {
        name: "Docker",
        icon: <DockerSVG color="#2496ED" size={16} />,
      },
    ],
    description:
      "A comprehensive PostgreSQL project for a 3-day intensive SQL course using the classic dvdrental dataset. Features Docker setup with PostgreSQL 17, SQLPad for web-based SQL queries, and pgAdmin for database management. Includes advanced SQL topics covering window functions, CTEs, subqueries, and analytical queries with progressive examples and case studies.",
    imgUrl: "",
    videoUrl: "",
    githubUrl: "https://github.com/thosangs/dibimbing_sql",
    websiteUrl: "https://github.com/thosangs/dibimbing_sql",
  },
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
    imgUrl: "/images/tikum.webp",
    videoUrl: "",
    githubUrl: "https://github.com/thosangs/tikum_pushbike",
    websiteUrl: "https://tikum.pages.dev/",
  },
];
