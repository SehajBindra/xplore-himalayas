import Link from "next/link";

function Header() {
  return (
    <header className="flex   items-center space-x-2 justify-center sm:justify-between font-medium px-10 py-5">
      <Link href="/">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full h-8 w-8 object-contain"
            src="/p.jpeg"
            alt="header img "
          />

          <h1>Puneet Singh Bindra</h1>
        </div>
      </Link>

      <div>
        <div className="hidden  sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              aria-current="page"
            >
              Projects
            </a>

            <a
              href="#experience"
              aria-current="page"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Experience
            </a>

            <a
              href="#Blogs"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Blogs
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
