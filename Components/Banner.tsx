import React from "react";
import Header from "./Header";

function Banner() {
  return (
    <div>
      {/* <Header /> */}
      <div className=" h-[530px] md:h-[700px]">
        <div className="absolute hidden md:inline inset-0 ">
          <img
            className="object-cover absolute opacity-95  w-full h-full"
            src="/mainImage.jpg"
            alt="main_image"
          />
        </div>
        <div className="absolute inset-0  md:hidden">
          <img
            className="object-cover absolute    w-full h-[600px]"
            src="/mainImage.jpg"
            alt="main_image"
          />
        </div>

        <div className="relative md:py-20 pt-[64px]   text-center mx-auto  max-w-7xl">
          <div className="max-w-xl   xl:max-w-5xl   mx-auto">
            <h1 className="text-2xl text-white font-extrabold opacity-90   sm:text-4xl xl:text-7xl ">
              Discover the Enchanting <br /> Splendor of the Himalayas!
            </h1>
            <p className="mt-8 text-[13px] z-10 md:text-[16px] text-justify -tracking-tighter mx-auto max-w-xs  font-medium   leading-5  text-white/90 lg:max-w-4xl ">
              Embark on a journey that takes you through breathtaking valleys,
              where you'll witness panoramic views that seem straight out of a
              postcard. Traverse winding trails that lead to hidden gems tucked
              away amidst the mountains.
            </p>

            <div className="flex mx-auto items-center justify-center mt-8 space-x-5   ">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center
                                                                  px-3
                            py-3
                            text-base
                            
                            leading-7
                            
                            transition-all
                            duration-200
                           
                            border border-transparent
                            rounded-md
                            sm:px-6
                            text-white
                            bg-black
                        "
              >
                Connect for Your Dream Journey!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
