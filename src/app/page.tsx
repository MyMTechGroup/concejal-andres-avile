import Header from "./header/page";
import TopBar from "./topbar/page";
import NavBar from "./navbar/page";
import Contacto from "./contacto/page";
import SocialMedia from "./componentes/redes/socialMedia";
import ThankYou from "./componentes/agradecimiento/agradecimiento";
import NewsPage from "./noticias-seccion/page";

export default function Home() {
  return (
    <main>
      <TopBar />
      <NavBar />
      <Header />
      <SocialMedia />
      <NewsPage />
      <ThankYou />
      <Contacto />
    </main>
  );
}
