"use client";
import { useEffect } from "react";
import Link from "next/link";

import { Card, CardBody } from "@nextui-org/card";

import { contactData } from "@/app/utils";
import { Form } from "../components/Form";
import { GithubSVG, InstagramSVG, LinkedInSVG } from "../components/ui/icons/";
import contactAnimation from "../utils/contactSectionAnimations";

export default function Contact() {
	const { github, linkedIn, instagram } = contactData;

	useEffect(() => {
		const mq = window.matchMedia("(min-width: 1024px)");
		if (!mq.matches) return contactAnimation.mobileAnimation();

		contactAnimation.emailAnimation();
		contactAnimation.githubAnimation();
		contactAnimation.linkedInAnimation();
		contactAnimation.formAnimation();
	}, []);

	return (
		<section className="p-4 pb-12 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible">
			<div className="grid grid-rows-2 grid-cols-2 gap-5 max-w-2xl mx-auto">
				<Card
					isHoverable
					className="col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-1 opacity-0 mobile-animation emailCard"
				>
					<Link
						href={github}
						rel="noopener noreferrer"
						target="_blank"
						className="min-h-full flex justify-center items-center"
					>
						<CardBody
							className="flex justify-center items-center"
							onClick={() => window.open(`${github}`, "_blank")}
						>
							{/* <XSVG /> */}
							<GithubSVG />
						</CardBody>
					</Link>
				</Card>

				<Card
					isHoverable
					className="col-span-full lg:row-start-2 lg:row-span-1 lg:col-span-1 cursor-pointer opacity-0 mobile-animation linkedInCard"
				>
					<Link
						href={instagram}
						rel="noopener noreferrer"
						target="_blank"
						className="min-h-full flex justify-center items-center"
					>
						<CardBody
							className="flex justify-center items-center"
							onClick={() => window.open(`${instagram}`, "_blank")}
						>
							<InstagramSVG />
						</CardBody>
					</Link>
				</Card>

				<Card
					isHoverable
					className="col-span-full lg:row-start-1 lg:row-span-2 lg:col-start-2 cursor-pointer opacity-0 mobile-animation githubCard "
				>
					<Link
						href={linkedIn}
						rel="noopener noreferrer"
						target="_blank"
						className="min-h-full flex justify-center items-center"
					>
						<CardBody className="flex justify-center items-center gap-2">
							<LinkedInSVG />
							<h1 className="text-3xl font-bold">LinkedIn</h1>
							<p className="text-xl text-gray-400  text-center">
								Butuh cepet?, DM aja
							</p>
						</CardBody>
					</Link>
				</Card>

				<div className="col-span-full mt-8 opacity-0 mobile-animation form">
					<Form />
				</div>
			</div>
		</section>
	);
}
