"use client";

import { FaServer, FaGlobe, FaBolt, FaHeadset } from "react-icons/fa";

const stats = [
  {
    icon: <FaServer className="text-4xl mb-4" />,
    title: "#1 Web Hosting Provider",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaGlobe className="text-4xl mb-4" />,
    title: "50+ Worldwide Datacenters",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaBolt className="text-4xl mb-4" />,
    title: "Supercharged Websites",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaHeadset className="text-4xl mb-4" />,
    title: "24/7 Real-Time Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const WebHostingStatistics = () => {
  return (
    <section className="text-center bg-lightYallowColor py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10">Web Hosting Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-whiteColor shadow-lg px-6 py-12 space-y-4 border-4 border-transparent hover:border-blackColor hover:bg-card transition-colors duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-center">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{stat.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebHostingStatistics;
