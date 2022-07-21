import "./main.scss";
import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchItems, setSearchItems] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  const addToCart = (obj) => {
    axios.post("https://62bd91cdc5ad14c110c1d185.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const addToFavorites = (obj) => {
    if (favorites.find((favObj) => favObj.id == obj.id)) {
      axios.delete(
        `https://62bd91cdc5ad14c110c1d185.mockapi.io/favorites/${obj.id}`
      );
    } else {
      axios.post("https://62bd91cdc5ad14c110c1d185.mockapi.io/favorites", obj);
      setFavorites((prev) => [...prev, obj]);
    }
  };

  const removeFromCart = (id) => {
    console.log(id);
    axios.delete(`https://62bd91cdc5ad14c110c1d185.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const searchValue = (event) => {
    setSearchItems(event.target.value);
  };

  React.useEffect(() => {
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
    axios
      .get("https://62bd91cdc5ad14c110c1d185.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
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

      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              searchItems={searchItems}
              setSearchItems={searchItems}
              searchValue={searchValue}
              addToFavorites={addToFavorites}
              addToCart={addToCart}
            />
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/favorites"
          exact
          element={
            <Favorites
              addToFavorites={addToFavorites}
              addToCart={addToCart}
              items={favorites}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
