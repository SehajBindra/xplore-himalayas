"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Search from "./Search";

const NavLinks = [
  {
    id: 2,
    name: "Home",
    src: `/home.svg`,
    href: "/",
    className: "",
  },
  {
    id: 1,
    src: `/trips.svg`,
    name: " Trips",
    href: "#projects",
    className: "",
  },

  // { id: 3, name: "Recommendation", href: "/recommendation" },

  { id: 5, src: "/blogs.svg", name: "Blogs", href: "#Blogs", className: "" },
  {
    id: 6,
    src: "/contact.svg",
    name: " Contact",
    href: "#Blogs",
    className: "",
  },
  {
    id: 4,
    src: `/about.svg`,
    name: "Profile",
    href: "#experience",
    className: "",
  },
];

function Header() {
  const pathname = usePathname();

  const { data: session } = useSession();
  // console.log(session);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // console.log(pathname);

  NavLinks.forEach((link) => {
    link.className =
      link.href === pathname
        ? "text-center text-black md:text-white sm:px-3 sm:py-2 text-[14px] sm:text-[16px] font-semibold"
        : "sm:px-3 text-center sm:py-2 text-[14px] sm:text-[16px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-black/60 md:text-white/60 duration-300  md:hover:text-white hover:text-black";
  });

  return (
    <header className="relative  z-10 mx-auto md:mx-0 md:px-8 xl:px-8 lg:gap-8 xl:gap-32  max-w-xs py-6  md:max-w-5xl lg:max-w-5xl xl:max-w-full h-20  items-center flex">
      <div className="flex  items-center mx-auto  space-x-4">
        <img
          className="h-14 w-14  rounded-full object-cover"
          src="/xh.jpg"
          alt=""
        />
        <h2 className="text-white  whitespace-nowrap  text-2xl   lg:text-4xl font-extrabold">
          Xplore Himalayas
        </h2>

        <Search />
      </div>

      <div className=" items-center   capitalize hidden md:inline-flex  space-x-2 cursor-pointer text-[16px] text-white ">
        {NavLinks.map((link) => (
          <div className="flex space-x-2 items-center" key={link.id}>
            <img
              className="h-8 w-8 object-cover"
              src={link.src}
              alt={link.name}
            />
            <p className={link.className}>{link.name}</p>
          </div>
        ))}
      </div>
      <div className="flex-grow" />
      <div className="ml-auto">
        <a
          href="#"
          className=" hidden md:inline-flex items-center justify-center
                             px-3
                            py-2
                            text-base
                            
                            leading-7
                             whitespace-nowrap
                            transition-all duration-200
                           
                            border border-transparent
                            rounded-md
                            sm:px-6
                           text-white
                            bg-black
                        "
        >
          Explore now
        </a>
      </div>

      <div className=" md:hidden     w-full  fixed left-0 bottom-0">
        <div className="flex bg-white h-20  rounded-t-md  text-black px-4  justify-around cursor-pointer  flex-col items-center ">
          <ul className=" list-none text-sm flex  justify-between space-x-8 py-2 px-4 sm:px-6 sm:space-x-16 ">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href={`${link.href}`}
                className="flex flex-col  align-middle  text-center items-center"
              >
                <img className="h-8 w-8" src={link.src} alt={link.name} />

                {link.name === "Profile" ? (
                  <p
                    onClick={toggleDropdown}
                    className={`"mt-3 text-center ${link.className} text-[12px]"`}
                  >
                    {" "}
                    {link.name}
                  </p>
                ) : (
                  <p
                    className={`"mt-3 text-center ${link.className} text-[12px]"`}
                  >
                    {" "}
                    {link.name}
                  </p>
                )}
                {isOpen && (
                  <div className="absolute  bottom-0 mb-24 w-40 right-2  bg-white rounded-lg shadow-lg">
                    <ul className="py-3 ">
                      {!session ? (
                        <div className="flex items-center justify-center space-x-2 ">
                          <img
                            className="h-8 w-8 object-cover"
                            src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                            alt="User Profile"
                          />

                          <Link href="/login">
                            <p>Sign In</p>
                          </Link>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center  justify-center ">
                            <img
                              className="h-7 w-7 ml-4 object-cover rounded-full"
                              src={session?.user?.image!}
                              alt={session?.user?.name!}
                            />

                            <p className="line-clamp-1 mr-2">
                              {" "}
                              {session?.user?.name}
                            </p>
                          </div>

                          <p
                            onClick={() => signOut()}
                            className="flex items-center w-full justify-center gap-2 mt-2 space-x-2 pt-2 border-t border-[]"
                          >
                            Sign out
                            <ArrowRightIcon className="w-5 h-5 object-cover" />
                          </p>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
