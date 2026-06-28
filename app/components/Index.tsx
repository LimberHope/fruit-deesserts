import Image from "next/image";
import { useModalContext } from "@/src/context/modal.provider";
import ProductItem from "./ProductItem";

const data = [
  {
    id: 1,
    title: "postre 1",
    description: "descripcion 1",
    image: "/image/fruits/fruit1.jpeg",
    price: 100,
  },
  {
    id: 2,
    title: "postre 2",
    description: "descripcion 2",
    image: "/image/fruits/fruit2.jpeg",
    price: 200,
  },
  {
    id: 3,
    title: "postre 3",
    description: "descripcion 3",
    image: "/image/fruits/fruit3.jpeg",
    price: 300,
  },
  {
    id: 4,
    title: "postre 4",
    description: "descripcion 4",
    image: "/image/fruits/fruit4.jpeg",
    price: 400,
  },
  {
    id: 5,
    title: "postre 5",
    description: "descripcion 5",
    image: "/image/fruits/fruit5.jpeg",
    price: 500,
  },
  {
    id: 6,
    title: "postre 6",
    description: "descripcion 6",
    image: "/image/fruits/fruit6.jpeg",
    price: 600,
  },
  {
    id: 7,
    title: "postre 7",
    description: "descripcion 7",
    image: "/image/fruits/fruit7.jpeg",
    price: 700,
  },
  {
    id: 8,
    title: "postre 8",
    description: "descripcion 8",
    image: "/image/fruits/fruit8.jpeg",
    price: 800,
  },
  {
    id: 9,
    title: "postre 9",
    description: "descripcion 9",
    image: "/image/fruits/fruit9.jpeg",
    price: 900,
  },
  {
    id: 10,
    title: "postre 10",
    description: "descripcion 10",
    image: "/image/fruits/fruit10.jpeg",
    price: 1000,
  },
  {
    id: 11,
    title: "postre 11",
    description: "descripcion 11",
    image: "/image/fruits/fruit7.jpeg",
    price: 700,
  },
  {
    id: 12,
    title: "postre 12",
    description: "descripcion 12",
    image: "/image/fruits/fruit8.jpeg",
    price: 800,
  },
  {
    id: 13,
    title: "postre 13",
    description: "descripcion 13",
    image: "/image/fruits/fruit9.jpeg",
    price: 900,
  },
  {
    id: 14,
    title: "postre 14",
    description: "descripcion 14",
    image: "/image/fruits/fruit10.jpeg",
    price: 1000,
  },
];

interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

const Index = () => {
  const { openModal, closeModal } = useModalContext();

  const handleClose = () => {
    closeModal("zoom");
  };

  const handleOpen = (item: Item) => {
    openModal(
      "zoom",
      <ProductItem
        image={item.image}
        title={item.title}
        handleClose={handleClose}
      />,
    );
  };

  return (
    <div className="flex justify-center bg-[url('/image/fondo.jpg')] bg-fixed p-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
              className="p-4 bg-[#F2E6ED]/70 text-center border-2 border-gray-200 rounded-lg h-[490px]"
              key={index}
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={0}
                  className={`rounded-t-lg h-[400px]`}
                />
                <Image
                  src={"/img/search-plus.svg"}
                  alt={item.title}
                  width={50}
                  height={50}
                  onClick={() => handleOpen(item)}
                  className={`absolute top-0 right-0 p-2 hover:scale-150 transition-all duration-300 cursor-pointer`}
                />
              </div>
              <div className="bg-[#000000]/80 h-[50px] flex items-center justify-center">
                <h2 className="text-[#A89191]">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Index;
