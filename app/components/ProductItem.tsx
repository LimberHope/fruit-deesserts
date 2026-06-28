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
        <div className="flex gap-0">
          <div className="flex-1">
            <img
              src={image}
              alt={title}
              className={`rounded-t-lg w-full sm:w-[400px] md:w-[400px] lg:w-[500px] t-4`}
            />
          </div>
          <div className="flex-1 bg-[#F2E6ED]/70 rounded-t-lg w-full p-4">
            <h2>{title}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
        </div>
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
