import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex flex-col">
      <div className="flex items-center justify-center p-4 bg-[#F2D5D5] h-[125px]">
        <Link href="/" className="text-xl flex items-center">
          <Image
            className="hover:scale-110 transition-all duration-300"
            src={"/img/fresa.svg"}
            alt="fresa"
            width={75}
            height={75}
          />
          <p className="hover:border-b-2 hover:border-[#4AE7F0] text-[50px]">
            fruit dessert
          </p>
          <Image
            className="hover:scale-110 transition-all duration-300"
            src={"/img/arandano.svg"}
            alt="arandano"
            width={75}
            height={75}
          />
        </Link>
      </div>
      <div className="flex items-center justify-center p-4 bg-red-500 h-[50px]">
        <Link href="/">Inicio</Link>
        <Link href="/">Nosotros</Link>
        <Link href="/">Contacto</Link>
      </div>
    </nav>
  );
};

export default NavBar;
