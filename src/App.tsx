import Apresentation from "./components/Apresentation";
import Contact from "./components/Contact";
import Header from "./components/Header";
import StartPage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import styles from "./styles/HomePage.module.scss";

function App() {
  return (
    <div className={styles.PrincipalPage}>
      <main>
        <header>
          <Header />
        </header>

        <section>
          <StartPage />
          <ServicesPage />
          <Apresentation />
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
