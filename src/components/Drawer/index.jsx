import { React, useState } from "react";
import axios from "axios";
import { useCart } from "../../hooks/useCart";
import Info from "../Info";
import "./Drawer.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowRight } from "@fortawesome/free-solid-svg-icons";
library.add(faXmark, faArrowRight);
const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));
const Drawer = ({ onClose, onRemove, items = [], opened }) => {
  const { cartItems, setCartItems, totalPrice, totalPriceProcent } = useCart();
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://62bc20b96b1401736cf2b09b.mockapi.io/orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://62bc20b96b1401736cf2b09b.mockapi.io/cart/${item.id}`
        );
        await delay(1000);
      }
    } catch (error) {
      console.log("Не удалось отправить заказ!");
    }
    setIsLoading(false);
  };
  return (
    <div className={`drawer ${opened ? "drawer-visible" : ""}`}>
      <div className="drawer-block"></div>
      <div className="drawer-cart">
        <h3 className="drawer-cart__title">
          <span>Корзина</span>
          <a href="#" className="drawer-close" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </a>
        </h3>
        {items.length === 0 ? (
          <Info
            title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
            decription={
              isOrderCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={isOrderCompleted ? "cart-completed.jpg" : "cart-empty.jpg"}
          />
        ) : (
          <div className="drawer-cart__wrap">
            <ul className="drawer-cart__list">
              {items.map((item) => (
                <li className="drawer-cart__item" key={item.id}>
                  <span className="drawer-cart__item-img responsive-picture">
                    <img src={require(`../../assets/img/${item.img}`)} alt="" />
                  </span>
                  <div className="drawer-cart__item-content">
                    <p className="drawer-cart__item-title">{item.title}</p>
                    <p className="drawer-cart__item-price">{item.price} руб.</p>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="drawer-cart__item-remove"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="drawer-cart__bottom">
              <div className="drawer-cart__result">
                <div className="drawer-cart__result-title">Итого:</div>
                <div className="drawer-cart__result-line"></div>
                <div className="drawer-cart__result-price">
                  {totalPrice} руб.
                </div>
              </div>
              <div className="drawer-cart__result">
                <div className="drawer-cart__result-title">Налог 5%:</div>
                <div className="drawer-cart__result-line"></div>
                <div className="drawer-cart__result-price">
                  {totalPriceProcent} руб.
                </div>
              </div>
              <button
                onClick={onClickOrder}
                disabled={isLoading}
                className="drawer-cart__btn design-button"
              >
                <span>Оформить заказ</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
