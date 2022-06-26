import styles from "./Drawer.module.scss";

function Drawer() {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.cart__items}>
          <h2 className="d-flex justify-between">
            Корзина
            <img
              className={styles.cart__item__button + " cu-p"}
              src="img/btn_remove.svg"
              width={32}
              height={32}
              alt="Remove"
            />
          </h2>
          <div className={styles.cart__item + " d-flex align-center p-15"}>
            <img
              className="mr-20"
              src="/img/items/item1.jpg"
              width={70}
              height={70}
              alt="Sneakers"
            />
            <div className={"mr-10 " + styles.cart__item__text}>
              <p>Мужские Кроссовки</p>
              <p>Nike Air Max 270</p>
              <div className="mt-10">
                <b>12 999 руб.</b>
              </div>
            </div>
            <img
              className={styles.cart__item__button}
              src="img/btn_remove.svg"
              width={32}
              height={32}
              alt="Remove"
            />
          </div>
          <div className={styles.cart__item + " d-flex align-center p-15"}>
            <img
              className="mr-20"
              src="/img/items/item2.jpg"
              width={70}
              height={70}
              alt="Sneakers"
            />
            <div className={"mr-10 " + styles.cart__item__text}>
              <p>Мужские Кроссовки</p>
              <p>Nike Air Max 270</p>
              <div className="mt-10">
                <b>12 999 руб.</b>
              </div>
            </div>
            <img
              className={styles.cart__item__button}
              src="img/btn_remove.svg"
              width={32}
              height={32}
              alt="Remove"
            />
          </div>
        </div>
        <div className={styles.cart__footer}>
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className={styles.green__button}>
            Оформить заказ
            <span>
              <img width={13} height={13} src="/img/arrow.svg" alt="Arrow" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
