import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

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
      <div>
        <div className="flex flex-row bg-red-500 h-[50px] items-center justify-between gap-8 p-4">
          <Link className={`${poppins.className}`} href="/">Productos enteros</Link>
          <Link className={poppins.className} href="/">Nuestras masitas</Link>
          <Link className={poppins.className} href="/">Coffee y salon de te</Link>
          <Image className="hover:scale-110 transition-all duration-300"
            src={"/img/sandi.svg"}
            alt="sandi"
            width={30}
            height={30}
          />
        </div>
        
      </div>

    </nav>
  );
};

export default NavBar;
