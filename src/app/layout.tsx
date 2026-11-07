import type { Metadata } from "next";
import { Amiri, Instrument_Sans } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-amiri",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rafi Ali",
  description: "UX & Design Engineer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${amiri.variable} ${instrumentSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}