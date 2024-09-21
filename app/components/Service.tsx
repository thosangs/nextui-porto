import { serviceType } from "../types";

export const Service = ({ service, description }: serviceType) => (
	<div className="mb-4">
		<h3 className="text-xl inline">{service}</h3>
		<p className="text-lg text-gray-400 mt-2">{description}</p>
	</div>
);
