import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const initialState = () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  };

  const [cartList, setCartList] = useState(initialState);

  const isInCart = (id) => cartList.find((prod) => prod.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cartList.map((prod) => {
        if (prod.id === item.id) {
          const newQuantity = prod.quantity + quantity;
          return { ...prod, quantity: newQuantity };
        } else {
          return prod;
        }
      });
      setCartList(newCart);
    } else {
      const newProduct = { ...item, quantity: quantity };
      setCartList([...cartList, newProduct]);
    }
  };

  const removeProduct = (id) =>
    setCartList(cartList.filter((prod) => prod.id !== id));

  const cleanCart = () => setCartList([]);

  const totalPrice = () => {
    return cartList.reduce(
      (acc, product) => (acc += product.price * product.quantity),
      0
    );
  };
  const totalQuatity = () => {
    return cartList.reduce((acc, product) => (acc += product.quantity), 0);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeProduct,
        cleanCart,
        totalPrice,
        totalQuatity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
