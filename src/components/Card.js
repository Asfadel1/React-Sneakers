function Card() {
  return (
    <div className="card">
      <div className="card__item">
        <div className="card__item__img">
          <img
            className="like"
            width={32}
            height={32}
            src="/img/active_like.svg"
            alt="ActiveLike"
          />
          <img
            width={133}
            height={112}
            src="/img/items/item1.jpg"
            alt="Item1"
          />
        </div>
        <div className="card__item__text">
          <p>Мужские Кроссовки</p>
          <p>Nike Blazer Mid Suede</p>
        </div>
        <div className="d-flex justify-between align-center mb-20 mt-20">
          <div className="d-flex flex-column">
            <span className="item__cost">Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <div className="button__plus">
            <img width={32} height={32} src="/img/plus.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
