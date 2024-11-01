import { Paper, Typography, Grid, Box, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { motion } from "framer-motion";

export default function Habilidades() {
  const skills = useContext(UserContext).skills;
  const education = useContext(UserContext).education;

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ flexGrow: 1, my: 3, py: 2 }}
    >
      <Grid item ml={3} xs={12} md={6} xl={7}>
        {/* Título y contenido de Habilidades */}
        <Grid item>
          <Box pb={2}>
            <Typography variant="h4" color="secondary">
              Skills that I've honed
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          {skills.map((skill) => (
            <SkillProgress key={skill.id} skill={skill} />
          ))}
        </Grid>
      </Grid>
      <Grid item mx={3} xs={12} md={6} xl={4}>
        {/* Título y contenido de Educación */}
        <Grid item>
          <Box pb={2}>
            <Typography variant="h4" color="secondary">
              Academical Education
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          {education.map((entry) => (
            <Paper
              key={entry.school}
              sx={{ p: 2, backgroundColor: "primary.dark" }}
            >
              <Typography variant="h6" color="text.primary">
                {entry.degree}
              </Typography>
              <Typography color="textSecondary">
                {entry.school} • {entry.year}
              </Typography>
              <Typography>{entry.description}</Typography>
            </Paper>
          ))}
        </Grid>
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
      id="skills"
      container
      spacing={2}
      alignItems="center"
      sx={{
        display: "flex",
        mb: 1,
      }}
    >
      <Grid item xs={3}>
        <Typography>{skill.name}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Paper
          sx={{
            width: "100%",
            height: 10,
            borderRadius: 1,
            overflow: "hidden",
          }}
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
      <Grid item xs={3}>
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
                    clearInterval(interval);
                  }
                }, 35);
              };

              incrementPercentage(skill.percentage);
              setHasAnimated(true);
            }
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {`${displayedPercentage}%`}
          </Typography>
        </motion.div>
      </Grid>
    </Grid>
  );
}
