import React from "react";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/seo";
import Navbar from "./components/navbar";
import Resumen from "./components/resumen";
import Experiencia from "./components/experiencia";
import Habilidades from "./components/habilidades";
import Aficiones from "./components/aficiones";

export const UserContext = React.createContext();

function App() {
  const user = {
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

  return (
    <UserContext.Provider value={user}>
      <HelmetProvider>
        <SEO
          title={`${user.name} ${user.lastName}`}
          description="My resume app created with Facebook library."
          name={`${user.name}'s resume`}
          type="resume"
        />

        <div className="resume-wrapper">
          <Navbar />
          {/* Sección de presentación */}
          <Resumen user={user} />
          <h3 class="experience-title">Experience</h3>
          <Experiencia />
          <Habilidades />
          <Aficiones />
        </div>
      </HelmetProvider>
    </UserContext.Provider>
  );
}

export default App;
