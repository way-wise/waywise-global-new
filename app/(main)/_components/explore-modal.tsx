"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const businessCards = [
  {
    id: 1,
    title: "Way-Wise Tech",
    description:
      "Complete IT & Software Solutions. A global software development company specializing in creating innovative custom solutions to drive business growth and meet industry needs.",
    backgroundImage: "/images/way-wise-tech-1.webp",
    href: "https://www.waywisetech.com/",
    buttonText: "Learn more",
  },
  {
    id: 5,
    title: "Way-Wise Jobs",
    description:
      "Choose your Career. Connecting talented professionals with exciting career opportunities across various industries and helping businesses find the right talent.",
    backgroundImage: "/images/way-wise-jobs.webp",
    href: "https://www.waywisejobs.com/",
    buttonText: "Learn more",
  },
  {
    id: 2,
    title: "Way-Wise Trading",
    description:
      "One Stop Solutions for all your Export-Import Need. Way-Wise Trading has limited exports in garment manufacturing and exporting, offering high-quality, innovative fabrics and garments for diverse markets.",
    backgroundImage: "/images/export-import-trading.webp",
    href: "https://waywisetrading.com/",
    buttonText: "Learn more",
  },
  {
    id: 4,
    title: "Way-Wise Builders",
    description:
      "Your Household & Residential Solutions. Professional construction and renovation services providing comprehensive building solutions for residential and commercial projects.",
    backgroundImage: "/images/way-wise-constructions-1.webp",
    href: "https://www.waywisebuilders.com/",
    buttonText: "Learn more",
  },
  {
    id: 6,
    title: "Pother Bazar",
    description:
      "We proudly offer premium quality Chinigura Rice from Dinajpur — one of the most popular aromatic rice varieties in Bangladesh. Known for its rich fragrance, soft texture, and authentic taste.",
    backgroundImage: "/images/rice-superhsop.png",
    href: "#",
    buttonText: "Learn more",
  },
];

interface ExploreModalProps {
  onClose: () => void;
}

const ExploreModal = ({ onClose }: ExploreModalProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Compensate for scrollbar width to prevent layout shift/blink
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    const t = setTimeout(() => setVisible(true), 10);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 250);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-250 ${
        visible
          ? "bg-black/60 backdrop-blur-sm"
          : "bg-black/0 backdrop-blur-none"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative flex max-h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-250 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 py-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Explore Our Businesses
            </h2>
            <p className="text-sm text-gray-500">
              Discover our diverse portfolio of companies
            </p>
          </div>
          <button
            onClick={handleClose}
            className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-gray-900"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable cards area */}
        <div className="overflow-y-auto p-6">
          {/* First row — 2 cards */}
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            {businessCards.slice(0, 2).map((card) => (
              <BusinessCard key={card.id} card={card} />
            ))}
          </div>
          {/* Second row — 3 cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {businessCards.slice(2).map((card) => (
              <BusinessCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

type Card = (typeof businessCards)[number];

const BusinessCard = ({ card }: { card: Card }) => (
  <div className="group relative h-64 overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <Image
      src={card.backgroundImage}
      alt={card.title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/50" />
    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
      <h3 className="pb-6 text-4xl font-bold text-white drop-shadow-lg">
        {card.title}
      </h3>
      <div>
        <Link
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:border-white/50 hover:bg-white/30"
        >
          {card.buttonText}
          <svg
            className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

export default ExploreModal;
