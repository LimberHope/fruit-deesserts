import Image from "next/image";
const ProductItem = ({
  image,
  title,
  handleClose,
}: {
  image: string;
  title: string;
  handleClose: () => void;
}) => {
  return (
    <div className="fixed z-50 w-full h-full bg-[#080707]/50 flex items-center justify-center">
      <div className="absolute">
        <img
          src={image}
          alt={title}
          className={`rounded-t-lg scale-110 transition-all duration-300 w-full sm:w-[400px] md:w-[400px] lg:w-[500px] t-4`}
        />
        <Image
          src={"/img/search-minus.svg"}
          alt={title}
          width={50}
          height={50}
          onClick={handleClose}
          className={`absolute top-0 right-0 p-1 hover:scale-110 transition-all duration-300 cursor-pointer`}
        />
      </div>
    </div>
  );
};

export default ProductItem;
