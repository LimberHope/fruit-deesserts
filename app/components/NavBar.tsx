"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/products", label: "Productos enteros" },
  { href: "/", label: "Nuestras masitas" },
  { href: "/coffeLounge", label: "Coffee y salon de te" },
] as const;

const isActiveTab = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col">
      <div className="flex items-center justify-center p-4 bg-[#F2D5D5] h-[125px]">
        <Link href="/" className="text-xl flex items-center">
          <img
            className="hover:scale-110 transition-all duration-300 w-[75px] h-[75px]"
            src={"/img/fresa.svg"}
            alt="fresa"
          />
          <p className="font-pacifico hover:border-b-2 hover:border-[#4AE7F0] text-[50px]">
            fruit dessert
          </p>
          <img
            className="hover:scale-110 transition-all duration-300 w-[75px] h-[75px]"
            src={"/img/arandano.svg"}
            alt="arandano"
          />
        </Link>
      </div>
      <div>
        <div className="flex flex-row bg-red-500 h-[50px] items-center justify-between gap-8 p-4">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={
                isActiveTab(pathname, tab.href)
                  ? "border-b-2 border-[#4AE7F0] font-medium"
                  : "hover:border-b-2 hover:border-[#4AE7F0]"
              }
            >
              {tab.label}
            </Link>
          ))}
          <img
            className="hover:scale-110 transition-all duration-300 w-[30px] h-[30px]"
            src={"/img/sandi.svg"}
            alt="sandi"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
