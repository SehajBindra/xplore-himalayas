import React from "react";

function Footer() {
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-white">
        <div className="mx-auto max-w-screen-xl pb-24 md:py-8 px-4  sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center  items-center sm:justify-start">
              <img className="h-8 w-8" src="/xh.jpg" alt="" />
              <p>Xplore Himalayas</p>
            </div>

            <p className="mt-4 text-center text-sm text-black/60 cursor-pointer hover:text-black lg:mt-0 lg:text-right">
              Xplore Himalayas &copy; 2023. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
