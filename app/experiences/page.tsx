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
					{experience.svg}
					<CardBody className="gap-2 flex-wrap">
						<div className="flex flex-col lg:flex-col gap-2">
							<Experience
								career={experience.career}
								years={experience.years}
								description={experience.description}
								location={experience.location}
								company={experience.company}
								svg={experience.svg}
							/>
						</div>
					</CardBody>
				</Card>
			))}
		</div>
	);
}
