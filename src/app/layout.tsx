import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import ScrollProgress from "../components/scrollProgress";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tasya Nabila Hasanuddin | Portfolio",
  description: "Fullstack Engineer focused on backend development, cloud computing, and modern web experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} text-[#EEEEEE] antialiased`}>
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
