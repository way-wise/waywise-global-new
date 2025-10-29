import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="relative container  p-12 min-h-80 md:min-h-80 rounded-xl overflow-hidden">
        <div>
          <Image
            src="/images/cta.jpg"
            alt="CTA"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 h-full w-full object-cover rounded-xl"
          />
        </div>
        <div className="absolute top-0 left-0 h-full w-full">
          <div className="container h-full">
            <div className="flex h-full flex-col items-center justify-center gap-8 p-4">
              <div className="flex max-w-3xl items-center text-white">
                <div className="prose dark:prose-invert mx-auto mb-0 max-w-none">
                  <h2 className="text-center text-2xl mb-6 font-bold">
                    Expand Your Horizons – Partner With Us Today!
                  </h2>
                  <p className="text-center max-w-3xl text-lg">
                    Unlock unparalleled opportunities and take your business to
                    the global stage with our expert solutions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <Link
                  className="inline-flex h-14 items-center justify-center rounded border border-border bg-background px-12 py-4 text-lg font-semibold whitespace-nowrap ring-offset-background transition-colors duration-300 ease-in-out hover:bg-card hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href="/contact-us"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
