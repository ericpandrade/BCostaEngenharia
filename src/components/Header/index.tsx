import { useState } from "react";
import styles from "./style.module.scss";

const Header = () => {
  const [modalState, setModalState] = useState(false);

  return !modalState ? (
    <div className={styles.HeaderContainer}>
      <img src="Logo.png" alt="Logo da Empresa" />
      <ul>
        <li>Início</li>
        <li>Serviços</li>
        <li>Quem Somos</li>
        <li>Contato</li>
      </ul>
      <div className={styles.MenuMobile}>
        <button
          onClick={() => {
            setModalState(!modalState);
          }}
        >
          <span></span>
        </button>
      </div>
    </div>
  ) : (
    <div className={styles.ModalContainer}>
      <div className={styles.ModalMenu}>
        <button
          onClick={() => {
            setModalState(!modalState);
          }}
        >
          <span></span>
        </button>
      </div>
      <ul>
        <li>Início</li>
        <li>Serviços</li>
        <li>Quem Somos</li>
        <li>Contato</li>
      </ul>
    </div>
  );
};

export default Header;
