import ProjectCard from "../project-card";

import styles from "../../styles/projects.module.css";

export default function Projects({ projects }) {
  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <hr />
      <ul className={styles.projectsCardUl}>
        {projects.map((project) => (
          <li className={styles.projectsCardLi} key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
