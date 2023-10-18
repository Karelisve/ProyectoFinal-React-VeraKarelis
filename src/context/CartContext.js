import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0); // estado para la cantidad total

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("Producto ya agregado");
    }
  };

  const removeItem = (itemId) => {
    const removedItem = cart.find((item) => item.id === itemId);
    if (removedItem) {
      setCart((prev) => prev.filter((item) => item.id !== itemId));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    setTotal(newTotal);

    const newTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};