import { useState,useEffect } from "react";
import "./assets/css/reset.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
library.add(
    faMagnifyingGlass
);
function App() {
  const [items,setItems] = useState([]);
  const [cartItems,setCartItems] = useState([]);
  const [cartOpened,setCartOpened] = useState(false);
  useEffect(() => {
      const getItems = async () => {
        const res = await fetch("https://62bc20b96b1401736cf2b09b.mockapi.io/items");
        const data = await res.json();
        setItems(data)
      }
      getItems()
  },[])

  const onAddToCart = (obj) => {
    const id = cartItems.map(item => item.id)
    if(!id.includes(obj.id)) {
        setCartItems(prev => [...prev,obj])
    }
  }

  return (
    <div className="wrapper">
        {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems}/>}
        <Header onOpenCard={() => setCartOpened(true)} />  
        <main className="content">
            <h2 className="content-title">
                <span>Все кроссовки</span>
                <div className="search-input">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="search" placeholder="Поиск..."/>
                </div>
            </h2>
            <div className="content-list">
                {items.map(item => (
                    <Card 
                        id={item.id}
                        img={item.img} 
                        title={item.title}  
                        price={item.price} 
                        onPlus={(obj) => onAddToCart(obj)} 
                        onFavorite={() => console.log("Закладка")} 
                        key={item.id} 
                    /> 
                ))
                }
            </div>
        </main>
    </div>
  );
}

export default App;
