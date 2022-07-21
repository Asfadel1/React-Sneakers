import Card from "../components/Card";

function Favorites({ items, addToFavorites, addToCart }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakers">
        {items.map((item, index) => (
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

export default Favorites;
