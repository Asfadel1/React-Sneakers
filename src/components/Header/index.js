import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header
      className={styles.header + " d-flex justify-between align-center p-40"}
    >
      <Link to="/">
        <div className="d-flex align-center">
          <img
            className="mr-15"
            width={40}
            height={40}
            src="/img/logo.png"
            alt="#Logo"
          />
          <div className={styles.headerInfo}>
            <h3 className="text-uppercase">react sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.openCartBtn}>
          <img
            className="mr-10"
            width={18}
            height={18}
            src="/img/cart.svg"
            alt="#Cart"
          />
          <span>1205 руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="mr-35 cu-p"
              width={21}
              height={19}
              src="/img/favorite.svg"
              alt="#Fav"
            />
          </Link>
        </li>
        <li>
          <img
            className="mr-63 cu-p"
            width={20}
            height={20}
            src="/img/user.svg"
            alt="#User"
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
