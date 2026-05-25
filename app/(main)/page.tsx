import ExploreBusiness from "./_components/explore-business";
import HeroV2 from "./_components/hero-v2";
import CTA from "./_components/home/cta";
import Feature from "./_components/home/feature";

const HomePage = () => {
  return (
    <div>
      <HeroV2 />
      <ExploreBusiness />
      <Feature />
      <CTA />
    </div>
  );
};

export default HomePage;
