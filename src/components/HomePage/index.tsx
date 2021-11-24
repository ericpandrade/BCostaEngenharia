import styles from "./style.module.scss";

import setaParaBaixo from "../../assets/seta-para-baixo.png";

const StartPage = () => {
  return (
    <div className={styles.StartContainer} id="startSection">
      <div>
        <h1>
          Arquitetura <br />
          Construções &<br />
          Recuperação Estrutural
        </h1>
        <button>
          <a href="#apresentationSection">
            <img src={setaParaBaixo} alt="Seta para baixo" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default StartPage;
