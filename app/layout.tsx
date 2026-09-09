import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Providers from "./providers";
import { NavbarSection } from "./components/ui/Navbar";
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://tukangdata.com"),
	title: "Tukang Data — Fullstack Web & Data Engineer",
	description:
		"Thosan Girisona (Seceng) — a data handyman who also builds the web. Data platforms, pipelines, dashboards, and fast websites. Data? Let's go. Web? Full gas.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${display.variable} ${mono.variable} font-display`}>
				<main className="dark text-foreground bg-background min-h-screen">
					<NavbarSection />
					<main className="p-4 pb-12 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible">
						<Providers>{children}</Providers>
					</main>
				</main>
			</body>
		</html>
	);
}
