import { useContext } from "react";
import AppContext from "../context";
export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const result = cartItems.reduce((sum, el) => sum + el.price, 0);
  const totalPrice = new Intl.NumberFormat("ru-RU").format(result);
  const totalPriceProcent = new Intl.NumberFormat("ru-RU").format(
    Math.round(result * 0.05)
  );
  return { cartItems, setCartItems, totalPrice, totalPriceProcent };
};
