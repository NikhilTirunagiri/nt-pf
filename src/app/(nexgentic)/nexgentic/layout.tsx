import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif  = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
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
    <div className={`${instrumentSerif.className} md:flex-row h-screen overflow-hidden`}>
      {children}
    </div>
  );
}
