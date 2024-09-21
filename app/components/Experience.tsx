import { experienceType } from "../types";

export const Experience = ({
	career,
	years,
	description,
	location,
	company,
	svg,
}: experienceType) => {
	return (
		<div className="mb-4">
			<h3 className="text-xl inline">{career}</h3>
			<span className="text-sm text-gray-400"> ({years})</span>
			<p className="text-lg text-gray-600 font-semibold">{company}</p>
			<p className="text-md text-gray-500 italic">{location}</p>
			<p className="text-lg text-gray-400 mt-2">{description}</p>
		</div>
	);
};
