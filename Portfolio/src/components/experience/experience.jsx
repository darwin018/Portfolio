import React from "react";
import styles from "./experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

// Importing skill images
import react from "../../assets/skills/react.png";
import css from "../../assets/skills/css.png";
import html from "../../assets/skills/html.png"
import figma from "../../assets/skills/figma.png"
import java from "../../assets/skills/java.png"
import mongodb from "../../assets/skills/mongodb.png"
import node from "../../assets/skills/node.png"
import express from "../../assets/skills/express.png";
import python from "../../assets/skills/python.png";

// Importing history images
import lgms from "../../assets/history/lgms.jpg";
import sjit from "../../assets/history/SJIT.png";

// Mapping filenames to imported images
const skillImageMap = {
    "html.png": html,
    "css.png": css,
    "react.png": react,
    "node.png": node,
    "java.png": java,
    "mongodb.png": mongodb,
    "figma.png": figma,
    "express.png": express,
    "python.png": python
  };
  

const historyImageMap = {
  "lgms.jpg": lgms,
  "sjit.png": sjit,
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>

        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={skillImageMap[skill.imageSrc]} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={historyImageMap[historyItem.imageSrc]}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        
      </div>
    </section>
  );
};