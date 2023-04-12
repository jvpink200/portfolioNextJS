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
      url: "https://scheduler-demo.netlify.app/home",
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
        <Image
          src={`/${card.projectImg}.jpg`}
          width={280}
          height={220}
          alt={card.projectName}
        />
        <p>{card.projectName}</p>
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
