import NavegacionExperiencia from "./navegacionExperiencias";
import Experiencia from "./experiencia";
import data from "../data/data.json";
import { Box, Grid, List } from "@mui/material";
import { useState, createRef } from "react";

export default function Experiencias() {
  const experiences = data.experiences;
  const [activeExperience, setActiveExperience] = useState();

  const refs = experiences.reduce((refsObj, experience) => {
    refsObj[experience.shortName] = createRef();
    return refsObj;
  }, {});

  const handleCLick = (shortName) => {
    // console.log("handle click", activeExperience);
    refs[shortName].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <Box id="experience" sx={{ p: 8 }}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={2}>
          <NavegacionExperiencia
            experiences={experiences}
            activeExperience={activeExperience}
            handleListItemClick={handleCLick}
          />
        </Grid>
        <Grid item xs={10}>
          <List
            sx={{
              bgcolor: "background.paper",
              overflow: "auto",
              maxHeight: 850,
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
