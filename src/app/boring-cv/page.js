import styles from "./page.module.css";
import { resume } from "@/data/resume-data";
import ProjectCard from "@/components/boring-cv/projects/ProjectCard";
import SkillCard from "@/components/boring-cv/projects/SkillCard";
import Image from "next/image";
const BoringCv = () => {
  return (
    <div className={styles.container}>
      <section className={styles.baseSection}>
        <div className={styles.about}>
          <div className={styles.aboutinfo}>
            <div className={styles.gradientfill}>
              <h2>{resume.personalinfo.name}</h2>
            </div>
            <p className={styles.medtext}>{resume.personalinfo.shortabout}</p>
            <p className={styles.smalltext}>
              {resume.location.city}, {resume.location.country}, {resume.location.timezone}
            </p>
          <div>impl needed - icons live here</div>
          </div>
      
          <div className={styles.aboutimg}>
          <Image src="/selfie.jpg" width={128} height={128}/>
          </div>
        </div>
      </section>
      <section className={styles.baseSection}>
        <h2 className={styles.headingtext}>about</h2>
        <p className={styles.medtext}>{resume.personalinfo.longabout}</p>
      </section>
      <section className={styles.baseSection}>
        <h2 className={styles.headingtext}>experience</h2>
        <p className={styles.medtext}>no work experience yet, but i am working an internship soon!</p>
      </section>

      <section className={styles.baseSection}>
        <h2 className={styles.headingtext}>education</h2>
        <div className={styles.university}>
        <h4 className={styles.largetext}>{resume.education.uni}</h4>
        <p className={`${styles.unidate} ${styles.medtext}`}>{resume.education.date}</p>

        </div>
        <p className={styles.medtext}>{resume.education.field}</p>
      </section>

      <section className={styles.baseSection}>
        <h2 className={styles.headingtext}>skills</h2>
        <div className={styles.skills}>
          {resume.skills.map((skill, index) => (
            <SkillCard key={index} name={skill} />
          ))}
        </div>
      </section>

      <section className={styles.baseSection}>
        <h2 className={styles.headingtext}>projects</h2>
        <div className={styles.projects}>
          {resume.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      <section className={styles.padded}></section>
    </div>
  );
};

export default BoringCv;
