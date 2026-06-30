"use client";
import { useEffect, useState } from "react";

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


const ProductsPage = () => {
  const [products, setProducts] = useState([]);	
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products`
      );
      const json = await response.json();
      setProducts(json);
    };
    getProducts();
  }, []);
  return (
    <div className="flex justify-center bg-[url('/image/fondo.jpg')] bg-fixed p-8">
      <div className="grid grid-cols-1 gap-4">
        {data.map((item, index) => (
          <div
            className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 bg-[#F2E6ED]/70 text-center border-2 border-gray-200 rounded-lg  max-w-[800px]"
            key={index}
          >
            <img
              src={item.image}
              alt={item.title}
              className="mx-auto block rounded-t-lg rounded-b-lg h-[450px] w-[400px]"
            />
            <div className="space-y-2 text-center sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg font-semibold text-black">
                  Torta example
                </p>
                <p className="text-gray-500">
                  Product Engineer Product EngineerProduct EngineerProduct
                  EngineerProduct EngineerProduct EngineerProduct Engineer
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
