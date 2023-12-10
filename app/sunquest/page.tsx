import HomepageBusinessSolar from "./_components/homepage-business-solar";
import HomeEnergySection from "./_components/homepage-description";
import HomepageHero from "./_components/homepage-hero";
import SigenergDescriotion from "./_components/homepage-sigenergy-description";

const page = () => {
    return (
      <main className="">
        <HomepageHero />
        <HomeEnergySection />
        <HomepageBusinessSolar />
        <SigenergDescriotion />
      </main>
    );
};
export default page;
