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
      {/* <div className="absolute w-full"> */}
      <div>
        {/* <article className="flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className={`float-start rounded-t-lg w-full sm:w-[400px] md:w-[400px] lg:w-[500px]`}
          />
          <div className="bg-[#F2E6ED]/70 rounded-t-lg p-4 sm:w-[400px] md:w-[400px] lg:w-[500px]">
            <h2>{title}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
        </article> */}
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-[#F2E6ED]/70">
          <img
            className="mx-auto block rounded-t-lg sm:mx-0 sm:shrink-0"
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
