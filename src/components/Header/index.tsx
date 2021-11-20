import { useState } from "react";
import styles from "./style.module.scss";

const Header = () => {
  const [modalState, setModalState] = useState(false);

  return !modalState ? (
    <div className={styles.HeaderContainer}>
      <a href="#startSection">
        <img src="Logo.png" alt="Logo da Empresa" />
      </a>

      <nav>
        <ul>
          <a href="#startSection">
            <li>Início</li>
          </a>
          <a href="#serviceSection">
            <li>Serviços</li>
          </a>
          <a href="#apresentationSection">
            <li>Quem Somos</li>
          </a>
          <a href="#contactSection">
            <li>Contato</li>
          </a>
        </ul>
      </nav>

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
      <nav>
        <ul>
          <button
            onClick={() => {
              setModalState(!modalState);
            }}
          >
            <a href="#startSection">
              <li>Início</li>
            </a>
          </button>
          <button
            onClick={() => {
              setModalState(!modalState);
            }}
          >
            <a href="#serviceSection">
              <li>Serviços</li>
            </a>
          </button>
          <button
            onClick={() => {
              setModalState(!modalState);
            }}
          >
            <a href="#apresentationSection">
              <li>Quem Somos</li>
            </a>
          </button>
          <button
            onClick={() => {
              setModalState(!modalState);
            }}
          >
            <a href="#contactSection">
              <li>Contato</li>
            </a>
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
