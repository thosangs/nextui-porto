import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./providers";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
  title: "Leo Miranda",
  description: "Leo Miranda | Frontend developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="dark text-foreground bg-background">
          <Providers>{children}</Providers>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
