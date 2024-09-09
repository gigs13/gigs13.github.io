import { Box, Paper, Typography, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
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
  const [progress, setProgress] = useState(0); // Controlamos el progreso de la barra

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(skill.percentage); // Actualizamos el ancho de la barra después de montar el componente
    }, 500); // Puedes ajustar el tiempo de espera para un efecto más natural

    return () => clearTimeout(timeout); // Limpiamos el timeout al desmontar
  }, [skill.percentage]);

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
          <Box
            sx={{
              width: `${progress}%`,
              height: 10,
              bgcolor: "primary.main",
              transition: "width 2s ease-in-out", // Transición suave
              "&:hover": {
                bgcolor: "primary.dark",
              },
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
