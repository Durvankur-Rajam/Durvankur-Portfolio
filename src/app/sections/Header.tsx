"use client";
import { useState, useEffect } from "react";
import AnimatedContent from "../components/animatedcontent";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      {/* Full-width header that shows initially */}
      <div
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "opacity-0 -translate-y-full" : "opacity-100"
        } hidden md:block`}
      >
        <div className="w-full px-4 md:px-16 py-4 backdrop-blur-sm flex justify-between items-center">
          <Link href="/">
            <Image src="/mylogo.svg" alt="Logo" width={100} height={100} />
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/about" className="nav-item">
              About
            </Link>
            <Link href="/my-projects" className="nav-item">
              Projects
            </Link>
            <Link href="/contact" className="nav-item">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Centered rounded nav that shows after scrolling */}
      <div
        className={`flex justify-center items-center fixed top-3 w-full z-50 transition-all duration-300 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        } hidden md:flex`}
      >
        <div className="backdrop-blur rounded-full">
          <AnimatedContent
            distance={200}
            direction="horizontal"
            reverse={false}
            config={{ tension: 70, friction: 13 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <nav className="flex gap-1 p-1 rounded-full bg-white/20 text-[#D6D2BD]">
              <Link href="/" className="nav-item">
                <Image src="/mylogo.svg" alt="Logo" width={60} height={20} />
              </Link>
              <Link href="/about" className="nav-item">
                About
              </Link>
              <Link href="/my-projects" className="nav-item">
                Projects
              </Link>
              <Link href="/contact" className="nav-item">
                Contact
              </Link>
            </nav>
          </AnimatedContent>
        </div>
      </div>

      <div
        className={`fixed top-0 w-full z-50 flex justify-center items-center md:hidden transition-all duration-300 ${
          scrolled ? "opacity-0 -translate-y-full" : "opacity-100"
        }`}
      >
        <Link href="/" className="z-50">
          <Image
            src="/mylogo.svg"
            alt="Logo"
            width={60}
            height={20}
            className="py-4"
          />
        </Link>
      </div>

      <div
        className={`fixed top-3 w-full z-50 flex justify-center items-center md:hidden transition-all duration-300 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div className="backdrop-blur rounded-full">
          <AnimatedContent
            distance={200}
            direction="horizontal"
            reverse={false}
            config={{ tension: 70, friction: 13 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <nav className="flex gap-1 p-1 rounded-full bg-white/20 text-[#D6D2BD]">
              <Link href="/" className="nav-item z-50">
                <Image src="/mylogo.svg" alt="Logo" width={60} height={20} />
              </Link>
              <Link href="/about" className="nav-item">
                About
              </Link>
              <Link href="/my-projects" className="nav-item">
                Projects
              </Link>
              <Link href="/contact" className="nav-item">
                Contact
              </Link>
            </nav>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};
