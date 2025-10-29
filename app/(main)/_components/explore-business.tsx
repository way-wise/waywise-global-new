import Image from "next/image";
import Link from "next/link";

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
    id: 2,
    title: "Way-Wise Trading",
    description:
      "One Stop Solutions for all your Export-Import Need. Way-Wise Trading has limited exports in garment manufacturing and exporting, offering high-quality, innovative fabrics and garments for diverse markets.",
    backgroundImage: "/images/export-import-trading.webp",
    href: "https://waywisetrading.com/",
    buttonText: "Learn more",
  },
  {
    id: 3,
    title: "Sport Clips",
    description:
      "Change Your Look. Sport Clips Haircuts is a leading U.S. salon franchise specializing in men's and boys' haircuts in a sports-themed environment.",
    backgroundImage: "/images/Sport_Clips_Haircuts_ctgqyp.webp",
    href: "https://sportclips.com/",
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
    id: 5,
    title: "Way-Wise Jobs",
    description:
      "Choose your Career. Connecting talented professionals with exciting career opportunities across various industries and helping businesses find the right talent.",
    backgroundImage: "/images/way-wise-jobs.webp",
    href: "https://www.waywisejobs.com/",
    buttonText: "Learn more",
  },
  {
    id: 6,
    title: "Designer's Dream",
    description:
      "Where Your Dream Touches Our Designer's Elegant Style. Creative design solutions that transform your vision into stunning reality with professional expertise and artistic flair.",
    backgroundImage: "/images/designer-dreams.jpg",
    href: "#",
    buttonText: "Learn more",
  },
];

const ExploreBusiness = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-20 lg:py-24 dark:bg-gray-900">
      <div className="mx-auto px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            Explore our Businesses
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Discover our diverse portfolio of companies, each specializing in
            different industries and providing exceptional services worldwide.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {businessCards.map((card) => (
            <div
              key={card.id}
              className="group relative h-80 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Background Image */}
              <Image
                src={card.backgroundImage}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              Dark Overlay
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40"></div>
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Title */}
                <div>
                  <h3 className="mb-4 text-4xl font-bold text-white drop-shadow-lg">
                    {card.title}
                  </h3>
                </div>

                {/* Description and Button */}
                <div>
                  <p className="mb-6 text-xl leading-relaxed text-white/90 drop-shadow-md">
                    {card.description}
                  </p>

                  {/* Button */}
                  <Link
                    href={{ pathname: card.href }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg border border-white/30 bg-white/20 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:border-white/50 hover:bg-white/30 focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:outline-none"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreBusiness;
