import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div></div>
      <Link href="/" className="font-bold text-xl">
        Fruit Desserts
      </Link>

      <Link href="/">Home</Link>
      <Link href="/recipes">Recipes</Link>
      <Link href="/categories">Categories</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default NavBar;
