import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (watch) => {
    console.log("adding to cart");
    const exists = cart.some((item) => item.id === watch.id);
    if (exists) return;
    const newItem = {
      id: watch.id,
      brand: watch.brand,
      model: watch.model,
      image: watch.image,
      price: watch.price,
    };
    setCart((prevItems) => [...prevItems, newItem]);
  };

  const removeCart = (param) => {
    const id = typeof param === "object" && param !== null ? param.id : param;
    setCart((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <StateContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </StateContext.Provider>
  );
};

const useCart = () => useContext(StateContext);

export { CartProvider, useCart };
