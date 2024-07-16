import styles from "./page.module.css";
import Header from "./header/page";
import TopBar from "./topbar/page";
import NavBar from "./navbar/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <TopBar />
      <NavBar />
      <Header />
    </main>
  );
}
