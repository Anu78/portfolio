import { FaSquareTwitter, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";

import styles from "./iconpack.module.css"


const IconPack = ({ icons }) => {
  const { linkedin, twitter, email, github } = icons;

  const iconSize = 25;

  const linkedinUrl = "https://linkedin.com/in/" + linkedin;
  const twitterUrl = "https://twitter.com/" + twitter;
  const githubUrl = "https://github.com/" + github;
  const emailUrl = "mailto:" + email;

  return (
    <>
      <a target="_blank" rel="noreferrer" href={twitterUrl}><span className={styles.minicon}><FaSquareTwitter size={iconSize}/></span></a>
      <a target="_blank" rel="noreferrer" href={emailUrl}><span className={styles.minicon}><MdEmail size={iconSize}/></span></a>
      <a target="_blank" rel="noreferrer" href={githubUrl}><span className={styles.minicon}><FaGithubSquare size={iconSize}/></span></a>
      <a target="_blank" rel="noreferrer" href={linkedinUrl}><span className={styles.minicon}><FaLinkedin size={iconSize}/></span></a>
    </>
  );
};

export default IconPack;
