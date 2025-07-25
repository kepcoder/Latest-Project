import React from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/flavourData";
import ParticlesBackground from './../bgParticles/backgroundParticles';

const Cart = () => {
  const { cartItems } = useCart();

  const allProducts = [
    ...products.chocolates,
    ...products.cups,
    ...products.bundles,
    ...products.limited,
  ];

  const itemsWithDetails = cartItems.map((cartItem) => {
    const product = allProducts.find((item) => item.id === cartItem.id);
    return product
      ? {
          ...product,
          quantity: cartItem.quantity,
          totalPrice: parseFloat(product.price.replace('$', '')) * cartItem.quantity,
        }
      : null;
  }).filter(Boolean);

  const totalAmount = itemsWithDetails.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  );

  return (
    <div className="relative min-h-screen flex items-start justify-center px-4 py-10 text-white">
      <ParticlesBackground />
      <div className="relative  z-10 w-full max-w-6xl flex flex-col md:flex-row gap-10 mt-20">
        {/* carts list */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
          {itemsWithDetails.length === 0 ? (
            <p className="text-milk">"Shocking🥵,Your Cart is empty"</p>
          ) : (
            itemsWithDetails.map((item) => (
              <div
                key={item.id}
                className="flex items-center cursor-pointer justify-between bg-white/10 backdrop-blur-md rounded-lg p-4 mb-4 shadow-md hover:scale-102 transition-transform duration-300"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-300">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-lg font-semibold">${item.totalPrice.toFixed(2)}</p>
              </div>
            ))
          )}
        </div>

        {/* Summary | checkout box*/}
<div className="w-full md:w-1/3 mt-13">
  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
    <h3 className="text-xl font-bold  mb-4">Order Summary</h3>
    
    {itemsWithDetails.length === 0 ? (
      <p className="text-milk">Add Some Chocolates to take a bite🍫</p>
    ) : (
      <>
        {itemsWithDetails.map((item, index) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span className="text-milk">
              {index + 1}. {item.title} (x{item.quantity})
            </span>
            <span>${item.totalPrice.toFixed(2)}</span>
          </div>
        ))}
        <hr className="my-4 border-gray-600" />
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span>Total:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 rounded transition cursor-pointer">
          Proceed to Checkout
        </button>
      </>
    )}
  </div>
</div>

      </div>
    </div>
  );
};

export default Cart;
