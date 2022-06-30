import React from 'react';
import "./Drawer.scss";
import Img from "../../assets/img/cart-img1.png";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark,faArrowRight} from '@fortawesome/free-solid-svg-icons';
library.add(faXmark);
const Drawer = ({onClose,items = []}) => {
  return (
    <div className="drawer">
        <div className="drawer-block"></div>
        <div className="drawer-cart">
            <h3 className="drawer-cart__title">
                <span>Корзина</span>
                <a href="#" className="drawer-close" onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </a>
                </h3>
            <ul className="drawer-cart__list">
                {items.map(item => (
                    <li className="drawer-cart__item" key={item.id}>
                        <span className="drawer-cart__item-img responsive-picture">
                            <img src={require(`../../assets/img/${item.img}`)} alt="" />
                        </span>
                        <div className="drawer-cart__item-content">
                            <p className="drawer-cart__item-title">{item.title}</p>  
                            <p className="drawer-cart__item-price">{item.price} руб.</p>  
                        </div>
                        <a href="#" className="drawer-cart__item-remove">
                            <FontAwesomeIcon icon={faXmark} />
                        </a>
                    </li>
                ))
                }
            </ul>
            <div className="drawer-cart__bottom">
                <div className="drawer-cart__result">
                    <div className="drawer-cart__result-title">Итого:</div>  
                    <div className="drawer-cart__result-line"></div>
                    <div className="drawer-cart__result-price">21 498 руб.</div>      
                </div>
                <div className="drawer-cart__result">
                    <div className="drawer-cart__result-title">Налог 5%:</div>  
                    <div className="drawer-cart__result-line"></div>
                    <div className="drawer-cart__result-price">1074 руб.</div>      
                </div> 
                <button className="design-button">
                    <span>Оформить заказ</span>   
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>              
            </div>
        </div>
    </div>
  )
}

export default Drawer
