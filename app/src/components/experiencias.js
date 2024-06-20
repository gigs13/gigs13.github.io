import NavegacionExperiencia from "./navegacionExperiencias";
import Experiencia from "./experiencia";
import data from "../data/data.json";
import { Box, Grid, List } from "@mui/material";
import { useState, useEffect, createRef } from "react";

export default function Experiencias() {
  const experiences = data.experiences;
  const [activeExperience, setActiveExperience] = useState();

  const [pageHeight, setPageHeight] = useState();

  useEffect(() => {
    setPageHeight(window.innerHeight);
    window.addEventListener("resize", (e) => {
      setTimeout(() => {
        setPageHeight(window.innerHeight);
      }, 300);
    });
  }, []);

  const refs = experiences.reduce((refsObj, experience) => {
    refsObj[experience.id] = createRef();
    return refsObj;
  }, {});

  const handleCLick = (id) => {
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <Box id="experience">
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
                key={experience.id}
                experience={experience}
                activeExperience={activeExperience}
                setActiveExperience={setActiveExperience}
                pageHeight={pageHeight}
                refs={refs}
              />
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
