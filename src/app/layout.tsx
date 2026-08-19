import type { Metadata, Viewport } from "next"; // 👇 1. Added Viewport import here
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

// 👇 2. Added this block to control the iOS status bar color
export const viewport: Viewport = {
  // IMPORTANT: Change this hex code to the exact hex code of your surface-200 color!
  themeColor: "#1f2937", 
};

export const metadata: Metadata = {
  title: "Amit Cohen | Software Developer",
  description: "Interactive developer portfolio showcasing my academic journey, career tracks, and software projects.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%231f2937%22/><text x=%2250%25%22 y=%2255%25%22 font-size=%2248%22 font-family=%22sans-serif%22 font-weight=%22bold%22 fill=%22%23e5e7eb%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>AC</text></svg>",
  },
  openGraph: {
    title: "Amit Cohen | Software Developer",
    description: "Interactive developer portfolio showcasing my academic journey, career tracks, and software projects.",
    url: "https://acohen-portfolio.vercel.app",
    siteName: "Amit Cohen Portfolio",
    images: [
      {
        url: "/images/profile.jpeg", // Next.js handles this relative path automatically for OG tags!
        width: 1200,
        height: 630,
        alt: "Amit Cohen",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* 👇 3. Added bg-surface-200 here so the "underneath" layer of the site is dark */}
      <body className="bg-surface-200 min-h-full flex flex-col">{children}</body>
    </html>
  );
}