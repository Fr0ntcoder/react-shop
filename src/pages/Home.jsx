import Card from "../components/Card";
import { React, useContext } from "react";
import AppContext from "../context";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass);
function Home({
  searchValue,
  setSearchValue,
  onSearchInput,
  onAddFavorit,
  onAddToCart,
  isLoading,
}) {
  const { items } = useContext(AppContext);
  const renderItems = () => {
    const filtredItems = items.filter((el) =>
      el.title.toLowerCase().includes(searchValue)
    );
    return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
      <Card
        onPlus={(obj) => onAddToCart(obj)}
        onFavorite={(obj) => onAddFavorit(obj)}
        key={index}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <main className="content">
      <h2 className="content-title">
        <span>
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
        </span>
        <div className="search-input">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="search"
            onChange={onSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </h2>
      <div className="content-list">{renderItems()}</div>
    </main>
  );
}

export default Home;
