import { React, useContext } from "react";
import AppContext from "../../context";
import "./info.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(faXmark, faArrowLeft, faArrowRight);
const Info = ({ title, image, decription }) => {
  const { setCartOpened } = useContext(AppContext);
  return (
    <div className="drawer-empty">
      <img
        className="drawer-empty__img"
        src={require(`../../assets/img/${image}`)}
        alt=""
      />
      <h3 className="drawer-empty__title">{title}</h3>
      <p className="drawer-empty__text">{decription}</p>
      <button
        onClick={() => setCartOpened(false)}
        className="drawer-empty__btn design-button"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Вернуться назад</span>
      </button>
    </div>
  );
};

export default Info;
