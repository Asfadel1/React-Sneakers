import styles from "./Card.module.scss";

function Card(props) {
  const isFavorite = () => {
    if (props.favoriteUrl == true) {
      return "/img/active_like.svg";
    } else {
      return "/img/like.svg";
    }
  };

  const isChecked = () => {
    if (props.plusUrl == true) {
      return "/img/plus_checked.svg";
    } else {
      return "/img/plus.svg";
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__item}>
        <div className={styles.card__item__img}>
          <img
            className={styles.like}
            width={32}
            height={32}
            src={isFavorite()}
            alt="ActiveLike"
          />
          <img width={133} height={112} src={props.imageUrl} alt="Item1" />
        </div>
        <div className={styles.card__item__text}>
          <p>{props.title}</p>
          <p>{props.subtitle}</p>
        </div>
        <div className="d-flex justify-between align-center mb-20 mt-20">
          <div className="d-flex flex-column">
            <span className={styles.item__cost}>Цена:</span>
            <b>{props.price} руб.</b>
          </div>
          <div className={styles.button__plus} onClick={props.klikni}>
            <img width={32} height={32} src={isChecked()} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
