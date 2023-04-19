import Link from "next/link";

const NavLinks = [
  { id: 1, src: "/home.png", name: "Projects", href: "#projects" },

  // { id: 3, name: "Recommendation", href: "/recommendation" },
  { id: 4, src: "/profile.png", name: "Experiences", href: "#experience" },

  { id: 5, src: "/category.png", name: "Blog", href: "#Bloga" },
];

function Header() {
  return (
    <header>
      <nav className="bg-black">
        <div className="mx-auto max-w-7xl  ">
          <div className="flex flex-row justify-center h-20 items-center ">
            <div className="space-x-2 items-center md:px-4  flex flex-row justify-center ">
              <img
                className="h-8 w-8 rounded-lg  object-cover "
                src="/logo.jpg"
                alt="logo"
              />

              <Link
                href="/"
                className="text-white whitespace-nowrap  font-extrabold cursor-pointer capitalize text-2xl"
              >
                The Natural Investor
              </Link>
            </div>
            <div className="hidden capitalize md:inline-flex flex-1 items-center justify-end mr-32 md:mr-8 md:px-8 sm:items-stretch ">
              <div className="hidden sm:block">
                <div className="flex flex-row items-center space-x-2">
                  {NavLinks.map((link) => (
                    <Link
                      className="flex flex-row  items-center lg:space-x-2"
                      key={link.id}
                      href={`${link.href}`}
                    >
                      <img className="h-6 w-6" src={link.src} alt="" />
                      <p>{link.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" md:hidden     w-full  fixed left-0 bottom-0">
            <div className="flex bg-black h-20  rounded-t-md  text-white px-4  justify-around cursor-pointer  flex-col items-center ">
              <ul className=" list-none text-sm flex  justify-between space-x-8 py-2 px-4 sm:px-6 sm:space-x-16 ">
                {NavLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={`${link.href}`}
                    className="flex flex-col  align-middle  text-center items-center"
                  >
                    <img className="h-8 w-8" src={link.src} alt={link.name} />
                    <p className={`"mt-3 text-center $ text-[12px]"`}>
                      {" "}
                      {link.name}
                    </p>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
