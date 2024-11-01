import NavegacionExperiencia from "./navegacionExperiencias";
import Experiencia from "./experiencia";
import { UserContext } from "../App";
import { Box, Grid, List, Typography, useMediaQuery } from "@mui/material";
import { useContext, useState, useCallback } from "react";

export default function Experiencias() {
  const experiences = useContext(UserContext).experiences;
  const [activeExperience, setActiveExperienceState] = useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const setActiveExperience = useCallback((experience) => {
    setActiveExperienceState(experience);
  }, []);

  // Manejamos el click en la navegación para hacer scroll a la experiencia
  const handleClick = (shortName) => {
    const experienceElement = document.getElementById(shortName);
    if (experienceElement) {
      experienceElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setActiveExperience(shortName);
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
        <Grid item xs={12}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" color="secondary">
              My professional journey
            </Typography>
          </Box>
        </Grid>

        {!isMobile && (
          <Grid
            item
            xs={12}
            sm={4}
            xl={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <NavegacionExperiencia
              experiences={experiences}
              activeExperience={activeExperience}
              handleListItemClick={handleClick}
            />
          </Grid>
        )}

        <Grid item xs={12} sm={isMobile ? 12 : 8} xl={10}>
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
              />
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
