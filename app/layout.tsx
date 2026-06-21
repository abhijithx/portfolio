import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhijith Sudhakaran — Engineer",
  description:
    "Portfolio of Abhijith Sudhakaran — MCA student and Engineer specializing in Java, Systems Design, Cloud Infrastructure, and Distributed Systems.",
  keywords: [
    "Abhijith Sudhakaran",
    "Backend Engineer",
    "Java",
    "Go",
    "Golang",
    "Cloud",
    "Systems Design",
    "Portfolio",
    "Developer",
    "MCA",
    "CET Trivandrum",
  ],
  authors: [{ name: "Abhijith Sudhakaran", url: "https://github.com/abhijithx" }],
  creator: "Abhijith Sudhakaran",
  openGraph: {
    title: "Abhijith Sudhakaran — Engineer",
    description:
      "MCA Student and Engineer specializing in Java, Systems Design, and Cloud Infrastructure.",
    type: "website",
    locale: "en_IN",
    siteName: "Abhijith Sudhakaran Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Abhijith Sudhakaran — Engineer",
    description:
      "MCA Student and Engineer specializing in Java, Systems Design, and Cloud Infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#071224",
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
