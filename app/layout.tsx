import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { NavbarSection } from "./components/ui/Navbar";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://tukangdata.com"),
	title: "Tukang Data",
	description: "Thosan Girisona (Seceng) | Solusi Data Aman, Web juga Gas",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
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
