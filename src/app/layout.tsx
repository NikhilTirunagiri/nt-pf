import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Noto_Sans } from "next/font/google";
import "./globals.css";
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
        <div className="flex flex-row justify-items-start pt-3 pl-2 text-13px pr-2">
            <div className="max-h-full">
                  <Sidebar ></Sidebar>
            </div>
            <div className="w-full flex flex-col">
                  <Topbar></Topbar>
              <div className="gap-2 flex flex-col"> 
                <span className="pb-4">
                  {children}
                </span>
              </div>
            </div>
        </div>
      </body>
    </html>
  );
}
