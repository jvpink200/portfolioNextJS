import NavBar from "@/components/NavBar";
import styles from "../styles/About.module.scss";
import Image from "next/image";
import videoGC from "../assets/videoGC.png";
import electricGuitar from "../assets/electricGuitar.png";
import { UilFootball, UilBracketsCurly } from "@iconscout/react-unicons";
export default function About() {
  return (
    <>
      <NavBar active="aboutActive" />
      <section className={styles.about}>
        <div className={styles.info}>
          <p>
            As a tech professional with over 4+ years ranging from having
            experience as a support application analyst to being a
            <span className="developer"> software developer.</span>
          </p>
          <p>
            I have learned to utilize cutting-edge development and techniques
            through the use of React, Next JS, HTML, CSS/SASS,
            Javascript/Typescript.
          </p>
          <p>
            I have also cultivated an impressive skill set from strong debugging
            skills to even photoshop and figma skills.
          </p>
          <p>
            These technical skills allow me to create beautiful, dynamic, and
            responsive websites while writing clean code that is reusable.
          </p>
          <p>
            I thrive in collaborative environments with cross-functional teams
            from designers to software engineers to managers.
          </p>
          <p className={styles.title}>Hobbies:</p>
          <ul className={styles.hobbies}>
            <li>
              Video Games
              <span className={styles.videoGC}>
                <Image src={videoGC} alt="video game controller" />
              </span>
            </li>
            <li>
              Guitar
              <span className={styles.electricGuitar}>
                <Image src={electricGuitar} alt="video game controller" />
              </span>
            </li>
            <li>
              Soccer
              <span className={styles.soccer}><UilFootball /></span>
            </li>
            <li>
              Coding
              <span className={styles.coding}><UilBracketsCurly /></span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
