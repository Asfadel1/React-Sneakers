import "./main.scss";

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear 123">
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
          <Card />
          <div className="card">
            <div className="card__item">
              <div className="card__item__img">
                <img
                  className="like"
                  width={32}
                  height={32}
                  src="/img/like.svg"
                  alt="ActiveLike"
                />
                <img
                  width={133}
                  height={112}
                  src="/img/items/item2.jpg"
                  alt="Item1"
                />
              </div>
              <div className="card__item__text">
                <p>Мужские Кроссовки</p>
                <p>Nike Air Max 270</p>
              </div>
              <div className="d-flex justify-between align-center mb-35 mt-20">
                <div className="d-flex flex-column">
                  <span className="item__cost">Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <div className="button__plus">
                  <img
                    width={32}
                    height={32}
                    src="/img/plus_checked.svg"
                    alt="PlusChecked"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__item">
              <div className="card__item__img">
                <img
                  className="like"
                  width={32}
                  height={32}
                  src="/img/like.svg"
                  alt="ActiveLike"
                />
                <img
                  width={133}
                  height={112}
                  src="/img/items/item3.jpg"
                  alt="Item1"
                />
              </div>
              <div className="card__item__text">
                <p>Мужские Кроссовки</p>
                <p>Nike Blazer Mid Suede</p>
              </div>
              <div className="d-flex justify-between align-center mb-35 mt-20">
                <div className="d-flex flex-column">
                  <span className="item__cost">Цена:</span>
                  <b>8 499 руб.</b>
                </div>
                <div className="button__plus">
                  <img width={32} height={32} src="/img/plus.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__item">
              <div className="card__item__img">
                <img
                  className="like"
                  width={32}
                  height={32}
                  src="/img/like.svg"
                  alt="ActiveLike"
                />
                <img
                  width={133}
                  height={112}
                  src="/img/items/item4.jpg"
                  alt="Item1"
                />
              </div>
              <div className="card__item__text">
                <p>Кроссовки Puma X</p>
                <p>Aka Boku Future Rider</p>
              </div>
              <div className="d-flex justify-between align-center mb-35 mt-20">
                <div className="d-flex flex-column">
                  <span className="item__cost">Цена:</span>
                  <b>8 999 руб.</b>
                </div>
                <div className="button__plus">
                  <img width={32} height={32} src="/img/plus.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
