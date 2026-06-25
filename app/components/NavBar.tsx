import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center p-4">
        <Link className="px-5" href="/">
          Home
        </Link>
        <Link className="px-5" href="/about">
          About
        </Link>
        <Link className="px-5" href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
