import { useContext } from "react";
import Animacion from "./animacion";
import Contacto from "./contacto";
import Nombre from "./nombre";
import Redes from "./redes";
import { UserContext } from "../App";

export default function Resumen() {
  const user = useContext(UserContext);
  return (
    <div className="contact-presentation">
      <Animacion />
      <Contacto user={user} />
      <Nombre user={user} />
      <Redes user={user} /> {/* Resumen de presentación */}
      <p>
        <span className="bold">Motivated</span> team player with experience
        developing, deploying, and maintaining software solutions. Well-versed
        in using cutting-edge technologies, such as AWS, Python, Django, Node.js
        and React to create powerful solutions.{" "}
      </p>
    </div>
  );
}
