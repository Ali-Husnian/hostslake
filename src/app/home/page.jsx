import DomainSection from "../components/domain-section";
import HeroSection from "../components/hero-section";
import WebHostingFeatures from "../components/hostingFeatures-section";
import HostingPlans from "../components/hostingPlans-section";
import WebHostingStatistics from "../components/hostingStatistics-section";

const page = () => {
  return (
    <div>
      <HeroSection />

      <DomainSection />

      <HostingPlans />

      <WebHostingFeatures />

      <WebHostingStatistics />
      {/**/}
    </div>
  );
};

export default page;
