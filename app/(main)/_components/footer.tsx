import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24"
      style={{
        backgroundImage: 'url("")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#ddd",
      }}
    >
      <div className="dark:from-dark/10 dark:via-dark/90 dark:to-dark absolute top-0 left-0 -z-10 h-full w-full bg-gradient-to-t from-white/10 via-white/90 to-white"></div>
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href={{ pathname: "/" }} className="mb-8 inline-block">
                <div className="h-auto w-64 dark:brightness-200">
                  <Image
                    src="/images/wwg_logo_horizontal.webp"
                    alt="wwg_logo"
                    width={423}
                    height={100}
                    className="h-auto w-full"
                  />
                </div>
              </Link>
              <p className="mb-9 text-base leading-relaxed text-black dark:text-white">
                Welcome to Way-Wise Global a diversified company offering a wide
                range of services across multiple industries. Specializing in
                export-import, travel and tourism, education consultancy,
                international job recruitment, event management and many more.
              </p>
              <div className="flex items-center"></div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-8/12 xl:w-7/12">
            <div className="col-span-2 grid grid-cols-4 gap-6 md:col-span-4 md:grid-cols-8 lg:col-span-7 lg:grid-cols-12">
              <nav className="col-span-2 md:col-span-4 lg:col-span-4">
                <h2 className="mb-6 text-xl font-medium text-black md:mb-10 dark:text-white">
                  ABOUT
                </h2>
                <ul className="m-0 list-none p-0">
                  <li className="mb-2 leading-6">
                    <Link
                      href={{ pathname: "/" }}
                      className="mb-1 inline-block text-base text-black no-underline duration-300 hover:text-primary md:mb-4 dark:text-gray-300 dark:hover:text-primary"
                    >
                      Company Info
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href={{ pathname: "/" }}
                      className="mb-1 inline-block text-base text-black no-underline duration-300 hover:text-primary md:mb-4 dark:text-gray-300 dark:hover:text-primary"
                    >
                      How WayWiseGlobal works
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href={{ pathname: "/" }}
                      className="mb-1 inline-block text-base text-black no-underline duration-300 hover:text-primary md:mb-4 dark:text-gray-300 dark:hover:text-primary"
                    >
                      Investors
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href={{ pathname: "/" }}
                      className="mb-1 inline-block text-base text-black no-underline duration-300 hover:text-primary md:mb-4 dark:text-gray-300 dark:hover:text-primary"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav className="col-span-2 md:col-span-4 lg:col-span-4">
                <h2 className="mb-6 text-xl font-medium text-black md:mb-10 dark:text-white">
                  SERVICES
                </h2>
                <ul className="m-0 list-none p-0">
                  <li className="mb-2 leading-6">
                    <Link
                      href={{ pathname: "/" }}
                      className="mb-1 inline-block text-base text-black no-underline duration-300 hover:text-primary md:mb-4 dark:text-gray-300 dark:hover:text-primary"
                    >
                      Air Ticketing
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href={{ pathname: "/" }}
                      className="mb-1 inline-block text-base text-black no-underline duration-300 hover:text-primary md:mb-4 dark:text-gray-300 dark:hover:text-primary"
                    >
                      Work Abroad
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href={{ pathname: "/" }}
                      className="mb-1 inline-block text-base text-black no-underline duration-300 hover:text-primary md:mb-4 dark:text-gray-300 dark:hover:text-primary"
                    >
                      Hajj Pilgrims
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href={{ pathname: "/" }}
                      className="mb-1 inline-block text-base text-black no-underline duration-300 hover:text-primary md:mb-4 dark:text-gray-300 dark:hover:text-primary"
                    >
                      Export Import
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav className="col-span-2 md:col-span-4 lg:col-span-4">
                <h2 className="mb-6 text-xl font-medium text-black md:mb-10 dark:text-white">
                  SUPPORT
                </h2>
                <ul className="m-0 list-none p-0">
                  <li className="mb-2 leading-6">
                    <Link
                      href={{ pathname: "/" }}
                      className="mb-1 inline-block text-base text-black no-underline duration-300 hover:text-primary md:mb-4 dark:text-gray-300 dark:hover:text-primary"
                    >
                      Company Info
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href={{ pathname: "/" }}
                      className="mb-1 inline-block text-base text-black no-underline duration-300 hover:text-primary md:mb-4 dark:text-gray-300 dark:hover:text-primary"
                    >
                      How WayWiseGlobal works
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href={{ pathname: "/" }}
                      className="mb-1 inline-block text-base text-black no-underline duration-300 hover:text-primary md:mb-4 dark:text-gray-300 dark:hover:text-primary"
                    >
                      Investors
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href={{ pathname: "/" }}
                      className="mb-1 inline-block text-base text-black no-underline duration-300 hover:text-primary md:mb-4 dark:text-gray-300 dark:hover:text-primary"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white/20 py-6 backdrop-blur">
        <p className="text-center text-base text-gray-900 dark:text-gray-300">
          <span className="text-lg font-light">©</span> 2025 Copyright
          WayWiseGlobal. All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
