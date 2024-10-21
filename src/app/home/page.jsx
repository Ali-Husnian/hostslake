import DomainSection from "../components/domain-section";
import HeroSection from "../components/hero-section";
import HostingPlans from "../components/hostingPlans-section";

const page = () => {
  return (
    <div>
      <HeroSection />

      <DomainSection />

      <HostingPlans />
    </div>
  );
};

export default page;
