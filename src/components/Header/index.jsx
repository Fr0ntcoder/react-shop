import { React } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import Logo from "../../assets/img/logo.svg";
import CartIcon from "../../assets/img/cart-icon.svg";
import HeartIcon from "../../assets/img/heart-icon.svg";
import UserIcon from "../../assets/img/user-icon.svg";
import "../../components/Header/Header.scss";
function Header(props) {
  const { totalPrice } = useCart();
  return (
    <header className="header">
      <Link to="/">
        <div className="header-logo">
          <img className="header-logo__img" src={Logo} alt="" />
          <div className="header-logo__content">
            <h5 className="header-logo__title">REACT SNEAKERS</h5>
            <p className="header-logo__text">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <div className="header-info">
        <div className="header-info__link" onClick={props.onOpenCard}>
          <img src={CartIcon} alt="" />
          <span>{totalPrice} руб.</span>
        </div>
        <div className="header-info__link">
          <Link to="/favorites">
            <img src={HeartIcon} alt="" />
          </Link>
        </div>
        <div className="header-info__link">
          <Link to="/orders">
            <img src={UserIcon} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
