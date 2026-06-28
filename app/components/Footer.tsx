import Image from "next/image";
const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-[#F2D5D5] text-gray-800 py-12">
      <div className="text-center flex items-center justify-center">
        <div className="basis-1/3">
          <h3 className="font-bold text-2xl md:text-2xl mb-4 uppercase tracking-wile">fruit desserts</h3>
          <p className="text-sm">Los mejores postres de frutas en la ciudad de LA PAZ,comprame case bien riquito te voy a dar</p>
        </div>
        <div className="basis-1/3">
          <h3 className="font-bold text-2xl md:text-2xl mb-4 uppercase tracking-wide">contactanos:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="Facebook:@fruitdesserts" className="hover:underline flex justify-center">Facebook:@fruitdesserts
                <Image className="hover:scale-110 transition-all duration-300"
                  src={"/img/facebook.svg"}
                  alt="facebook"
                  width={30}
                  height={30}
                />
              </a>
            </li>
            <li>
              <a href="whattssap:64065835" className="hover:underline flex justify-center">whatssap:64065835-75865501
                <Image className="hover:scale-110 transition-all duration-300"
                  src={"/img/whatssap.svg"}
                  alt="whatssap"
                  width={30}
                  height={30}
                />
              </a>
            </li>

            <li>
              <a href="instragram:@Fruit_desserts01" className="hover:underline flex justify-center">instagram:@Fruit_desserts01
                <Image className="hover:scale-110 transition-all duration-300"
                  src={"/img/instagram.svg"}
                  alt="instagram"
                  width={30}
                  height={30}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-4 text-center text-xs">
        <p>© {new Date().getFullYear()} HOPE WORLD. todos los derechos reservados.</p>
      </div>
    </footer >
  );
};
export default Footer;
