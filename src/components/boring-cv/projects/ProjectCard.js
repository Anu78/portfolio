import styles from "./projectcard.module.css"

const ProjectCard = ({project}) => {
    const { title, link, active, desc, highlights } = project;
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{desc}</p>
            <div className={styles.skillsBox}>
            { highlights.map((highlight, index) => (
                <p key={index}>{highlight}</p>
            ))}
            </div>

        </div>
    );
}
 
export default ProjectCard;