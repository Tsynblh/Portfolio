import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Tasya Nabila Hasanuddin | Portfolio",
  description: "Software Engineer | Cloud | Web Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white">
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
