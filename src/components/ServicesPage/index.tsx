import styles from "./style.module.scss";

import architectureIcon from "../../assets/arquitetura.png";

import constructionIcon from "../../assets/construcao.png";

import recuperationIcon from "../../assets/recuperacao.png";

const ServicesPage = () => {
  return (
    <div className={styles.ServicePageContainer}>
      <div className={styles.ServiceApresentation} id="serviceSection">
        <h1>Serviços</h1>
        <p>
          Nossos serviços são focados em toda área da construção civil, como
          projetos de arquitetura e execução de obras. Está incluso em nosso
          portfólio a Recuperação de Estruturas, no qual somos especializados
          nessa área e temos uma grande demanda
        </p>
      </div>

      <div className={styles.ServiceCardsContainer}>
        <div className={styles.CardArchitecture}>
          <img src={architectureIcon} alt="Arquitetura Icone" />

          <h2>Arquitetura</h2>

          <p>
            Colocar o seu SONHO em linhas e cores é o que amamos. Cada um tem
            sua realidade e suas necessidades. O Projeto de Arquitetura surge
            para atendê-las.
          </p>
        </div>

        <div className={styles.CardConstruction}>
          <img src={constructionIcon} alt="Construção Icone" />

          <h2>Construções</h2>

          <p>
            Nosso compromisso é fazer seu SONHO sair do papel e torná-lo
            realidade. Tivemos o prazer em nossa história de construir Casas,
            Postos de Combustíveis e Edifícios. Conte com a nossa experiência.
          </p>
        </div>

        <div className={styles.CardRecuperation}>
          <img src={recuperationIcon} alt="Recuperação Icone" />

          <h2>Recuperação Estrutural</h2>

          <p>
            Identificar e solucionar patologias demanda um extenso conhecimento
            e responsabilidade. Somos especializados nesse serviço. Conheça um
            pouco das estruturas que já recuperamos e nos permita sua confiança.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
