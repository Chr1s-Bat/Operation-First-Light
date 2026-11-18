import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Operation First Deploy | Christian G. Babatuan",
  description:
    "A military-themed first Next.js app by Christian G. Babatuan, BSIT-3 Section 2.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
