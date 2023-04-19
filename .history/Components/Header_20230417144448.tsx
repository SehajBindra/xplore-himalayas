import Link from "next/link";

const NavLinks = [
  { id: 1, src: "/home.png", name: "Projects", href: "#projects" },

  // { id: 3, name: "Recommendation", href: "/recommendation" },
  { id: 4, src: "/profile.png", name: "Experiences", href: "#experience" },

  { id: 5, src: "/category.png", name: "Blog", href: "#Bloga" },
];

function Header() {
  return (
    <header className="flex   items-center space-x-2 justify-center sm:justify-between font-medium px-10 py-5">
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

      <div className="flex flex-row ">
        <div className="hidden md:inline-flex  ">
          {NavLinks.map((link) => (
            <div key={link.id} className="">
              <p>{link.name}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
