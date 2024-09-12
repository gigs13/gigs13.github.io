import NavegacionExperiencia from "./navegacionExperiencias";
import Experiencia from "./experiencia";
import { UserContext } from "../App";
import { Box, Grid, List } from "@mui/material";
import { useContext, useState, createRef } from "react";

export default function Experiencias() {
  const experiences = useContext(UserContext).experiences;
  const [activeExperience, setActiveExperience] = useState(null);

  // Crear refs para cada experiencia basados en el shortName
  const refs = experiences.reduce((refsObj, experience) => {
    refsObj[experience.shortName] = createRef();
    return refsObj;
  }, {});

  // Manejar el click en la navegación para hacer scroll a la experiencia
  const handleClick = (shortName) => {
    if (refs[shortName]?.current) {
      refs[shortName].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setActiveExperience(shortName); // Actualizar la experiencia activa
    }
  };

  return (
    <Box id="experience" sx={{ p: { xs: 2, sm: 4, md: 8 } }}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={4} xl={2}>
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
              maxHeight: 850,
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
                refs={refs}
              />
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
