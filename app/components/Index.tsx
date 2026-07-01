"use client";
import { useModalContext } from "@/src/context/modal.provider";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import AddProduct from "./AddProduct";

interface Item {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  price: number;
  category: string;
}

const Index = () => {
  const { openModal, closeModal } = useModalContext();
  const [products, setProducts] = useState<Item[]>([]);

  const handleClose = () => {
    closeModal("zoom");
  };

  const handleOpen = (item: Item) => {
    openModal(
      "zoom",
      <ProductItem
        imgUrl={item.imgUrl}
        description={item.description}
        title={item.title}
        handleClose={handleClose}
      />,
    );
  };

  const getProducts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    const json = await response.json();
    setProducts(json);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addProduct = () => {
    openModal(
      "addProduct",
      <AddProduct
        closeModal={() => closeModal("addProduct")}
        refetch={getProducts}
      />,
    );
  };

  return (
    <div className="bg-[url('/image/fondo.jpg')] bg-fixed p-8 justify-center items-center flex flex-col gap-4">
      <button
        className="flex justify-center cursor-pointer"
        onClick={addProduct}
      >
        <img
          className="hover:scale-110 transition-all duration-300 w-[30px] h-[30px]"
          src={"/img/add-plus.svg"}
          alt="sandi"
        />
        Agregar producto
      </button>
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.filter(item => item.category === "masitas").map((item, index) => (
            <div
              className="p-4 bg-[#F2E6ED]/70 text-center border-2 border-gray-200 rounded-lg h-[490px]"
              key={index}
            >
              <div className="relative">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${item.imgUrl}`}
                  alt={item.title}
                  className={`rounded-t-lg h-[400px] w-[300px]`}
                />
                <img
                  src={"/img/search-plus.svg"}
                  alt={item.title}
                  onClick={() => handleOpen(item as Item)}
                  className={`absolute top-0 right-0 p-2 hover:scale-150 transition-all duration-300 cursor-pointer w-[50px] h-[50px]`}
                />
              </div>
              <div className="bg-[#000000]/80 h-[50px] flex items-center justify-center">
                <h2 className="text-[#A89191]">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
