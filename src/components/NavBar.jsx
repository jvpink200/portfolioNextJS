import styles from "../styles/NavBar.module.scss";
import {
  UilMessage,
  UilBriefcaseAlt,
  UilUserCircle,
} from "@iconscout/react-unicons";
import Link from "next/link";
export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <img src="logo.png" className={styles.navLogo} />
        <ul className={styles.containerNav}>
          <li>
            <Link href="/about">
              <div className={styles.navLinks}>
                <div className={styles.navIcon}>
                  <UilUserCircle size="24" />
                </div>
                About
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className={styles.navLinks}>
                <div className={styles.navIcon}>
                  <UilMessage size="24" />
                </div>
                Contact
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
