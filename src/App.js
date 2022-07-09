import "./main.scss";
import axios from "axios";
import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchItems, setSearchItems] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  const addToCart = (obj) => {
    axios.post("https://62bd91cdc5ad14c110c1d185.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const removeFromCart = (id) => {
    axios.delete(`https://62bd91cdc5ad14c110c1d185.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const searchValue = (event) => {
    setSearchItems(event.target.value);
  };

  React.useEffect(() => {
    // fetch("https://62bd91cdc5ad14c110c1d185.mockapi.io/items")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });

    axios
      .get("https://62bd91cdc5ad14c110c1d185.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://62bd91cdc5ad14c110c1d185.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  return (
    <div className="wrapper clear">
      {/* CART */}
      {cartOpened && (
        <Drawer
          removeFromCart={removeFromCart}
          closeCartBtn={() => setCartOpened(false)}
          cartItems={cartItems}
        />
      )}
      {/* /.CART */}

      <Header openCartBtn={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1>
            {searchItems
              ? `Поиск по запросу: "${searchItems}"`
              : "Все кроссовки"}
          </h1>
          <div className="search__block">
            <img src="/img/search.svg" width={15} height={15} alt="Search" />
            {searchItems && (
              <img
                className="cart__item__button cu-p clear__input"
                src="img/btn_remove.svg"
                width={22}
                height={22}
                alt="ClearSearch"
                onClick={() => {
                  setSearchItems("");
                }}
              />
            )}
            <input
              onChange={searchValue}
              value={searchItems}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="sneakers">
          {items
            .filter((item) =>
              item.subtitle.toLowerCase().includes(searchItems.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                imageUrl={item.imageUrl}
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                onClickPlus={addToCart}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
