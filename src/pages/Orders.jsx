import { React, useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
function Orders({ onAddToCart, onAddFavorit }) {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getOrders() {
      try {
        const { data } = await axios.get(
          "https://62bc20b96b1401736cf2b09b.mockapi.io/orders"
        );
        setOrders(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getOrders();
  }, []);
  return (
    <main className="content">
      <h2 className="content-title">
        <span>Мои заказы</span>
      </h2>
      {orders.map((item) => (
        <div key={item.id}>
          <h3 className="content-subtitle">Заказ #{item.id}</h3>
          <div className="content-list">
            {(isLoading ? [...Array(12)] : item.items).map((el) => (
              <Card {...el} key={el.id} loading={isLoading} />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}

export default Orders;
