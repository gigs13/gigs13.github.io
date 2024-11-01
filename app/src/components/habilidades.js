import { Paper, Typography, Grid, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { motion } from "framer-motion";

export default function Habilidades() {
  const skills = useContext(UserContext).skills;
  const education = useContext(UserContext).education;

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

      {/* Sección de Educación */}
      <Grid item xs={12} xl={6}>
        <Typography variant="h5" color="secondary">
          Education
        </Typography>
        {education.map((entry) => (
          <Grid item key={entry.school}>
            <Typography variant="h6">{entry.degree}</Typography>
            <Typography color="textSecondary">
              {entry.school} • {entry.year}
            </Typography>
            <Typography>{entry.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

// Componente para la barra de progreso con efecto de animación
function SkillProgress({ skill }) {
  const theme = useTheme();
  const [displayedPercentage, setDisplayedPercentage] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          onViewportEnter={() => {
            if (!hasAnimated) {
              const incrementPercentage = (percentage) => {
                let count = 0;
                const interval = setInterval(() => {
                  if (count < percentage) {
                    count++;
                    setDisplayedPercentage(count);
                  } else {
                    clearInterval(interval); // Limpiamos el intervalo cuando se alcanza el porcentaje
                  }
                }, 35);
              };

              incrementPercentage(skill.percentage);
              setHasAnimated(true);
            }
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {`${displayedPercentage}%`} {/* Muestra el porcentaje animado */}
          </Typography>
        </motion.div>
      </Grid>
    </Grid>
  );
}
