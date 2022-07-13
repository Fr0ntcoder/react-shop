import Card from "../components/Card";
import { React, useContext } from "react";
import AppContext from "../context";
function Favorites() {
  const { favorites, onAddFavorit, onAddToCart } = useContext(AppContext);
  return (
    <main className="content">
      <h2 className="content-title">
        <span>Мои закладки</span>
      </h2>
      <div className="content-list">
        {favorites.map((item) => (
          <Card
            isFavorite={favorites.some(
              (el) => Number(el.id) === Number(item.id)
            )}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={(obj) => onAddFavorit(obj)}
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </main>
  );
}

export default Favorites;
