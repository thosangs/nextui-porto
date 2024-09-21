import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: ["/", "/contact", "/experiences"],
			disallow: "",
		},
		sitemap: "https://tukangdata.com/sitemap.xml",
	};
}
