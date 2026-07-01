"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const AddProduct = ({ closeModal, refetch }: { closeModal: () => void, refetch: () => void }) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("/img/image-plus.svg");

  useEffect(() => {
    if (!file) {
      setPreviewUrl("/img/image-plus.svg");
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  const storeProducts = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (file) {
      formData.set("image", file);
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products`,
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok) {
      console.error("Error al crear producto:", response.status);
      return;
    }

    const json = await response.json();
    console.log("producto creado", json);
    closeModal();
    refetch();
  };

  return (
    <div className="fixed z-50 w-full h-full bg-[#080707]/50 flex items-center justify-center">
      <div className="grid grid-cols gap-2 p-8 items-center bg-[#F2E6ED]/70">
        <form onSubmit={storeProducts}>
          <div className="flex items-center justify-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="cursor-pointer bg-[#A89191] outline-none w-[400px] h-[400px] relative border-t-lg z-10 opacity-0"
            />
            <img
              className="mx-auto block rounded-t-lg w-[400px] h-[400px] absolute"
              src={previewUrl}
              alt="Vista previa del producto"
            />
          </div>

          <input
            type="text"
            name="title"
            placeholder="Nombre del producto"
            required
            className="w-full p-2 rounded-md border border-gray-300"
          />
          <input
            type="text"
            name="description"
            placeholder="Descripción del producto"
            required
            className="w-full p-2 rounded-md border border-gray-300"
          />
          <input
            type="number"
            name="price"
            placeholder="Precio del producto"
            required
            min="0"
            step="0.01"
            className="w-full p-2 rounded-md border border-gray-300"
          />
          <select   
            name="category"
            required
            className="w-full p-2 rounded-md border border-gray-300"
          >
            <option value="" disabled selected>Selecciona una categoría</option>
            <option value="enteros">Enteros</option>
            <option value="masitas">Masitas</option>
          </select>
          <button
            type="submit"
            className="cursor-pointer bg-[#A89191] text-white p-2 rounded-md w-full mt-2"
          >
            Agregar producto
          </button>
        </form>
      </div>
      <img
        src="/img/search-minus.svg"
        onClick={closeModal}
        className="absolute top-0 right-0 hover:scale-110 transition-all duration-300 cursor-pointer w-[50px] h-[50px]"
        alt="Cerrar"
      />
    </div>
  );
};

export default AddProduct;
