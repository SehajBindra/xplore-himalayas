import React from "react";

function Footer() {
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center  items-center sm:justify-start">
              <img className="h-8 w-8" src="/p.jpg" alt="" />
              <p>Puneet Singh Bindra</p>
            </div>

            <p className="mt-4 text-center text-sm text-white/60 cursor-pointer hover:text-white lg:mt-0 lg:text-right">
              PuneetSinghBindra &copy; 2023. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
