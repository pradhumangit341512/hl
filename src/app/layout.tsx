import type { Metadata } from "next";
import { Cardo, Inter } from "next/font/google";
import "./globals.css";

const cardo = Cardo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cardo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Halli Jaipur - Fine Dining Restaurant, Cafe & Banquet | Jaipur",
  description:
    "Experience the royal taste of Jaipur. Fine dining restaurant, rooftop cafe, luxury banquet hall, and panoramic rooftop dining. Book a table today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cardo.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
