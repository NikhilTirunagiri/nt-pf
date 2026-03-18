import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Noto_Sans } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Nikhil Tirunagiri",
  description: "Computer science student at George Mason University, Virginia. Interested in software development, machine learning, and artificial intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${notoSans.variable} antialiased`}>
        <div className="flex flex-col md:flex-row h-screen overflow-hidden pt-0 pl-2 text-13px pr-2 ">
            <div className="md:fixed md:h-full md:overflow-hidden md:mt-2 border-b md:border-b-0 pb-2 md:pb-0">
                  <Sidebar ></Sidebar>
            </div>
            <div className="w-full flex flex-col md:ml-44 overflow-y-auto flex-1">
              <div className="gap-2 pt-3 md:pt-5 flex flex-col pb-4">
                  {children}
              </div>
            </div>
        </div>
      </body>
    </html>
  );
}
