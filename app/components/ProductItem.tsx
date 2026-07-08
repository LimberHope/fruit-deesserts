const ProductItem = ({
  imgUrl,
  title,
  description,
  handleClose,
}: {
  imgUrl: string;
  title: string;
  description: string;
  handleClose: () => void;
}) => (
  <div className="fixed z-50 w-full h-full bg-[#080707]/50 flex items-center justify-center">
    <div className="relative">
      <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-[#F2E6ED]/70">
        <img
          className="mx-auto block rounded-t-lg max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
          src={`${process.env.NEXT_PUBLIC_API_URL}/${imgUrl}`}
          alt={title}
        />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">{title}</p>
            <p className="text-gray-500">{description}</p>
          </div>
          <button className="border-purple-200 text-purple-600">Message</button>
        </div>
      </div>
      <img
        src={"/img/search-minus.svg"}
        alt={title}
        onClick={handleClose}
        className={`absolute top-0 right-0 hover:scale-110 transition-all duration-300 cursor-pointer w-[50px]`}
      />
    </div>
  </div>
);

export default ProductItem;
