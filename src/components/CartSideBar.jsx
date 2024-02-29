import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const CartSideBar = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  if (!cart) {
    return <div>loading...</div>;
  }

  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
        className="fixed top-0 right-0 m-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Cart
      </button>
      <div
        className={`transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed right-0 top-0 h-full w-64 p-4 bg-white border-l shadow-lg transition-transform duration-200 ease-in-out`}
      >
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.map((product) => (
          <div key={product.id} className="flex justify-between mb-4">
            <div>
              <h3 className="text-xl">{product.name}</h3>
              <p>${product.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
        <p className="text-xl font-bold">
          Total: ${cart.reduce((total, product) => total + product.price, 0)}
        </p>
      </div>
    </div>
  );
};

export default CartSideBar;
