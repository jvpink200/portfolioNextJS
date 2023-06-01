import styles from "../styles/NavBar.module.scss";
import Image from "next/image";
import { UilMessage, UilUserCircle, UilHome, UilBars } from "@iconscout/react-unicons";
import Link from "next/link";
import { useState } from "react";
export default function NavBar({ active }) {
  let [isShownMenu, setIsShownMenu] = useState(false);
  let handleMenu = () => {
    setIsShownMenu(!isShownMenu);
  } 
  return (
    <nav className={styles.nav}>
      <div className={styles.navHome}>
        <Link href="/">
          <Image src="/logo.png" alt="logo nav" width={48} height={48} />
        </Link>
        <Link href="/">
          <span className={active == "home" ? styles.active : null}>Home</span>
        </Link>
      </div>
      <div className={styles.navMenu} onClick={handleMenu}><UilBars/></div>
      <ul className={isShownMenu == false ? `${styles.containerNav} ${styles.hideMenu}` : `${styles.containerNav} ${styles.showMenu}`}>
        <li className={styles.navLinks}>
        <UilHome />
          <Link href="/">
            <span className={active == "home" ? styles.active : null}>
              Home
            </span>
          </Link>
        </li>
        <li className={styles.navLinks}>
          <UilUserCircle />
          <Link href="/about">
            <span className={active == "aboutActive" ? styles.active : null}>
              About
            </span>
          </Link>
        </li>
        <li className={styles.navLinks}>
          <UilMessage />
          <Link href="/contact">
            <span className={active == "contactActive" ? styles.active : null}>
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
