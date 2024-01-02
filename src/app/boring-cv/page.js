import styles from "./page.module.css";
import { resume } from "@/data/resume-data";
import ProjectCard from "@/components/boring-cv/projects/ProjectCard";
import SkillCard from "@/components/boring-cv/projects/SkillCard";
const BoringCv = () => {
  return (
    <div className={styles.container}>
      <section className={styles.baseSection}>
        <div>
          <h2>{resume.personalinfo.name}</h2>
          <p>{resume.personalinfo.shortabout}</p>
          <p>
            {resume.location.city}, {resume.location.country},{" "}
            {resume.location.timezone}
          </p>
          <div>
            impl needed
          </div>
        </div>
        <div>
          <p>place holder for a photo</p>
        </div>
      </section>
      <section className={styles.baseSection}>
        <h2>About</h2>
        <p>
          {resume.personalinfo.longabout}
        </p>
      </section>
      <section className={styles.baseSection}>
        <h2>Work Experience</h2>
        <p>no work experience yet, but i am working an internship soon!</p>
      </section>
      <section className={styles.baseSection}>
        <h2>education</h2>
        <h4>{resume.education.uni}</h4>
        <p>{resume.education.field}</p>
        <p>{resume.education.date}</p>
      </section>
      <section className={styles.baseSection}>
        <h2>skills</h2>
        <div>
            {resume.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill}/>
            ))}
        </div>
      </section>
      <section className={styles.baseSection}>
        <h2>projects</h2>
        {
            resume.projects.map((project, index) => (
                <ProjectCard project={project}/>
            ))
        }
      </section>
    </div>
  );
};

export default BoringCv;
