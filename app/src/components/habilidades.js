import { Paper, Typography, Grid, useTheme } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../App";
import { motion } from "framer-motion";

export default function Habilidades() {
  const skills = useContext(UserContext).skills;
  const hobbies = useContext(UserContext).hobbies;

  return (
    <Grid
      id="skills"
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        p: 6,
        my: "auto",
        flexGrow: 1,
      }}
    >
      {/* Sección de Habilidades */}
      <Grid item xs={12} xl={6}>
        <Typography variant="h5" color="secondary">
          Skills that I've honed
        </Typography>
        {skills.map((skill) => (
          <SkillProgress key={skill.id} skill={skill} />
        ))}
      </Grid>

      {/* Sección de Hobbies */}
      <Grid item xs={12} xl={6}>
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

// Componente para la barra de progreso con efecto de animación
function SkillProgress({ skill }) {
  const theme = useTheme();

  return (
    <Grid
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
        <Paper
          sx={{ width: 300, height: 10, borderRadius: 0, overflow: "hidden" }}
          elevation={1}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            whileInView={{ width: `${skill.percentage}%` }}
            style={{
              height: "100%",
              backgroundColor: theme.palette.primary.main,
            }}
          />
        </Paper>
      </Grid>
      <Grid item>
        <Typography variant="body2" color="text.secondary">
          {`${skill.percentage}%`}
        </Typography>
      </Grid>
    </Grid>
  );
}
