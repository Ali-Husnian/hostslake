import ClientReviewSlider from "../components/clientReviewSlider-section";
import CompaniesLogos from "../components/companiesLogo-section";
import DomainSection from "../components/domain-section";
import HeroSection from "../components/hero-section";
import WebHostingFeatures from "../components/hostingFeatures-section";
import HostingPlans from "../components/hostingPlans-section";
import WebHostingStatistics from "../components/hostingStatistics-section";
import WebsiteBulider from "../components/websiteBulider-section";
import WordpressSection from "../components/wordpress-section";

const page = () => {
  return (
    <div>
      <HeroSection />

      <DomainSection />

      <HostingPlans />

      <WebHostingFeatures />

      <WebHostingStatistics />

      <WordpressSection />

      <ClientReviewSlider />

      <CompaniesLogos />

      <WebsiteBulider />
      {/**/}
    </div>
  );
};

export default page;
