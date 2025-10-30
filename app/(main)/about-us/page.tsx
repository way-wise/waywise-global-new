import Image from "next/image";
import CTA from "../_components/home/cta";

const AboutUsPage = () => {

  return (
    <>
      <section className="relative h-[300px] md:h-[400px] lg:h-[650px] pt-52">
        <div>
          <Image
            src="/images/about_hero.jpg"
            alt="Services"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/30">
            <h1 className="text-6xl font-bold text-white">About Us</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-16">
          <h2 className="mb-10 text-center text-6xl">About Us</h2>
          <div className="flex flex-col gap-4 text-lg text-gray-900 mb-12">
          <p>
            Every great journey starts with a vision, and ours began with a
            simple idea: to make a meaningful impact through creativity and
            innovation. What started as a small venture with big dreams has
            grown into a dynamic company dedicated to delivering excellence
            across diverse industries.
          </p>
          <p>
            Fueled by passion and a commitment to quality, we’ve built a team of
            experts who share our values and vision. Along the way, we’ve
            embraced challenges, celebrated milestones, and formed lasting
            partnerships that inspire us to continue evolving.
          </p>
          <p>
            Our story is one of growth, resilience, and unwavering dedication to
            our mission. As we look to the future, we’re excited to create new
            opportunities, empower more people, and continue making a
            difference. Together, we’re building a legacy of success.
          </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <Image src="/images/gallery-01.jpg" alt="About Us" width={1000} height={1000} className="lg:col-span-2 w-full h-full object-cover" />
            <Image src="/images/gallery-02.jpg" alt="About Us" width={1000} height={1000} className="lg:col-span-1 w-full h-full object-cover" />
            <Image src="/images/gallery-03.jpg" alt="About Us" width={1000} height={1000} className="lg:col-span-1 w-full h-full object-cover" />
            <Image src="/images/gallery-04.jpg" alt="About Us" width={1000} height={1000} className="lg:col-span-2 w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                    <div className="text-lg text-gray-900 gap-6">
                        <p>Our mission is to empower individuals and businesses by delivering exceptional solutions that drive growth, innovation, and success. We are committed to creating value through creativity, integrity, and a customer-centric approach.</p>
                        <p>By fostering collaboration and leveraging cutting-edge technologies, we aim to exceed expectations, build lasting relationships, and make a positive impact on the communities we serve. Our focus is on transforming challenges into opportunities, helping our clients achieve their goals and reach new heights.</p>
                    </div>
                </div>
                <Image src="/images/our-mission.jpg" alt="About Us" width={1000} height={1000} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <Image src="/images/our-vission.jpg" alt="About Us" width={1000} height={1000} className="w-full h-full object-cover" />
                <div>
                    <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                    <div className="text-lg text-gray-900 gap-6">
                        <p>Our vision is to be a global leader in innovation, creativity, and excellence. We aim to inspire and empower individuals and businesses to achieve their full potential by providing transformative solutions that make a lasting impact.</p>
                        <p>We envision a future where boundaries are redefined, opportunities are limitless, and success is shared. Through collaboration, innovation, and a steadfast commitment to our values, we strive to shape a better tomorrow for our clients, our communities, and the world.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <CTA />
    </>
  );
};

export default AboutUsPage;
