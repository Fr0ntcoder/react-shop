import "./Card.scss";
import { React, useState, useContext } from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart, faPlus, faCheck);

const Card = ({
  img,
  title,
  price,
  id,
  onPlus,
  onFavorite,
  isFavorite,
  loading = false,
}) => {
  const [favoriteAdd, setFavoriteAdd] = useState(isFavorite);
  const { isItemAdded } = useContext(AppContext);
  const itemObj = { id, parentId: id, img, title, price };
  const onClickPlus = (e) => {
    e.preventDefault();
    onPlus(itemObj);
  };
  const onClickFavorite = (e) => {
    e.preventDefault();
    onFavorite(itemObj);
    setFavoriteAdd(!favoriteAdd);
  };
  return (
    <>
      {loading ? (
        <div className="card-loader">
          <ContentLoader
            speed={2}
            width={210}
            height={260}
            viewBox="0 0 210 260"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="30" y="30" rx="10" ry="10" width="150" height="90" />
            <rect x="30" y="135" rx="3" ry="3" width="150" height="15" />
            <rect x="30" y="158" rx="3" ry="3" width="90" height="15" />
            <rect x="30" y="190" rx="8" ry="8" width="80" height="25" />
            <rect x="148" y="183" rx="8" ry="8" width="32" height="32" />
          </ContentLoader>
        </div>
      ) : (
        <div className="card-item">
          <div className="card-item__img responsive-picture">
            {onFavorite && (
              <a href="" className="card-item__sign" onClick={onClickFavorite}>
                {favoriteAdd ? (
                  <span className="card-item__icon-active">
                    <FontAwesomeIcon icon={faHeart} />
                  </span>
                ) : (
                  <span className="card-item__icon-default">
                    <FontAwesomeIcon icon={faHeart} />
                  </span>
                )}
              </a>
            )}
            <img src={require(`../../assets/img/${img}`)} alt="" />
          </div>
          <h3 className="card-item__title">{title}</h3>
          <div className="card-item__bottom">
            <div className="card-item__price">
              <h5 className="card-item__price-title">Цена</h5>
              <p className="card-item__price-text">{price} руб.</p>
            </div>
            {onPlus && (
              <a href="#" className="card-item__add" onClick={onClickPlus}>
                {isItemAdded(id) ? (
                  <span className="card-item__add-check">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                ) : (
                  <span className="card-item__add-plus">
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                )}
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
