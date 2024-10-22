import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const WordpressSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-100px space-y-6">
          <h3 className="text-4xl font-bold text-gray-900">
            Get More From Your WordPress
          </h3>
          <p className="text-gray-600">
            Whether you’re ready to grow, sell or both, Bluehost has solutions{" "}
            to help you push your <br /> WordPress website to new levels of
            success.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 lg:px-0 mb-32">
          {/* Left Image Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <Image
              src="/wordpress-vector-img.png" // Replace with your actual image path
              alt="WordPress"
              width={500}
              height={500}
              className="mx-auto lg:mx-0"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-lg tracking-wide">wordpress</p>
            <h4 className="text-xl font-semibold text-gray-800">
              Website Needs for Success
            </h4>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-black" />
                <span>Quis ipsum pendisse ultrices gravida</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-black" />
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-black" />
                <span>Risus eni commodo</span>
              </li>
            </ul>

            {/* Button */}
            <button className="mt-6 px-6 py-3 text-black bg-white font-bold tracking-wide text-sm border border-black hover:text-white hover:bg-black transition-colors duration-300">
              Get Started Now
            </button>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6 lg:px-0">
          {/* Right Content Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-lg tracking-wide">Wondersuite</p>
            <h4 className="text-xl font-semibold text-gray-800">
              WordPress Made Easy
            </h4>
            <p className="text-gray-600 mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaec at
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            {/* Button */}
            <button className="mt-6 px-6 py-3 text-black bg-white font-bold tracking-wide text-sm border border-black hover:text-white hover:bg-black transition-colors duration-300">
              Get Started Now
            </button>
          </div>

          {/* Left Image Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <Image
              src="/wondersuite-vector-img.png" // Replace with your actual image path
              alt="WordPress"
              width={500}
              height={500}
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>

        <center className="mt-28">
          <h2 className="text-3xl font-bold text-center mb-6">
            Questions? Call or Text me Today! 800.123.4567
          </h2>
          <Link
            href="#"
            className="flex items-center justify-center mt-6  text-black bg-white py-3 px-6 h-50px w-250px text-sm text-center hover:text-white hover:bg-black border transition-colors duration-300"
          >
            <FaArrowRight className="mr-2" /> Get Started Now{" "}
          </Link>
        </center>
      </div>
    </section>
  );
};

export default WordpressSection;
