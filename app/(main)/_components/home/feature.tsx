import Image from "next/image";

const Feature = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container space-y-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-bold">
              Trusted experts in business matters
            </h2>
            <div className="gap-6 text-lg text-gray-900">
              <p>
                At Way-Wise Global, we pride ourselves on being trusted experts
                in business matters. Our team of seasoned professionals brings a
                wealth of knowledge and experience to the table, ensuring that
                we provide top-notch solutions tailored to your unique needs.
                Whether you&apos;re looking to streamline operations, enhance
                productivity, or drive growth, we have the expertise to guide
                you every step of the way. Our commitment to excellence and our
                deep understanding of the business landscape make us the ideal
                partner for your success. Trust us to deliver results that
                exceed your expectations and help your business thrive in
                today&apos;s competitive market.
              </p>
            </div>
          </div>
          <Image
            src="/images/home-feature-1.jpg"
            alt="About Us"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="grid grid-cols-1 items-center gap-6 md:gap-12 lg:grid-cols-2">
          <Image
            src="/images/home-feature-2.jpg"
            alt="About Us"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
          <div>
            <p>Unlock Your Potential</p>
            <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-bold">
              Strategic Business Insights
            </h2>
            <div className="gap-6 text-lg text-gray-900">
              <p>
                We provide expert business consulting services designed to help
                you navigate complex challenges and seize new opportunities. Our
                team of seasoned consultants offers strategic insights and
                actionable plans tailored to your unique needs. Whether you&apos;re
                looking to optimize operations, drive growth, or innovate your
                business model, we have the expertise to guide you every step of
                the way. Trust us to deliver solutions that not only meet your
                goals but also exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
