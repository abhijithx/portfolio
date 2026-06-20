import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhijith Sudhakaran — Engineer",
  description:
    "Portfolio of Abhijith Sudhakaran — Engineer specializing in Java, Systems Design, Cloud Infrastructure, and Distributed Systems.",
  keywords: [
    "Abhijith Sudhakaran",
    "Backend Engineer",
    "Go",
    "Golang",
    "Cloud",
    "Systems Design",
    "Portfolio",
    "Developer",
  ],
  authors: [{ name: "Abhijith Sudhakaran" }],
  openGraph: {
    title: "Abhijith Sudhakaran — Engineer",
    description:
      "Backend Engineer specializing in Java, Systems Design, and Cloud Infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
