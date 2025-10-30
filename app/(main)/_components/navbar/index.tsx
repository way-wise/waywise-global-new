"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

const navigationLinks = [
  { href: "/" as const, label: "Home" },
  { href: "/services" as const, label: "Services" },
  { href: "/about-us" as const, label: "About Us" },
  { href: "/contact-us" as const, label: "Contact Us" },
] as const;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(mobileMenuRef as React.RefObject<HTMLElement>, () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  });

  return (
    <header className="fixed top-0 left-0 z-40 w-full bg-gray-300/60 backdrop-blur-lg transition">
      <div className="py-5">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            {/* Logo */}
            <div className="w-44 max-w-full px-4 sm:w-60 md:w-80 lg:w-96 xl:mr-12">
              <Link href="/" className="header-logo">
                <div className="h-auto w-44 sm:w-52 md:w-56 lg:max-w-60 dark:brightness-200">
                  <Image
                    src="/images/wwg_logo_horizontal.webp"
                    alt="wwg_logo"
                    width={423}
                    height={100}
                    priority
                    className="h-auto w-full"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation & Mobile Menu Button */}
            <div className="flex w-full items-center justify-end gap-6 px-4">
              {/* Desktop Navigation */}
              <nav className="hidden lg:block">
                <ul className="flex space-x-8">
                  {navigationLinks.map((link) => (
                    <li key={link.href} className="group relative text-white">
                      <Link
                        href={{ pathname: link.href }}
                        className="block rounded py-2 text-base font-medium whitespace-nowrap text-white no-underline ring-offset-background transition-colors hover:text-primary hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 lg:mr-0 lg:px-0 lg:py-6"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <span className="my-1.5 block h-0.5 w-[30px] bg-white"></span>
                <span className="my-1.5 block h-0.5 w-[30px] bg-white"></span>
                <span className="my-1.5 block h-0.5 w-[30px] bg-white"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden" />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 z-50 h-screen w-full max-w-[320px] transform bg-gray-800/95 px-4 py-10 text-white backdrop-blur transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between rounded-lg bg-white/50 px-5">
          <Link
            href="/"
            className="header-logo block w-full max-w-[150px] py-6 lg:py-3"
          >
            <div className="h-auto w-44 sm:w-52 md:w-56 lg:max-w-60 dark:brightness-200">
              <Image
                src="/images/wwg_logo_horizontal.webp"
                alt="wwg_logo"
                width={423}
                height={100}
                className="h-auto w-full"
              />
            </div>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-x-circle-fill size-6"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </button>
        </div>
        <nav>
          <ul className="flex flex-col gap-2">
            {navigationLinks.map((link) => (
              <li key={link.href} className="group relative">
                <Link
                  href={{ pathname: link.href }}
                  className="block rounded px-3 py-2 text-base font-medium whitespace-nowrap text-primary no-underline ring-offset-background transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
