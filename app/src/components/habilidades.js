import { Box, Paper, Collapse, Typography, Grid } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../App";

export default function Habilidades() {
  const skills = useContext(UserContext).skills;
  const hobbies = useContext(UserContext).hobbies;

  return (
    <Grid
      id="skills"
      container
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{
        pl: 4,
        pt: 4,
      }}
    >
      <Grid item xs={6}>
        <Typography variant="h5" color="secondary">
          Skills that I've honed
        </Typography>
        {skills.map((skill) => (
          <Grid
            key={skill.id}
            container
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid item>
              <Typography>{skill.name}</Typography>
            </Grid>
            <Grid item>
              <Collapse in={true} timeout={7000} orientation="horizontal">
                <Paper
                  sx={{ width: 300, height: 10, borderRadius: 0 }}
                  elevation={1}
                >
                  <Box
                    sx={{
                      width: `${skill.percentage}%`,
                      height: 10,
                      bgcolor: "primary.main",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    }}
                  />
                </Paper>
              </Collapse>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                color="text.secondary"
              >{`${skill.percentage}%`}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={6} spacing={2}>
        <Typography variant="h5" color="secondary">
          Hobbies
        </Typography>
        {hobbies.map((hobby) => (
          <Grid item key={hobby.name}>
            <Typography>{hobby.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
