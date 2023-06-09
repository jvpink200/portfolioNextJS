import styles from "../styles/HeroBanner.module.scss";
import Image from "next/image";
import heroBannerMac from "../assets/herobannerv1.jpg";
export default function Herobanner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImg}>
        <Image
          src={heroBannerMac}
          alt="background image"
          priority="true"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.heroBanner}>
        <div className={styles.heroBannerArea}>
          <div className={styles.landingText}>
            <h1 className={styles.subTitle}>Janet Villarreal</h1>
            <p>Front End Software Engineer</p>
            <p>Building unique and creative software solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
