import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsClientMarker from "../components/JsClientMarker";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vexora — Premium Software Studio",
  description:
    "Vexora builds premium software, digital systems, and practical technology education for modern businesses.",
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
      <body className="min-h-full bg-[#050505] text-slate-100">
        {/* Client-only marker that sets .js after hydration to enable JS-dependent fallbacks */}
        <JsClientMarker />
        {/* Global navbar/title bar shown on every page */}
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
