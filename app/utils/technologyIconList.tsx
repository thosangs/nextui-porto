import { iconType } from "../types";
import {
  TypescriptSVG,
  ReactSVG,
  TailwindSVG,
  MongoDBSVG,
  ShadcnSVG,
  NextSVG,
  GcpSVG,
  SparkSVG,
  AirflowSVG,
  DbtSVG,
  PythonSVG,
  SqlSVG,
  ScalaSVG,
  DockerSVG,
  KafkaSVG,
  PostgreSVG,
} from "../components/ui/icons";

let color: string = "#9ca3af";
export const techonologyIconList: iconType[] = [
  {
    name: "Next.JS",
    icon: <NextSVG color={color} size={35} />,
  },
  {
    name: "TypeScript",
    icon: <TypescriptSVG color={color} size={35} />,
  },
  {
    name: "React",
    icon: <ReactSVG color={color} size={35} />,
  },
  {
    name: "Tailwind",
    icon: <TailwindSVG color={color} size={35} />,
  },
  {
    name: "Shadcn",
    icon: <ShadcnSVG color={color} size={35} />,
  },
  {
    name: "MongoDB",
    icon: <MongoDBSVG color={color} size={35} />,
  },
  {
    name: "Google CLoud Platform (GCP)",
    icon: <GcpSVG color={color} size={35} />,
  },
  {
    name: "Apache Spark",
    icon: <SparkSVG color={color} size={35} />,
  },
  {
    name: "Apache Airflow",
    icon: <AirflowSVG color={color} size={35} />,
  },
  {
    name: "Data Build Tool (dbt)",
    icon: <DbtSVG color={color} size={35} />,
  },
  {
    name: "Python",
    icon: <PythonSVG color={color} size={35} />,
  },
  {
    name: "SQL",
    icon: <SqlSVG color={color} size={35} />,
  },
  {
    name: "Scala",
    icon: <ScalaSVG color={color} size={35} />,
  },
  {
    name: "Docker",
    icon: <DockerSVG color={color} size={35} />,
  },
  {
    name: "Apache Kafka",
    icon: <KafkaSVG color={color} size={35} />,
  },
  {
    name: "PostgreSQLa",
    icon: <PostgreSVG color={color} size={35} />,
  },
];
