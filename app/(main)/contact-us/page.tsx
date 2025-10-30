import Image from "next/image";

const AboutUsPage = () => {
  return (
    <>
      <section className="relative h-[300px] pt-52 md:h-[400px] lg:h-[750px]">
        <div>
          <Image
            src="/images/contact-hero.webp"
            alt="Services"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/30">
            <h1 className="text-3xl md:text-6xl font-bold text-white">Contact Us</h1>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-24">
        <div className="container space-y-24">
          <h2 className="text-2xl sm:text-3xl md:text-6xl text-center mb-6 lg:mb-12">Get in Touch With Us</h2>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6 text-sm md:text-lg text-gray-900">
              <p>
                We’re here to assist you! Whether you have a question, need
                support, or want to explore opportunities to collaborate, our
                team is ready to help. Fill out the form below or reach out via
                the provided contact details, and we’ll get back to you as soon
                as possible. Let’s connect and make great things happen!
              </p>
              <p>
                We’re here to assist you! Whether you have a question, need
                support, or want to explore opportunities to collaborate, our
                team is ready to help. Fill out the form below or reach out via
                the provided contact details, and we’ll get back to you as soon
                as possible. Let’s connect and make great things happen!
              </p>
            </div>
            <div>
            <form className="flex flex-col gap-6 bg-white shadow-lg rounded-xl p-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-primary"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-primary"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-primary resize-none"
                  placeholder="Type your message here..."
                />
              </div>
              <button
                type="submit"
                className="mt-4 rounded-md bg-[#f82a2e] text-white font-semibold py-2 px-6 hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
