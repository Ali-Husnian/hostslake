"use client";
// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaStar } from "react-icons/fa";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const reviews = [
  {
    name: "John Marten",
    role: "Developer",
    review:
      "Good service and easily available assistance. I use it regularly for my clients and recommend everyone to go for it.",
    stars: 5,
    image: "/client-01.png", // Replace with actual image
  },
  {
    name: "Rizwan Joseph",
    role: "UI/UX Designer",
    review:
      "Good service and easily available assistance. I use it regularly for my clients and recommend everyone to go for it.",
    stars: 5,
    image: "/client-02.png", // Replace with actual image
  },
  {
    name: "Alexandra John",
    role: "Support",
    review:
      "Hostiko has great website templates and you can connect your site to your social media account and WHMCS as well.",
    stars: 5,
    image: "/client-03.png", // Replace with actual image
  },
  {
    name: "John Marten",
    role: "Developer",
    review:
      "Good service and easily available assistance. I use it regularly for my clients and recommend everyone to go for it.",
    stars: 5,
    image: "/client-01.png", // Replace with actual image
  },
  {
    name: "Rizwan Joseph",
    role: "UI/UX Designer",
    review:
      "Good service and easily available assistance. I use it regularly for my clients and recommend everyone to go for it.",
    stars: 5,
    image: "/client-02.png", // Replace with actual image
  },
  {
    name: "Alexandra John",
    role: "Support",
    review:
      "Hostiko has great website templates and you can connect your site to your social media account and WHMCS as well.",
    stars: 5,
    image: "/client-03.png", // Replace with actual image
  },
];

const ClientReviewSlider = () => {
  return (
    <section className="bg-[#EEF0C3] py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Happy Client’s Reviews</h2>
        <p className="text-gray-500 mb-8">
          We are rated Excellent 4.9 out of 5 on...
        </p>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView="3"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1, // For small screens (mobile)
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1, // For medium screens (tablet)
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 2, // For larger tablets or smaller desktops
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3, // For large screens (desktops)
                spaceBetween: 20,
              },
            }}
            pagination={{ clickable: true }}
            className="pb-8"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="bg-white border border-black p-8 w-full max-w-md">
                  <div className="flex items-center mb-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="text-left">
                      <h3 className="text-xl font-semibold">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-left italic text-gray-600">
                    "{review.review}"
                  </p>
                  <div className="flex justify-start mb-4">
                    {[...Array(review.stars)].map((_, starIndex) => (
                      <FaStar key={starIndex} className="text-yellow-500" />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewSlider;
