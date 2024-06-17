import "./App.css";
import Animacion from "./components/animacion";
import Nombre from "./components/nombre";
import Contacto from "./components/contacto";
import Resumen from "./components/resumen";
import Redes from "./components/redes";
import Experiencia from "./components/experiencia";
import Habilidades from "./components/habilidades";
import Aficiones from "./components/aficiones";

const me = {
  name: "Rodrigo",
  lastName: "Sánchez Isunza",
  phone: "+52 55 4854 1120",
  mail: "rodrigoisunza@gmail.com",
  website: "https://gigs13.github.io/",
  country: "Mexico",
  city: "Mexico City",
  linkedinUser: "rodrigoisunza",
  linkedinUrl: "https://linkedin.com/in/rodrigoisunza",
  githubUser: "gigs13",
  githubUrl: "https://github.com/gigs13",
};

function App() {
  return (
    <html>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js" ></script> */}
      </head>

      <div className="resume-wrapper">
        <section className="profile section-padding">
          {" "}
          {/* Sección de presentación */}
          <Animacion />
          <Nombre user={me} />
          <div className="clearfix"></div>
          <Contacto user={me} />
          <Resumen />
          <Redes user={me} />
        </section>
        <section class="experience section-padding">
          {" "}
          {/* Sección de experiencia */}
          <div class="container">
            <h3 class="experience-title">Experience</h3>
            <Experiencia />
            <Habilidades />
            <Aficiones />
            <div className="clearfix"></div>
          </div>
        </section>
      </div>
    </html>
  );
}

export default App;
