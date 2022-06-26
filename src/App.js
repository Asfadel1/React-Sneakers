import "./main.scss";

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    favoriteUrl: true,
    imageUrl: "/img/items/item1.jpg",
    title: "Мужские Кроссовки",
    subtitle: "Nike Blazer Mid Suede",
    price: 12999,
    plusUrl: true,
  },
  {
    favoriteUrl: false,
    imageUrl: "/img/items/item2.jpg",
    title: "Мужские Кроссовки",
    subtitle: "Nike Air Max 270",
    price: 12999,
    plusUrl: false,
  },
  {
    favoriteUrl: false,
    imageUrl: "/img/items/item3.jpg",
    title: "Мужские Кроссовки",
    subtitle: "Nike Blazer Mid Suede",
    price: 8499,
    plusUrl: false,
  },
  {
    favoriteUrl: true,
    imageUrl: "/img/items/item4.jpg",
    title: "Кроссовки Puma X",
    subtitle: "Aka Boku Future Rider",
    price: 8999,
    plusUrl: true,
  },
];

function App() {
  return (
    <div className="wrapper clear">
      {/* CART */}
      <Drawer />
      {/* /.CART */}

      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search__block">
            <img src="/img/search.svg" width={15} height={15} alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          {arr.map((item) => (
            <Card
              klikni={() => {
                console.log("test");
              }}
              favoriteUrl={item.favoriteUrl}
              imageUrl={item.imageUrl}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              plusUrl={item.plusUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
