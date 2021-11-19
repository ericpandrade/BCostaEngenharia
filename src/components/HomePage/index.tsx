import styles from "./style.module.scss";

import setaParaBaixo from "../../assets/seta-para-baixo.png";

const StartPage = () => {
  return (
    <div className={styles.StartContainer}>
      <div>
        <h1>
          Arquitetura <br />
          Construçoẽs &<br />
          Recuperação Estrutural
        </h1>
        <img src={setaParaBaixo} alt="Seta para baixo" />
      </div>
    </div>
  );
};

export default StartPage;
