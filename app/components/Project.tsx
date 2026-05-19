"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";

import { ProjectType, TechnologyType } from "../types";
import ProjectsSectionAnimations from "../utils/ProjectsSectionAnimations";
import { GithubSVG, LinkSVG } from "./ui/icons";

export const Project = (project: ProjectType) => {
  const {
    description,
    title,
    icon,
    imgUrl,
    videoUrl,
    technologies,
    githubUrl,
    websiteUrl,
  } = project;

  const hasWebsiteUrl = websiteUrl && websiteUrl !== "NONE";
  const hasGithubUrl = githubUrl && githubUrl !== "NONE";
  const hasVideo = videoUrl && videoUrl !== "";
  const hasImage = imgUrl && imgUrl !== "";
  const hasVisual = hasVideo || hasImage;

  const isVimeo = videoUrl?.includes("vimeo.com");
  let vimeoId = "";
  let vimeoHash = "";
  if (isVimeo && videoUrl) {
    // Extracts ID and optional Hash (e.g., vimeo.com/12345 or vimeo.com/12345/abcde)
    const match = videoUrl.match(/vimeo.*\/(\d+)(?:\/(\w+))?/);
    if (match) {
      vimeoId = match[1];
      vimeoHash = match[2] || ""; // Capture hash if present
    }
  }
  const vimeoSrc = `https://player.vimeo.com/video/${vimeoId}?${
    vimeoHash ? `h=${vimeoHash}&` : ""
  }autoplay=1&loop=1&muted=1&playsinline=1&autopause=0&badge=0`;

  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return ProjectsSectionAnimations.mobileAnimation();

    ProjectsSectionAnimations.titleAnimation();
    if (hasVisual) {
      ProjectsSectionAnimations.videoAnimation();
    }
    ProjectsSectionAnimations.descriptionAnimation();
    ProjectsSectionAnimations.websiteUrlAnimation();
    ProjectsSectionAnimations.githubUrlAnimation();
  }, [hasVisual]);

  useEffect(() => {
    if (!isZoomed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomed(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  return (
    <div className="grid lg:grid-rows-3 grid-cols-4 gap-5 pb-4 overflow-hidden">
      <div className="flex lg:hidden items-center col-span-full lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-5 text-3xl font-bold text-white opacity-0 mobile-animation titleSection">
        <span className="bg-[#303036] p-2 rounded-md mr-2"> {icon}</span>
        {title}
      </div>

      {hasVisual && (
        <div className="col-span-full lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-3 opacity-0 mobile-animation videoSection">
          {hasVideo ? (
            isVimeo && vimeoId ? (
              <div className="relative w-full aspect-video rounded-xl border-1 border-[#212121] overflow-hidden">
                <iframe
                  className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-110"
                  src={vimeoSrc}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  title={`${title} video`}
                ></iframe>
              </div>
            ) : (
              <video
                className="rounded-xl border-1 border-[#212121]"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                autoPlay
                loop
                muted // Added muted for better autoplay compatibility
                playsInline
                poster={imgUrl}
                src={videoUrl}
              ></video>
            )
          ) : (
            <button
              type="button"
              onClick={() => setIsZoomed(true)}
              aria-label={`Zoom ${title} image`}
              className="relative w-full aspect-video rounded-xl border-1 border-[#212121] overflow-hidden cursor-zoom-in group block"
            >
              <Image
                src={imgUrl}
                alt={`${title} image`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          )}
        </div>
      )}

      <Card
        className={`col-span-full lg:min-h-[250px] opacity-0 mobile-animation descriptionCard ${
          hasVisual
            ? "lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-5"
            : "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-5"
        }`}
      >
        <CardBody className="text-gray-400 text-lg flex justify-between gap-4">
          <div className="hidden lg:flex col-span-full lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-5 text-3xl font-bold text-white opacity-0 mobile-animation titleSection">
            <span className="bg-[#303036] p-2 rounded-md mr-2"> {icon}</span>{" "}
            {title}
          </div>
          {description}
          <div className=" flex flex-wrap gap-2">
            {technologies.map(
              ({ name, icon }: TechnologyType, index: number) => (
                <Chip key={`technology-item-${index}`} size="sm">
                  <span className="flex items-center gap-2">
                    {/* {icon} */}
                    {name}
                  </span>
                </Chip>
              )
            )}
          </div>
        </CardBody>
      </Card>

      <Card
        isHoverable
        className={`${!hasWebsiteUrl && "hidden"} ${
          !hasGithubUrl ? "col-span-4" : "col-span-2"
        } ${
          hasVisual
            ? hasWebsiteUrl && !hasGithubUrl
              ? "lg:col-start-3 lg:col-span-2"
              : "lg:col-start-3 lg:col-span-1"
            : hasWebsiteUrl && !hasGithubUrl
            ? "lg:col-start-1 lg:col-span-2"
            : "lg:col-start-1 lg:col-span-1"
        } ${
          hasVisual
            ? "lg:row-start-3 lg:row-end-4"
            : "lg:row-start-4 lg:row-end-5"
        } lg:max-h-24 opacity-0 mobile-animation websiteUrlCard`}
      >
        <Link
          href={websiteUrl || "#"}
          rel="noopener noreferrer"
          target="_blank"
          className="min-h-full flex justify-center items-center"
        >
          <CardBody className="justify-center items-center">
            {hasWebsiteUrl ? (
              <LinkSVG />
            ) : (
              <h2 className="font-bold text-xl text-gray-400 text-center">
                Coming Soon!
              </h2>
            )}
          </CardBody>
        </Link>
      </Card>

      <Card
        isHoverable
        className={`${!hasGithubUrl && "hidden"} ${
          !hasWebsiteUrl ? "col-span-4" : "col-span-2"
        } ${
          hasVisual
            ? !hasWebsiteUrl && hasGithubUrl
              ? "lg:col-start-3 lg:col-span-2"
              : "lg:col-start-4 lg:col-span-1"
            : !hasWebsiteUrl && hasGithubUrl
            ? "lg:col-start-1 lg:col-span-2"
            : "lg:col-start-2 lg:col-span-1"
        } ${
          hasVisual
            ? "lg:row-start-3 lg:row-end-4"
            : "lg:row-start-4 lg:row-end-5"
        } lg:max-h-24 opacity-0 mobile-animation githubUrlCard`}
      >
        <Link
          href={githubUrl || "#"}
          rel="noopener noreferrer"
          target="_blank"
          className="min-h-full flex justify-center items-center"
        >
          <CardBody className="justify-center items-center">
            <GithubSVG />
          </CardBody>
        </Link>
      </Card>

      {isZoomed && hasImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} preview`}
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
        >
          <button
            type="button"
            onClick={() => setIsZoomed(false)}
            aria-label="Close preview"
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
          >
            ×
          </button>
          <div
            className="relative w-full max-w-7xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imgUrl}
              alt={`${title} image enlarged`}
              fill
              sizes="100vw"
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};
