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
        </section>
      </main>
    </div>
  );
}

export default App;
