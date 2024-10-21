import { FaServer, FaGlobe, FaBolt, FaHeadset } from "react-icons/fa";

const WebHostingStatistics = () => {
  return (
    <section className="text-center bg-[#EEF0C3] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10">Web Hosting Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-6 space-y-6">
            <FaServer className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              #1 Web Hosting Provider
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <FaGlobe className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              50+ Worldwide Datacenters
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <FaBolt className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Supercharged Websites
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <FaHeadset className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              24/7 Real-Time Support
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHostingStatistics;
