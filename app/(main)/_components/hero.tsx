import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="text-dark relative flex items-center justify-center pt-52 pb-8"
      data-theme="dark"
    >
      <div className="relative z-10 container mb-8 flex flex-col items-center gap-5 lg:flex-row xl:flex-col">
        {/* Header - Hidden on XL screens */}
        <div className="flex w-full max-w-[36.5rem] flex-grow text-center xl:hidden">
          <div className="prose dark:prose-invert mx-auto mb-6 max-w-none">
            <div className="text-center text-[52px] font-bold text-[#a5a5fd]">
              OUR WAYS TO REACH YOUR DESTINATION WISELY
            </div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="flex w-full flex-col items-center justify-center gap-8">
          {/* First Row - Only WayWise Tech */}
          <div className="flex w-full flex-col items-center justify-around gap-5 md:flex-row xl:w-[75%]">
            <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row xl:w-[85%]">
              {/* WayWise Tech - Middle Elevated */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group flex aspect-[4/3] h-auto w-full translate-y-0 flex-col items-center justify-center gap-2 rounded-xl bg-slate-100/50 p-5 backdrop-blur hover:bg-slate-50/60 xl:h-52 xl:w-72 xl:-translate-y-8"
                href="https://waywisetrading.com/"
              >
                <div>
                  <Image
                    alt="wwt_logo"
                    width={300}
                    height={209}
                    src="/images/WWTrading.png"
                    className="w-36 object-contain transition group-hover:scale-110"
                  />
                </div>
                <div className="prose dark:prose-invert mx-auto max-w-none text-center text-xs leading-tight font-semibold text-black xl:text-xl">
                  <p className="col-start-2">
                    One Stop Solutions for all your Export-Import Need
                  </p>
                </div>
              </a>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row xl:w-[85%]">
              {/* WayWise Tech - Middle Elevated */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group flex aspect-[4/3] h-auto w-full translate-y-0 flex-col items-center justify-center gap-2 rounded-xl bg-slate-100/50 p-5 backdrop-blur hover:bg-slate-50/60 xl:h-52 xl:w-72 xl:-translate-y-8"
                href="https://www.waywisetech.com/"
              >
                <div>
                  <Image
                    alt="wwt_logo"
                    width={300}
                    height={209}
                    src="/images/wwt_logo_v2.webp"
                    className="w-36 object-contain transition group-hover:scale-110"
                  />
                </div>
                <div className="prose dark:prose-invert mx-auto max-w-none text-center text-xs leading-tight font-semibold text-black xl:text-xl">
                  <p className="col-start-2">
                    Complete IT & Software Solutions
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex w-full flex-col items-center justify-between gap-5 md:flex-row">
            {/* WayWise Builders */}
            <div className="flex w-full xl:w-auto">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group flex aspect-[4/3] h-auto w-full flex-col items-center justify-center gap-4 rounded-xl bg-slate-100/50 p-5 backdrop-blur hover:bg-slate-50/60 xl:h-52 xl:w-72"
                href="https://www.waywisebuilders.com/"
              >
                <div>
                  <Image
                    alt="wwc-logo"
                    width={512}
                    height={110}
                    src="/images/WWC-logo.webp"
                    className="w-48 object-contain transition group-hover:scale-110"
                  />
                </div>
                <div className="prose dark:prose-invert mx-auto max-w-none text-center text-xs leading-tight font-semibold text-black xl:text-xl">
                  <p className="col-start-2">
                    Your Household & Residential Solutions
                  </p>
                </div>
              </a>
            </div>

            {/* Center Text - Visible on XL screens */}
            <div className="hidden max-w-[36.5rem] text-center xl:block">
              <div className="prose dark:prose-invert mx-auto max-w-none">
                <div className="text-center text-[52px] leading-tight font-bold text-[#a5a5fd] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  OUR WAYS TO REACH YOUR DESTINATION WISELY
                </div>
              </div>
            </div>

            {/* WayWise Jobs */}
            <div className="flex w-full xl:w-auto">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group flex aspect-[4/3] h-auto w-full flex-col items-center justify-center gap-2 rounded-xl bg-slate-100/50 p-5 backdrop-blur hover:bg-slate-50/60 xl:h-52 xl:w-72"
                href="https://www.waywisejobs.com/"
              >
                <div>
                  <Image
                    alt="Jobs"
                    width={512}
                    height={411}
                    src="/images/Jobs.webp"
                    className="w-36 object-contain transition group-hover:scale-110"
                  />
                </div>
                <div className="prose dark:prose-invert mx-auto max-w-none text-center text-xs leading-tight font-semibold text-black xl:text-xl">
                  <p className="col-start-2">Choose your Career</p>
                </div>
              </a>
            </div>
          </div>

          {/* Third Row */}
          <div className="flex w-full flex-col items-center justify-around gap-5 md:flex-row xl:w-[75%]">
            {/* Designer's Dream */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="group flex aspect-[4/3] h-auto w-full flex-col items-center justify-center gap-2 rounded-xl bg-slate-100/50 p-5 backdrop-blur hover:bg-slate-50/60 xl:h-52 xl:w-72"
              href="#"
            >
              <div>
                <Image
                  alt="Designer's Dream"
                  width={450}
                  height={450}
                  src="/images/Designer's-Dream-Final.webp"
                  className="w-28 object-contain transition group-hover:scale-110"
                />
              </div>
              <div className="prose dark:prose-invert mx-auto max-w-none text-center text-xs font-semibold text-black xl:text-base">
                <p className="col-start-2 leading-[1.3]">
                  Where Your Dream Touches Our Designer&apos;s Elegant Style.
                </p>
              </div>
            </a>

            {/* Sport Clips */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="group flex aspect-[4/3] h-auto w-full flex-col items-center justify-center gap-2 rounded-xl bg-slate-100/50 p-5 backdrop-blur hover:bg-slate-50/60 xl:h-52 xl:w-72"
              href="https://sportclips.com/"
            >
              <div>
                <Image
                  alt="sportclips"
                  width={720}
                  height={216}
                  src="/images/sportclips.webp"
                  className="w-36 object-contain transition group-hover:scale-110"
                />
              </div>
              <div className="prose dark:prose-invert mx-auto max-w-none text-center text-xs leading-tight font-semibold text-black xl:text-xl">
                <p className="col-start-2">Change Your Look</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 select-none">
        <Image
          src="/images/waywise_extended.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
