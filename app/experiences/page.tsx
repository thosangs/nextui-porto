"use client";
import { useEffect } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Experience } from "@/app/components/Experience";
import { experienceType } from "@/app/types";
import { experienceList } from "@/app/utils";
import experiencesSectionAnimations from "@/app/utils/experiencesSectionAnimations";

export default function About() {
	useEffect(() => {
		const mq = window.matchMedia("(min-width: 1024px)");

		if (mq.matches) {
			experiencesSectionAnimations.experiencesContentAnimation();
		} else {
			experiencesSectionAnimations.mobileAnimation();
		}
	}, []);

	return (
		<div className="grid grid-rows-8 grid-cols-4 lg:grid-cols-3 gap-5">
			{experienceList.map((experience: experienceType) => (
				<Card
					className="col-span-full opacity-0 mobile-animation experiencesContent"
					key={`experience-item-${experience.career}-${experience.company}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="hidden lg:block icon icon-tabler icon-tabler-timeline absolute top-0 -right-7"
						width="200"
						height="200"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="#232323"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M4 16l6 -7l5 5l5 -6"></path>
						<path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
						<path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
						<path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
						<path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
					</svg>
					<CardBody className="gap-2 flex-wrap">
						<div className="flex flex-col lg:flex-col gap-2">
							<Experience
								career={experience.career}
								years={experience.years}
								description={experience.description}
								location={experience.location}
								company={experience.company}
							/>
						</div>
					</CardBody>
				</Card>
			))}
		</div>
	);
}
