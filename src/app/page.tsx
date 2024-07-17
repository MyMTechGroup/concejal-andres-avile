import styles from "./page.module.css";
import Header from "./header/page";
import TopBar from "./topbar/page";
import NavBar from "./navbar/page";
import Contacto from "./contacto/page";
import SocialMedia from "./componentes/redes/socialMedia";
import ThankYou from "./componentes/agradecimiento/agradecimiento";

export default function Home() {
  return (
    <main>
      <TopBar />
      <NavBar />
      <Header />
      <SocialMedia />
      <ThankYou />
      <Contacto />
    </main>
  );
}
