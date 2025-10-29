import Image from "next/image";

const ServicesPage = () => {
  return (
    <>
      <section className="relative h-[300px] md:h-[400px] lg:h-[650px]">
        <div>
          <Image
            src="/images/service_hero.jpg"
            alt="Services"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/30">
            <h1 className="text-6xl font-bold text-white">Services</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Services We Provide</h2>
          <p>
            At Way-Wise Global, we pride ourselves on delivering a diverse range
            of services tailored to meet your needs. Our expertise spans across
            industries, ensuring you get the best solutions, every time.
          </p>
          <div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
