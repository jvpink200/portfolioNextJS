import Link from "next/link";
import styles from "../styles/Projects.module.scss";
import Image from "next/image";
export default function Projects() {
  let projects = [
    {
      id: 1,
      projectName: "Perfect Roommate Finder",
      projectImg: "roommates",
      url: "https://perfectroommate.netlify.app/",
    },

    {
      id: 2,
      projectName: "Automated Scheduler",
      projectImg: "scheduler",
      url: "https://scheduler-demo.netlify.app/",
    },
    {
      id: 3,
      projectName: "Dog Adoption Search",
      projectImg: "dogadoption",
      url: "https://aeroswift.netlify.app/",
    },
  ];
  let projectCard = projects.map((card) => {
    return (
      <div className={styles.card} key={card.id}>
        <Link href={card.url}>
          <Image
            src={`/${card.projectImg}.jpg`}
            width={280}
            height={220}
            alt={card.projectName}
          />
        </Link>
        <div className={styles.outline}>
          <Link href={card.url}>
            <p>{card.projectName}</p>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <section className={styles.projects}>
      <p className={styles.title}>Projects</p>
      <div className={styles.projectCards}>{projectCard}</div>
    </section>
  );
}
