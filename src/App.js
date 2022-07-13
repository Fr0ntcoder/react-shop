import "./assets/css/reset.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import AppContext from "./context";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const [getItems, getCartItems, getFavoritesItems] = await Promise.all([
        axios.get("https://62bc20b96b1401736cf2b09b.mockapi.io/items"),
        axios.get("https://62bc20b96b1401736cf2b09b.mockapi.io/cart"),
        axios.get("https://62bc20b96b1401736cf2b09b.mockapi.io/favorites"),
      ]);
      setIsLoading(false);
      setCartItems(getCartItems.data);
      setFavorites(getFavoritesItems.data);
      setItems(getItems.data);
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://62bc20b96b1401736cf2b09b.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://62bc20b96b1401736cf2b09b.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {}
  };

  const onAddFavorit = async (obj) => {
    try {
      if (favorites.find((el) => Number(el.id) === Number(obj.id))) {
        axios.delete(
          `https://62bc20b96b1401736cf2b09b.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://62bc20b96b1401736cf2b09b.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
      console.error(error);
    }
  };

  const onSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const onRemoveToCart = (id) => {
    try {
      axios.delete(`https://62bc20b96b1401736cf2b09b.mockapi.io/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Не удалось удалить товар!");
      console.log(error);
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((el) => Number(el.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddFavorit,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper">
        <Drawer
          onClose={() => setCartOpened(false)}
          items={cartItems}
          onRemove={onRemoveToCart}
          opened={cartOpened}
        />
        <Header onOpenCard={() => setCartOpened(true)} />
        <Routes>
          <HashRouter
            path="/"
            element={
              <Home
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onSearchInput={onSearchInput}
                onAddFavorit={onAddFavorit}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
            exact
          />
          <HashRouter path="/favorites" element={<Favorites />} />
          <HashRouter path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
