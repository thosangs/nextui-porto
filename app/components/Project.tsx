"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import Image from "next/image";

import { ProjectType, TechnologyType } from "../types";

export const Project = (project: ProjectType) => {
  const {
    description,
    title,
    subtitle,
    icon,
    imgUrl,
    videoUrl,
    technologies,
    githubUrl,
    websiteUrl,
  } = project;

  const hasWebsiteUrl = websiteUrl && websiteUrl !== "NONE";
  const hasGithubUrl = githubUrl && githubUrl !== "NONE";
  const hasVideo = !!videoUrl && videoUrl !== "";
  const hasImage = !!imgUrl && imgUrl !== "";
  const hasVisual = hasVideo || hasImage;

  const isVimeo = videoUrl?.includes("vimeo.com");
  let vimeoId = "";
  let vimeoHash = "";
  if (isVimeo && videoUrl) {
    const match = videoUrl.match(/vimeo.*\/(\d+)(?:\/(\w+))?/);
    if (match) {
      vimeoId = match[1];
      vimeoHash = match[2] || "";
    }
  }
  const vimeoSrc = `https://player.vimeo.com/video/${vimeoId}?${
    vimeoHash ? `h=${vimeoHash}&` : ""
  }autoplay=1&loop=1&muted=1&playsinline=1&autopause=1&badge=0`;

  const [isZoomed, setIsZoomed] = useState(false);
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

  const media = hasVideo ? (
    isVimeo && vimeoId ? (
      <div className="relative w-full aspect-video border-2 border-white overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-110"
          src={vimeoSrc}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          title={`${title} video`}
        />
      </div>
    ) : (
      <video
        className="w-full aspect-video object-cover border-2 border-white"
        autoPlay
        loop
        muted
        playsInline
        poster={imgUrl}
        src={videoUrl}
      />
    )
  ) : hasImage ? (
    <button
      type="button"
      onClick={() => setIsZoomed(true)}
      aria-label={`Enlarge ${title} screenshot`}
      className="relative w-full aspect-video border-2 border-white overflow-hidden cursor-zoom-in group block"
    >
      <Image
        src={imgUrl}
        alt={`${title} screenshot`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </button>
  ) : null;

  return (
    <div className="reveal grid lg:grid-cols-2 gap-6 items-start">
      {hasVisual && <div>{media}</div>}

      <Card className={hasVisual ? "" : "lg:col-span-2"}>
        <CardBody className="gap-4 p-6">
          <div className="flex items-center gap-3">
            <span className="bg-content3 border-2 border-white p-2 flex-shrink-0 leading-none">
              {icon}
            </span>
            <div className="min-w-0">
              <h2 className="text-2xl font-bold leading-tight">{title}</h2>
              {subtitle && (
                <p className="font-mono text-xs text-toska uppercase tracking-wide mt-1">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <p className="text-gray-300 text-base leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((t: TechnologyType, i: number) => (
              <Chip key={`tech-${i}`} size="sm" variant="flat" className="font-mono">
                {t.name}
              </Chip>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            {hasWebsiteUrl && (
              <Button
                as={Link}
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                radius="none"
                className="bg-toska text-black font-bold"
              >
                Live&nbsp;Demo&nbsp;↗
              </Button>
            )}
            {hasGithubUrl && (
              <Button
                as={Link}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                radius="none"
                variant="bordered"
                className="border-2 border-white font-bold"
              >
                Source&nbsp;↗
              </Button>
            )}
            {!hasWebsiteUrl && !hasGithubUrl && (
              <span className="font-mono text-sm text-gray-500">Coming soon</span>
            )}
          </div>
        </CardBody>
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
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none w-10 h-10 flex items-center justify-center hover:bg-white/10 transition"
          >
            ×
          </button>
          <div
            className="relative w-full max-w-7xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imgUrl}
              alt={`${title} screenshot enlarged`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};
