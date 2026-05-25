import Image from "next/image";

const HeroV2 = () => {
  return (
    <section className="mt-20 w-full">
      <Image
        src="/images/way-wise-banner.png"
        alt="WayWise banner"
        width={1920}
        height={1080}
        className="h-auto w-full"
        priority
      />
    </section>
  );
};

export default HeroV2;
