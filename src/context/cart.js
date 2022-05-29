import { useState, useContext, useEffect, createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) ?? []
  );

  const addToCart = (item) => {
    if (cartItems.find((ci) => ci.id === item.id)) {
      return;
    }

    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((ci) => ci.id !== item.id)
    );
  };

  const itemInCart = (item) => {
    return Boolean(cartItems.find((ci) => ci.id === item.id));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const exposedState = {
    cartItems,
    addToCart,
    removeFromCart,
    itemInCart
  };

  return (
    <CartContext.Provider value={exposedState}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCartContext() must be called inside CartContextProvider"
    );
  }

  return context;
};
