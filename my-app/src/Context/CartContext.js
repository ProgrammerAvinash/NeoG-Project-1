import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const handleCartUpdate = (item) => {
    setCart((cart) => [...cart, item]);
  };
  return (
    <CartContext.Provider value={{ cart, handleCartUpdate }}>
      {children}
    </CartContext.Provider>
  );
}
