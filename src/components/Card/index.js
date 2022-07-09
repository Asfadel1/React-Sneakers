import React from "react";
import styles from "./Card.module.scss";

function Card({ imageUrl, title, subtitle, price, onClickPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const addToCart = () => {
    onClickPlus({ imageUrl, title, subtitle, price });
    setIsAdded(!isAdded);
  };

  const addToFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__item}>
        <div className={styles.card__item__img}>
          <img
            onClick={addToFavorite}
            className={styles.like}
            width={32}
            height={32}
            src={isFavorite ? "/img/active_like.svg" : "/img/like.svg"}
            alt="ActiveLike"
          />
          <img width={133} height={112} src={imageUrl} alt="Item1" />
        </div>
        <div className={styles.card__item__text}>
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
        <div className="d-flex justify-between align-center mb-20 mt-20">
          <div className="d-flex flex-column">
            <span className={styles.item__cost}>Цена:</span>
            <b>{price} руб.</b>
          </div>
          <div className={styles.button__plus} onClick={addToCart}>
            <img
              width={32}
              height={32}
              src={isAdded ? "/img/plus_checked.svg" : "/img/plus.svg"}
              alt="Plus"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
