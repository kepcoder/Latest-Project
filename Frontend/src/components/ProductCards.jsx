import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

export default function ProductCards({ id, image, title, price }) {
  const { addToCart } = useCart();

  return (
    <div className="products border-light-brown border-4 bg-white rounded-2xl shadow-xl p-5 flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="h-48 md:h-56 lg:h-64 w-auto object-contain mb-4"
      />
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-center text-black">{title}</h3>
      <p className="text-md md:text-lg lg:text-xl text-[#0079AC] font-bold mt-2">{price}</p>
      <p
        onClick={() => {
            addToCart(id);
            toast.success("Product added to cart!");
            }}
        className="text-md cursor-pointer w-full md:text-lg lg:text-xl text-milk bg-red-brown font-bold mt-2 p-3 text-center rounded-4xl"
      >
        Add To Cart
      </p>
    </div>
  );
}
