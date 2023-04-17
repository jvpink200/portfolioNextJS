import styles from "../styles/NavBar.module.scss";
import { UilMessage, UilUserCircle } from "@iconscout/react-unicons";
import Link from "next/link";
export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <img src="logo.png" className={styles.navLogo} />
        <ul className={styles.containerNav}></ul>
      </nav>
    </>
  );
}
