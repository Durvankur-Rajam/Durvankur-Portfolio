import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Footer from "./sections/Footer";
import { Header } from "./sections/Header";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Durvankur Rajam",
  description: "Durvankur Rajam's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Durvankur Rajam</title>
        <meta name="description" content="Durvankur Rajam's portfolio" />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content="https://durvankur.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Durvankur Rajam" />
        <meta
          property="og:description"
          content="Portfolio of Durvankur Rajam – Software Engineer with a curious, lifelong learner mindset."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/9bd18980-2bde-4db0-8f61-8ec598aff2b6.png"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Durvankur Rajam" />
        <meta
          name="twitter:description"
          content="Portfolio of Durvankur Rajam – Software Engineer with a curious, lifelong learner mindset."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/9bd18980-2bde-4db0-8f61-8ec598aff2b6.png"
        />
      </head>

      <body
        className={twMerge(
          inter.variable,
          jetBrainMono.variable,
          "bg-[#333333] text-[#D6D2BD] font-sans antialiased"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
