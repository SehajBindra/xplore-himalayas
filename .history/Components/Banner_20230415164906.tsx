import { PageInfo } from "../typing";

type Props = {
  pageInfo: PageInfo;
};

function Banner({ pageInfo }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[700px]">
      {/* left col */}
      <div className="col-span-1 md:col-span-2 my-20">
        <div className="top-1/2 text-center">
          <div className="my-[2rem] flex flex-col text-lg">
            <p className="text-center md:text-left text-white/75 md:ml-14 text-[20px]">
              Hello, I am{" "}
            </p>
            <span className="my-2 text-[#ed00eb] text-[2rem] sm:text-[3rem] md:my-4 md:text-[4rem]">
              {pageInfo?.name}
            </span>
            <span className="my-2 text-white/75 whitespace-nowrap text-[2rem] text-center md:text-right md:mr-12 sm:text-lg md:my-[1rem]">
              {pageInfo?.role}
            </span>
            <p className="my-4 flex-col text-justify -tracking-tight text-white/75 max-w-[20rem] mx-auto text-sm md:max-w-2xl">
              {pageInfo?.backgroundInformation}
            </p>
            <div className="flex flex-row items-center justify-center md:justify-start">
              <div className="mt-4 mx-4  cursor-pointer">
                <a className="inline-block rounded-md border border-transparent bg-[#03efcf] py-3 px-8 text-center font-medium text-black  cursor-pointer">
                  Select your Subject
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
          className="hidden lg:inline shadow-xl object-cover h-[600px] w-full"
          src="/final16.png"
        />
      </div>
    </div>
  );
}

export default Banner;
