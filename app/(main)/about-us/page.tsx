import Image from "next/image";

const ServicesPage = () => {

    const services = [
        {
            id: 1,
            title: "Information Technology (IT)",
            description: "From cutting-edge software development to robust IT support, we provide innovative solutions to drive your business forward. Let us help you stay ahead in the digital era.",
            image: "/images/service-01.webp"
        },
        {
            id: 2,
            title: "Air Ticketing",
            description: "Whether it’s for business or leisure, we simplify your travel with hassle-free air ticketing services. Enjoy competitive pricing and seamless booking for a smooth journey.",
            image: "/images/service-02.png"
        },
        {
            id: 3,
            title: "Export-Import",
            description: "Facilitating global trade, we connect markets with efficient and reliable export-import services. Trust us to handle your logistics with professionalism and care.",
            image: "/images/service-03.png"
        },
        {
            id: 4,
            title: "Overseas Jobs",
            description: "Empowering talent to explore global opportunities, we specialize in international job placements. Your dream career abroad is just a step away with our trusted recruitment services.",
            image: "/images/service-04.png"
        },
        {
            id: 5,
            title: "Construction",
            description: "From concept to completion, we deliver high-quality construction projects tailored to your vision. Our expertise ensures durability, innovation, and aesthetic appeal.",
            image: "/images/service-05.png"
        },
        {
            id: 6,
            title: "Hajj and Umrah Services",
            description: "Experience a spiritually enriching journey with our comprehensive Hajj and Umrah packages. We handle every detail, so you can focus on your pilgrimage.",
            image: "/images/service-06.webp"
        }
    ]
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
        <div className="container py-16">
          <h2 className="text-6xl text-center mb-10">Services We Provide</h2>
          <p className="text-lg text-gray-900 text-center mb-12 max-w-4xl mx-auto">
            At Way-Wise Global, we pride ourselves on delivering a diverse range
            of services tailored to meet your needs. Our expertise spans across
            industries, ensuring you get the best solutions, every time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
                services.map((service) => (
                    <div key={service.id} className="flex flex-col gap-8">
                        <Image src={service.image} alt={service.title} width={128} height={128} className="size-[128px] object-cover" />
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
