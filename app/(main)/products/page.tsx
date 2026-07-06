"use client";
import AddProduct from "@/app/components/AddProduct";
import { Image, Product } from "@/app/components/Index";
import { useModalContext } from "@/src/context/modal.provider";
import { useEffect, useState } from "react";

const getCoverImage = (images: Image[]) => {
  return images.find(img => img.cover)?.location;
}

const ProductsPage = () => {
  const { openModal, closeModal } = useModalContext();
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products`,
    );
    const json = await response.json();
    setProducts(json);
  };

  useEffect(() => {
    getProducts();
  }, []);



  const addProduct = () => {
    openModal(
      "addProduct",
      <AddProduct closeModal={() => closeModal("addProduct")} refetch={getProducts}/>,
    );
  };

  return (
    <div className="flex justify-center bg-[url('/image/fondo.jpg')] bg-fixed p-8">
      <div className="grid grid-cols-1 gap-4">
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
        {products.filter(item => item.category === "enteros").map((item, index) => (
          <div
            className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 bg-[#F2E6ED]/70 text-center border-2 border-gray-200 rounded-lg  max-w-[800px]"
            key={index}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/${getCoverImage(item.media) ?? ""}`}
              alt={item.title}
              className="mx-auto block rounded-t-lg rounded-b-lg h-[450px] w-[400px]"
            />
            <div className="space-y-2 text-center sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg font-semibold text-black">
                  {item.title}
                </p>
                <p className="text-gray-500">
                  {item.description}
                </p>
              </div>
              <button className="border-purple-200 text-purple-600">
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
