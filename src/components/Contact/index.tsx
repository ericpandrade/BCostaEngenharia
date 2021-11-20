import styles from "./style.module.scss";

const Contact = () => {
  return (
    <div className={styles.ContactContainer} id="contactSection">
      <div className={styles.ContactBox}>
        <h1>Contatos</h1>
        <div>
          <button>
            <a
              href="mailto:eng.bcosta@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="mail.svg" alt="Icone Email" />
              <p>eng.bcosta@gmail.com</p>
            </a>
          </button>
        </div>

        <div>
          <button>
            <a
              href="https://api.whatsapp.com/send?phone=+5585989828188&text=Olá! Gostaria de entrar em contato."
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="phone.svg" alt="Icone Telefone" />
              <p>(85) 9 8775-7467</p>
            </a>
          </button>
        </div>

        <div>
          <button>
            <a
              href="https://www.instagram.com/bcosta.engenharia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="instagram.svg" alt="Icone Instagram" />
              <p>@Bcosta.engenharia</p>
            </a>
          </button>
        </div>
      </div>

      <span className={styles.Divider} />

      <div className={styles.ContactImages}>
        <img src="ContactLogo.png" alt="Logo da Loja com o nome" />
        <div>
          <span>Parceria</span>
          <img src="parceria.png" alt="Logo da Parceria" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
