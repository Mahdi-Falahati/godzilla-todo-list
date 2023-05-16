import { Avatar } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import sx from "./Card.module.css";

export default function MemberCardInfo({
  name,
  age,
  language,
  skills,
  tasks,
  likedin,
  github,
}) {
  return (
    <section id={sx.MemberCardInfo}>
      <div className={sx.card}>
        <section className={sx.avatar}>
          <Avatar src="/broken-image.jpg" />
          <span className={sx.name}>{name}</span>
        </section>
        <section className={sx.content}>
          <div>
            <span className={sx.item}>
              <LinkedInIcon sx={{ marginRight: "5px" }} color="primary" /> User
              Name : {likedin}
            </span>
            <span className={sx.item}>
              <GitHubIcon sx={{ marginRight: "5px" }} /> User Name : {github}
            </span>
          </div>
          <div>
          <span className={sx.item}>Age : {age}</span>
          <span className={sx.item}>Language : {language}</span>
          </div>
          <ul className={sx.item}>
            <span className={sx.skillHeader}>Skills :</span>
            {skills?.map((skill, index) => (
              <li className={sx.skill} key={index}>
                {skill}
              </li>
            ))}
          </ul>

          <ul className={sx.item}>
            <li className={sx.taskHeader}>Tasks :</li>
            {tasks?.map((skill, index) => (
              <li className={sx.task} key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
