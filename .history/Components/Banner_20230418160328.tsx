import { ArrowLongDownIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "../typing";

type Props = {
  pageInfo: PageInfo;
};

function Banner({ pageInfo }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-[600px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[700px]">
      {/* left col */}
      <div className="col-span-1 md:col-span-2 my-24">
        <div className="top-1/2 text-center">
          <div className="my-[2rem]  max-w-5xl  flex flex-col text-lg">
            <p className="text-center  xl:text-left text-white/75 xl:ml-14 text-[20px]">
              Hello, I am{" "}
            </p>
            <span className="my-2 text-[#ed00eb] md:text-center text-[2rem] sm:text-[3rem] xl:my-4 md:text-3xl xl:text-[4rem]">
              {pageInfo?.name}
            </span>
            <span className="my-2 text-white/75 whitespace-nowrap text-[2rem] text-center xl:text-right xl:mr-12 sm:text-lg xl:my-[1rem]">
              {pageInfo?.role}
            </span>
            <p className="my-4 flex-col text-justify -tracking-tight text-white/75 max-w-[20rem] mx-auto  text-sm md:max-w-xl lg:max-w-2xl">
              {pageInfo?.backgroundInformation}
            </p>
            <div className="flex flex-row items-center justify-center md:justify-start">
              <div className="mt-4  px-10  cursor-pointer">
                <a
                  href="#projects"
                  className=" flex flex-row items-center space-x-4 rounded-md border border-transparent bg-[#ed00eb] py-3 px-8 text-center  text-[16px] text-black  cursor-pointer"
                >
                  Explore now
                  <ArrowLongDownIcon className="h-4 w-4  animate-bounce" />
                </a>
              </div>
            </div>
            {/* <img className="object-cover w-full md:hidden" src="/wave.svg" /> */}
          </div>
        </div>
      </div>

      {/* right col */}
      <div className="col-span-2 sm:flex flex-col items-center space-x-2 hidden md:inline">
        <img
          className="hidden lg:inline shadow-xl  object-cover h-[600px] w-full"
          src="/final16.png"
        />
      </div>
    </div>
  );
}

export default Banner;
