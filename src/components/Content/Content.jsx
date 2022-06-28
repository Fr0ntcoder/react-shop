import React from 'react'
import "./Content.scss"
import Img from "../../assets/img/cart-img.png"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faPlus, faCheck ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
library.add(
    faHeart,faPlus,faCheck,faMagnifyingGlass
);
const Content = () => {
    const productList = [
        {
            title: "Мужские Кроссовки Nike Blazer Mid Suede",
            price: "12 999",
        },
        {
            title: "Мужские Кроссовки Nike Air Max 270",
            price: "12 999",
        },
        {
            title: "Мужские Кроссовки Nike Blazer Mid Suede",
            price: "8 499",
        },
        {
            title: "Кроссовки Puma X Aka Boku Future Rider",
            price: "8 999",
        }
    ];
    return (
        <main className="content">
            <h2 className="content-title">
                <span>Все кроссовки</span>
                <div className="search-input">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="search" placeholder="Поиск..."/>
                </div>
            </h2>
            <ul className="content-list">
                {productList.map((el,i) => (
                    <li className="content-item">
                        <div className="content-item__img responsive-picture">
                            <a href="" className="content-item__sign">
                                {/* <span className="content-item__sign-icon">
                                    <FontAwesomeIcon icon={faHeart} />
                                </span> */}
                                <span className="content-item__sign-icon">
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                            </a>
                            <img src={Img} alt="" />
                        </div>
                        <h3 className="content-item__title">{el.title}</h3>
                        <div className="content-item__bottom">
                            <div className="content-item__price">
                                <h5 className="content-item__price-title">Цена</h5>  
                                <p className="content-item__price-text">{el.price} руб.</p>  
                            </div>
                            <a href="#" className="content-item__add">
                                <span className="content-item__add-plus">
                                    <FontAwesomeIcon icon={faPlus} />
                                </span>
                                {/* <span className="content-item__add-check">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span> */}
                            </a>
                        </div>
                    </li>
                ))
                }
            </ul>
        </main>
    )
}

export default Content
