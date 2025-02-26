import React from "react";
import styles from "./projectcard.module.css";

// Import images manually
import loan from "../../assets/projects/loan.jpg";
import recaptcha from "../../assets/projects/recaptcha.png";
import portfolio from "../../assets/projects/portfolio.jpg";

// Map image filenames to imported images
// const imageMap = {
//   "projects/loan.png": loan,
//   "projects/recaptcha.png": recaptcha,
//   "projects/portfolio.png": portfolio,
// };

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      {/* <img
        src={imageMap[imageSrc] || loanPredictionImage} // Fallback image
        alt={`Image of ${title}`}
        className={styles.image}
      /> */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      {/* <div className={styles.links}>
        <a href={demo} className={styles.link}>Demo</a>
        <a href={source} className={styles.link}>Source</a>
      </div> */}
    </div>
  );
};