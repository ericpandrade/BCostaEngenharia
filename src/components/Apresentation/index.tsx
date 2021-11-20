import styles from "./style.module.scss";

import apresentation from "../../assets/Apresentacao.jpeg";

const Apresentation = () => {
  return (
    <div className={styles.ApresentationContainer}>
      <div className={styles.ApresentationBox} id="apresentationSection">
        <img src={apresentation} alt="Bcosta Prédio" />
        <div>
          <h2>Quem Somos</h2>
          <p>
            Somos uma Construtora fundada em Fortaleza por pai e filho
            engenheiros civis, Ageu Costa e João Costa. A confiança sempre foi
            destacada como o nosso maior atributo entre colegas e no meio
            profissional. A partir disso, tomamos a iniciativa de solucionar
            problemas estruturais onde a confiança é essencial. Além de
            embarcarmos em histórias, desejos e sonhos, e transformá-los em
            realidade. Ageu Costa contribuiu pela Cidade de Fortaleza atuando
            como vereador por muitos anos e, hoje, temos o prazer de continuar
            contribuindo através da nossa Construtora.
          </p>
        </div>
      </div>

      <div className={styles.AchievementsBar}>
        <div>
          <p>2020</p>
          <span>Ano Fundado</span>
        </div>

        <span className={styles.Divider} />

        <div>
          <p>22</p>
          <span>Projetos Completos</span>
        </div>

        <span className={styles.Divider} />

        <div>
          <p>21</p>
          <span>
            Empreitadas <br /> Contratadas
          </span>
        </div>
      </div>
    </div>
  );
};

export default Apresentation;
