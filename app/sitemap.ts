import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://tukangdata.com",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: "https://tukangdata.com/contact",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: "https://tukangdata.com/experiences",
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.8,
		},
	];
}
