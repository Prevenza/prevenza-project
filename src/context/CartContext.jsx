import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const addToCart = (item) => {
    setCartItems((prev) => {
      const updated = [...prev];

      const existing = updated.find((x) => x.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        updated.push({ ...item, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);