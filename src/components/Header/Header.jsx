import React from 'react'
import Logo from "../../assets/img/logo.svg"
import CartIcon from "../../assets/img/cart-icon.svg"
import HeartIcon from "../../assets/img/heart-icon.svg"
import UserIcon from "../../assets/img/user-icon.svg"
import "../../components/Header/Header.scss"
function Header() {
  return (
    <header className="header">
        <div className="header-logo">
            <img className="header-logo__img" src={Logo} alt="" /> 
            <div className="header-logo__content">
                <h5 className="header-logo__title">REACT SNEAKERS</h5>
                <p className="header-logo__text">Магазин лучших кроссовок</p>
            </div>
        </div>
        <div className="header-info">
            <a href="#" className="header-info__link">
                <img src={CartIcon} alt="" /> 
                <span>1205 руб.</span>
            </a>
            <a href="#" className="header-info__link">
                <img src={HeartIcon} alt="" /> 
            </a>
            <a href="#" className="header-info__link">
                <img src={UserIcon} alt="" />
            </a>
        </div>
    </header>
  )
}

export default Header
