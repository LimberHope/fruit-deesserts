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
      <div>
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-[#F2E6ED]/70">
          <img
            className="mx-auto block rounded-t-lg max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
            src={image}
            alt=""
          />
          <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg font-semibold text-black">Erin Lindford</p>
              <p className="text-gray-500">Product Engineer</p>
            </div>
            <button className="border-purple-200 text-purple-600">
              Message
            </button>
          </div>
        </div>
        <Image
          src={"/img/search-minus.svg"}
          alt={title}
          width={50}
          height={50}
          onClick={handleClose}
          className={`absolute top-0 right-0 hover:scale-110 transition-all duration-300 cursor-pointer`}
        />
      </div>
    </div>
  );
};

export default ProductItem;
