import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Tukang Data",
  description:
    "Got a data or web problem? Get in touch with Thosan (Seceng) — Fullstack Web & Data Engineer.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
