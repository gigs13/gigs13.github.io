import NavegacionExperiencia from "./navegacionExperiencias";
import Experiencia from "./experiencia";
import { UserContext } from "../App";
import { Box, Grid, List } from "@mui/material";
import { useContext, useState, useCallback } from "react";

export default function Experiencias() {
  const experiences = useContext(UserContext).experiences;
  const [activeExperience, setActiveExperienceState] = useState(null);

  const setActiveExperience = useCallback((experience) => {
    setActiveExperienceState(experience);
  }, []);

  // Manejamos el click en la navegación para hacer scroll a la experiencia
  const handleClick = (shortName) => {
    const experienceElement = document.getElementById(shortName);

    if (experienceElement) {
      // Agregar un setTimeout para controlar el comportamiento del scroll
      setTimeout(() => {
        experienceElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        // Después del scroll, actualizamos la experiencia activa
        setActiveExperience(shortName);
      }, 300); // Ajusta el retraso a tus necesidades
    }
  };

  return (
    <Box id="experience" sx={{ p: { xs: 2, sm: 4, md: 8 } }}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={4}
          xl={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Centramos verticalmente
            alignItems: "center", // Centramos horizontalmente
          }}
        >
          <NavegacionExperiencia
            experiences={experiences}
            activeExperience={activeExperience}
            handleListItemClick={handleClick}
          />
        </Grid>

        <Grid item xs={12} sm={8} xl={10}>
          <List
            sx={{
              bgcolor: "background.paper",
              overflow: "auto",
              maxHeight: 450,
              p: { xs: 1, sm: 2 },
            }}
            subheader={<li />}
          >
            {experiences.map((experience) => (
              <Experiencia
                key={experience.shortName}
                experience={experience}
                activeExperience={activeExperience}
                setActiveExperience={setActiveExperience}
              />
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
