import Image from "next/image";
const ZoomElement = ({
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
        <Image
          src={image}
          alt={title}
          width={500}
          height={0}
          className={`rounded-t-lg scale-110 transition-all duration-300`}
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

export default ZoomElement;
