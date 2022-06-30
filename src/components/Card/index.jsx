import {React,useState} from 'react';
import "./Card.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faPlus, faCheck} from '@fortawesome/free-solid-svg-icons';
library.add(
    faHeart,faPlus,faCheck
);

const Card = ({img,title,price,id, onPlus, onFavorite}) => {
    const [cartAdd, setCartAdd] = useState(false)
    const onClickPlus = (e) => {
        e.preventDefault()
        onPlus({id,img,title,price})
        setCartAdd(!cartAdd)
    }
    return (
        <div className="card-item">
            <div className="card-item__img responsive-picture">
                <a href="" className="card-item__sign">
                    {/* <span className="card-item__sign-icon">
                        <FontAwesomeIcon icon={faHeart} />
                    </span> */}
                    <span className="card-item__sign-icon">
                        <FontAwesomeIcon icon={faHeart} />
                    </span>
                </a>
                <img src={require(`../../assets/img/${img}`)} alt="" />
            </div>
            <h3 className="card-item__title">{title}</h3>
            <div className="card-item__bottom">
                <div className="card-item__price">
                    <h5 className="card-item__price-title">Цена</h5>  
                    <p className="card-item__price-text">{price} руб.</p>  
                </div>
                <a href="#" className="card-item__add" onClick={onClickPlus}>
                    {cartAdd ? 
                    <span className="card-item__add-check">
                        <FontAwesomeIcon icon={faCheck} />
                    </span> :
                    <span className="card-item__add-plus">
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                    }
                </a>
            </div>
        </div>
    )
}

export default Card
