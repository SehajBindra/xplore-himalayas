"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.min.css";

import "swiper/css/pagination";
import { Navigation } from "swiper";

const Desitantions = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1578564969231-039947801495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name: "Manali",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1567253523599-6302cfe64fac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    name: "Shimla",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1484026127540-d8fe960b53d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Kasol",
  },
];
const Desitantions2 = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1578564969231-039947801495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name: "Manali",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1567253523599-6302cfe64fac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    name: "Shimla",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1484026127540-d8fe960b53d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Kasol",
  },

  {
    id: 4,
    img: "https://images.unsplash.com/photo-1669474643381-9c99377886ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    name: "Kasol",
  },
];
function Explore() {
  const handleReachEnd = (swiper: { navigation: { update: () => void } }) => {
    swiper.navigation.update(); // Update the navigation buttons visibility
  };

  return (
    <div className="lg:py-8 py-4  lg:block  lg:max-w-7xl  mx-auto">
      <div className="flex-col md:text-left text-center lg:justify-between lg:flex-row  items-center lg:flex gap-8">
        <h1 className="text-[20px] whitespace-nowrap lg:text-[60px] capitalize leading-[5rem]">
          the journey of <br className="hidden lg:inline" /> Himachal Pradesh
        </h1>

        <div className="max-w-lg   ">
          <p className=" max-w-[350px] text-justify text-[14px] -tracking-tight text-black/60 mx-auto md:max-w-lg">
            Unveil hidden treasures and immerse yourself in the culture,
            history, and natural wonders of our captivating destinations.
            Indulge in exotic delights and explore quaint villages.
          </p>

          <div className="md:inline-flex hidden justify-between md:px-0 px-8 lg:justify-start pt-4 items-center space-x-4">
            <p className="py-3 px-4 bg-black text-white text-[14px] rounded-lg">
              Reminder Me
            </p>

            <p className="py-3 px-4  border text-black text-[14px] rounded-lg">
              Learn More
            </p>
          </div>
        </div>
      </div>

      <div className=" hidden  lg:grid lg:grid-cols-5 gap-6 mt-16">
        <div className="col-span-3 relative">
          <img
            className="h-72 opacity-90 w-full object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1626621338418-713655538d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
            alt="himachal"
          />

          <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
            DharamShala
          </div>
        </div>
        <div className="col-span-2 relative">
          <img
            className="h-72 w-full opacity-90 object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1669474643381-9c99377886ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt="himachal"
          />

          <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
            Bir Billing
          </div>
        </div>
      </div>

      <div className="md:hidden mt-8 overflow-x-scroll flex px-4 scrollbar-none mx-auto gap-4">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          navigation={true}
          onReachEnd={handleReachEnd}
          modules={[Navigation]}
          className="h-40 max flex"
        >
          {Desitantions2.map((destination) => (
            <SwiperSlide key={destination.id}>
              <div className="col-span-1 relative flex  flex-shrink-0">
                <img
                  className="h-40 w-full object-cover opacity-90 rounded-xl"
                  src={destination.img}
                  alt={destination.name}
                />

                <div className="absolute whitespace-nowrap top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
                  {destination.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="lg:grid hidden grid-cols-3  gap-6 mt-6">
        {Desitantions.map((des) => (
          <div key={des.id} className="col-span-1 relative">
            <img
              className="h-72 w-full object-cover opacity-90 rounded-lg"
              src={des.img}
              alt={des.name}
            />

            <div className="absolute whitespace-nowrap z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
              {des.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
