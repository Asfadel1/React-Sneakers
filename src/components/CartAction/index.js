import styles from "./CartAction.module.scss";
import greenButton from "../Drawer/Drawer.module.scss";

function CartAction({ closeCartBtn }) {
  return (
    <div className={styles.empty__cart}>
      <img
        className="align-center"
        width={120}
        height={120}
        src="img/empty_cart.png"
        alt="#emptyCart"
      />
      <h2>Корзина пустая</h2>
      <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
      <button onClick={closeCartBtn} className={greenButton.green__button}>
        <span className="reverse__arrow">
          <img
            width={13}
            height={13}
            src="/img/reverse_arrow.svg"
            alt="Arrow"
          />
        </span>
        Вернуться назад
      </button>
    </div>
  );
}

export default CartAction;
