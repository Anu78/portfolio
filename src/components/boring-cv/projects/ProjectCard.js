import styles from "./projectcard.module.css";

const ProjectCard = ({ project }) => {
  const { title, link, active, desc, highlights } = project;
  return (
    <div className={styles.container}>
      <a href={link} className={`${styles.title} ${active ? styles.active: ""}`}>
        {title}
      </a>

      <p className={styles.desc}>{desc}</p>
      <div className={styles.skillsBox}>
        {highlights.map((highlight, index) => (
          <p key={index}>{highlight}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
