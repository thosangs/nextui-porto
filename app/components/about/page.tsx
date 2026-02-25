"use client";
import { useEffect } from "react";
import Image from "next/image";

import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";
import { Tooltip } from "@nextui-org/tooltip";

import { Service } from "../Service";
import { iconType, serviceType } from "@/app/types";
import { serviceList, techonologyIconList, whoAmIData } from "@/app/utils";
import aboutAnimation from "../../utils/aboutSectionAnimations";
import IconComponent from "../ui/IconComponent";

const { fullName, profession, whoAmI, quote } = whoAmIData;

export default function About() {
	useEffect(() => {
		const mq = window.matchMedia("(min-width: 1024px)");

		if (mq.matches) {
			aboutAnimation.whoAmIAnimation();
			aboutAnimation.professionAnimation();
			aboutAnimation.quoteAnimation();
			aboutAnimation.techonologyIconListAnimation();
			aboutAnimation.verticalImageAnimation();
			aboutAnimation.educationContentAnimation();
		} else {
			aboutAnimation.mobileAnimation();
		}
	}, []);

	return (
		<div className="grid grid-cols-4 lg:grid-cols-3 lg:[grid-template-rows:repeat(4,minmax(100px,auto))] gap-5">
			<Card className="col-span-full lg:row-start-2 lg:row-span-2 lg:col-start-2 lg:col-span-1">
				<CardBody className="flex-col items-center justify-center gap-2">
					<Avatar
						name="LM"
						src="images/cutoff.jpg"
						className="w-24 h-24 text-large brightness-90"
					/>
					<h1 className="text-4xl font-bold">{fullName}</h1>

					{/* <Button>Download CV</Button> */}
				</CardBody>
			</Card>

			<Card className="col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-2 opacity-0 mobile-animation whoAmICard">
				<CardBody className="gap-2">
					<div className="text-3xl font-bold">Who am I?</div>
					<div className="text-lg text-gray-400">{whoAmI} </div>
				</CardBody>
			</Card>

			<Card className="col-span-full row-start-2 row-end-3 lg:row-start-2 lg:col-start-1 lg:col-span-1 bg-blue opacity-0 mobile-animation professionCard">
				<CardBody className="justify-center items-center">
					<h2 className="text-2xl lg:text-3xl font-bold  text-center">
						{profession}
					</h2>
				</CardBody>
			</Card>

			<Card className="hidden lg:flex col-span-2 lg:row-start-3 lg:row-span-1 lg:col-start-3 lg:col-span-1 bg-blue opacity-0 mobile-animation quoteCard">
				<CardBody className="justify-center items-center lg:row-start-2 lg:cols-start-4">
					<div className="text-3xl font-bold text-center">&#34;{quote}&#34;</div>
				</CardBody>
			</Card>

			<Card className="col-span-full lg:row-start-3 lg:row-span-2 lg:col-start-1 lg:col-span-1 opacity-0 mobile-animation technologyIconList">
				<CardBody className="gap-4">
					<h2 className="text-3xl font-bold">Tech Stacks</h2>

					<div className="flex flex-wrap justify-center lg:justify-center gap-x-10 gap-y-6">
						{techonologyIconList.map(({ name, icon }: iconType) => (
							<Tooltip key={`technology-item-${name}`} content={name}>
								<IconComponent icon={icon} />
								{/* <Chip variant="flat">{name}</Chip> */}
							</Tooltip>
						))}
					</div>
				</CardBody>
			</Card>

			{/* vertical img */}
			<div className="hidden lg:block lg:row-start-1 lg:row-span-2 lg:col-start-3  lg:h-[350px] rounded-xl relative opacity-0 mobile-animation verticalImage">
				<Image
					src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3"
					priority={true}
					alt="profile image"
					fill
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						borderRadius: "15px",
					}}
				/>
			</div>

			<Card className="col-span-full lg:row-start-4 lg:row-span-1 lg:col-start-2 lg:col-span-2 opacity-0 mobile-animation educationContent">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="hidden lg:block icon icon-tabler icon-tabler-briefcase absolute top-0 -right-7"
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
					<path d="M7 7v-1a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v1"></path>
					<rect x="3" y="7" width="18" height="13" rx="2"></rect>
					<line x1="16" y1="3" x2="16" y2="7"></line>
					<line x1="8" y1="3" x2="8" y2="7"></line>
					<line x1="12" y1="10" x2="12" y2="14"></line>
				</svg>
				<CardBody className="gap-2 flex-wrap">
					<h2 className="text-3xl font-bold ">Services</h2>
					<div className="flex flex-col lg:flex-col gap-2">
						{serviceList.map((serviceItem: serviceType) => (
							<Service
								key={`service-item-${serviceItem.service}`}
								service={serviceItem.service}
								description={serviceItem.description}
							/>
						))}
					</div>
				</CardBody>
			</Card>
		</div>
	);
}
