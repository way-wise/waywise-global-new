import ExploreBusiness from "./_components/explore-business";
import Hero from "./_components/hero";
import CTA from "./_components/home/cta";
import Feature from "./_components/home/feature";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ExploreBusiness />
      <Feature />
      <CTA />
    </div>
  );
};

export default HomePage;
