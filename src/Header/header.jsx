import React from "react";
import Logo from '../assets/images/logo.png';
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />
      <div className="catalog">
        <div>фильмы</div>
      </div>
      <nav className={styles.nav}>
       <div>
        <img src="" alt="" />
        Поиск
        </div>
       <div>
       <img src="" alt="" />
        Войти
        </div>
      </nav>
    </header>
  );
};



export default Header;