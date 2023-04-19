"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = [
  {
    id: 1,
    src: "/home.png",
    name: "Projects",
    href: "#projects",
    className: "",
  },

  // { id: 3, name: "Recommendation", href: "/recommendation" },
  {
    id: 4,
    src: "/profile.png",
    name: "Experiences",
    href: "#experience",
    className: "",
  },

  { id: 5, src: "/category.png", name: "Blog", href: "#Blogs", className: "" },
];

function Header() {
  const pathname = usePathname();
  console.log(pathname);

  NavLinks.forEach((link) => {
    link.className =
      link.href === pathname
        ? "text-center text-white sm:px-3 sm:py-2 text-[14px] sm:text-[16px] font-semibold"
        : "sm:px-3 text-center sm:py-2 text-[14px] sm:text-[16px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-white/60 duration-300 hover:text-white";
  });

  return (
    <header className="flex    items-center space-x-2 justify-center sm:justify-between font-medium px-10 py-5">
      <Link href="/">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full h-8 w-8 object-contain"
            src="/p.jpg"
            alt="header img "
          />

          <h1>Puneet Singh Bindra</h1>
        </div>
      </Link>

      <div>
        <div className="hidden md:inline-flex space-x-4  ">
          {NavLinks.map((link) => (
            <a
              className="flex flex-row  items-center lg:space-x-2"
              key={link.id}
              href={`${link.href}`}
            >
              <img className="h-6 w-6" src={link.src} alt="" />
              <p className={link.className}>{link.name}</p>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
