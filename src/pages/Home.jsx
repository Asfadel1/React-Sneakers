import Card from "../components/Card";

function Home({
  items,
  searchItems,
  setSearchItems,
  searchValue,
  addToFavorites,
  addToCart,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1>
          {searchItems ? `Поиск по запросу: "${searchItems}"` : "Все кроссовки"}
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
              onFavorite={addToFavorites}
              onClickPlus={addToCart}
              favorited={true}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
