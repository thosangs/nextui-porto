import type { Metadata } from "next";
import { ProjectList } from "@/app/utils";
import { ProjectType } from "@/app/types";
import { Project } from "../components/Project";

export const metadata: Metadata = {
  title: "Projects — Tukang Data",
  description:
    "Selected work by Thosan (Seceng): interactive maps, dashboards, data platforms, and fullstack web apps.",
};

export default function Projects() {
  return (
    <section className="p-4 pb-12 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible">
      <div className="flex flex-col gap-14">
        {ProjectList.map((project: ProjectType) => (
          <Project
            key={`project-item-${project.title}`}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
