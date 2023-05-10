import styles from "../styles/NavBar.module.scss";
import Image from "next/image";
import { UilMessage, UilUserCircle } from "@iconscout/react-unicons";
import Link from "next/link";
export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className="navHome">
          <Link href="/">
            <Image src="/logo.png" alt="logo nav" width={48} height={48} />
          </Link>
          <Link href="/">Home</Link>
        </div>

        {/*<ul className={styles.containerNav}>
          <li className={styles.navLinks}>
            <UilUserCircle />
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navLinks}>
            <UilMessage />
            <Link href="/contact">Contact </Link>
          </li>
  </ul>*/}
      </nav>
    </>
  );
}
