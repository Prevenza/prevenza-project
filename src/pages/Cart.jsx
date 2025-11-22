import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  function updateQuantity(id, amount) {
    const updated = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      );

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  function removeItem(id) {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6 flex justify-center">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="flex justify-center text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <div className="bg-white border border-gray-400 rounded-lg shadow-sm p-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-4 items-center border-b border-gray-400 py-4"
              >
                {/* Name + Category */}
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>

                {/* Price */}
                <p className="font-medium">${item.price}</p>

                {/* Quantity controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-3 py-1 border rounded"
                  >
                    -
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-3 py-1 border rounded"
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total */}
            <div className="flex justify-between items-center mt-6">
              <p className="text-lg font-semibold">
                Total: <span className="text-[#8116b4]">${total.toFixed(2)}</span>
              </p>

              <button className="px-5 py-2 rounded-md bg-[#8116b4] text-white hover:opacity-90">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}