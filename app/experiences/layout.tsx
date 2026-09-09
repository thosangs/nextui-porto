import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences — Tukang Data",
  description:
    "Work history of Thosan (Seceng) — Data & Analytics Engineering roles across Insight Timer, ZEALS, eFishery, Bukalapak, and mentoring at dibimbing.id & ITERA.",
};

export default function ExperiencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
