import { Box } from "@mui/material";

export default function Habilidades() {
  return (
    <Box id="skills">
      <div className="section-wrapper clearfix">
        {" "}
        {/* Habilidades */}
        <h3 className="section-title">Skills</h3> {/*  YOUR SET OF SKILLS   */}
        <ul>
          <li className="skill-percentage">
            Javascript / NodeJS / React / Angular
          </li>
          <li className="skill-percentage">Python / Django</li>
          <li className="skill-percentage">
            MySQL / PostgreSQL / MongoDB / Redis
          </li>
          <li className="skill-percentage">HTML5 / CSS3 / SASS / Jquery</li>
          <li className="skill-percentage">Docker / Kubernetes</li>
          <li className="skill-percentage">AWS / GCP / Azure</li>
        </ul>
      </div>
      <div className="section-wrapper clearfix">
        {" "}
        {/* Aficiones */}
        <h3 className="section-title">Hobbies</h3>{" "}
        {/* DESCRIPTION OF YOUR HOBBIES */}
        <p>
          Rock Climbing is my favorite hobby just because it is about going out
          and getting to feel and be with nature.
        </p>
        <p>
          I love reading as many books as I can, novels, biographies, fiction,
          self-help and business books.
        </p>
        <p>
          To this date and since I was a little kid I love getting my hands
          dirty and play witch tech. If I can create/program something with my
          hands I am more than pleased.
        </p>
      </div>
    </Box>
  );
}
