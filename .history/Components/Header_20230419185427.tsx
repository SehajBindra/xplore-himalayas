"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = [
  {
    id: 2,
    name: "Home",
    src: `/home.png`,
    href: "/",
    className: "",
  },
  {
    id: 1,
    src: `/bar.png`,
    name: "Projects",
    href: "#projects",
    className: "",
  },

  // { id: 3, name: "Recommendation", href: "/recommendation" },
  {
    id: 4,
    src: `/experience.png`,
    name: "Experiences",
    href: "#experience",
    className: "",
  },

  { id: 5, src: "/blog.png", name: "Blogs", href: "#Blogs", className: "" },
];

function Header() {
  const pathname = usePathname();

  // console.log(pathname);

  NavLinks.forEach((link) => {
    link.className =
      link.href === pathname
        ? "text-center text-white sm:px-3 sm:py-2 text-[14px] sm:text-[16px] font-semibold"
        : "sm:px-3 text-center sm:py-2 text-[14px] sm:text-[16px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-white/60 duration-300 hover:text-white";
  });

  return (
    <header className="flex  max-w-7xl     items-center space-x-2 justify-center sm:justify-between font-medium px-10 py-5">
      <Link href="/">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full h-8 w-8 object-contain"
            src="/p.jpg"
            alt="header img "
          />

          <h1 className="text-xl  line-clamp-1">Puneet Bindra</h1>
        </div>
      </Link>

      <div>
        <div className="hidden   md:inline-flex space-x-2  ">
          {NavLinks.map((link) => (
            <a
              className="flex flex-row  items-center lg:space-x-4"
              key={link.id}
              href={`${link.href}`}
            >
              <img className="h-6 w-6" src={link.src} alt="" />
              <p className={link.className}>{link.name}</p>
            </a>
          ))}
        </div>
      </div>

      <div className=" md:hidden     w-full  fixed left-0 bottom-0">
        <div className="flex bg-black h-20  rounded-t-md  text-white px-4  justify-around cursor-pointer  flex-col items-center ">
          <ul className=" list-none text-sm flex  justify-between space-x-8 py-2 px-4 sm:px-6 sm:space-x-16 ">
            {NavLinks.map((link) => (
              <a
                key={link.id}
                href={`${link.href}`}
                className="flex flex-col  align-middle  text-center items-center"
              >
                <img className="h-8 w-8" src={link.src} />
                <p
                  className={`"mt-3 text-center ${link.className} text-[12px]"`}
                >
                  {" "}
                  {link.name}
                </p>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
