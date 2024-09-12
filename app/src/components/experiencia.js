import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
  Grid,
} from "@mui/material";
import { useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Experiencia({
  experience,
  activeExperience,
  setActiveExperience,
  refs,
}) {
  const observerOptions = {
    rootMargin: "-50% 33.3% -50% 0%",
    threshold: 0,
  };

  // Usa el custom hook para observar el componente actual
  const [ref, isIntersecting] = useIntersectionObserver(
    observerOptions,
    refs[experience.shortName]
  );

  // Actualiza el estado cuando el elemento esté visible
  useEffect(() => {
    if (isIntersecting && activeExperience !== experience.shortName) {
      setActiveExperience(experience.shortName); // Cambiamos el estado activo basado en el shortName
    }
  }, [
    isIntersecting,
    activeExperience,
    experience.shortName,
    setActiveExperience,
  ]);

  // Aplicar la clase activa basado en el shortName
  const activeClass =
    activeExperience === experience.shortName ? "secondary" : "text.secondary";

  return (
    <>
      <ListSubheader>
        <ListItem ref={refs[experience.shortName]} id={experience.shortName}>
          <ListItemIcon>{/* Icono del trabajo (si lo tienes) */}</ListItemIcon>
          <ListItemText>
            <Typography
              variant="h4"
              color={activeClass}
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
                textAlign: { xs: "center", sm: "left" },
                wordBreak: "break-word", // Previene que el texto se desborde en pantallas pequeñas
              }}
            >
              {experience.company}
            </Typography>
          </ListItemText>
        </ListItem>
      </ListSubheader>

      {experience.jobs.map((job) => (
        <Grid
          container
          sx={{ flexGrow: 1, overflowX: "hidden", marginBottom: 2 }}
          spacing={2}
          key={job.id}
        >
          {/* Título del trabajo */}
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                wordBreak: "break-word",
                fontWeight: "bold",
              }}
            >
              {job.title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.85rem", sm: "1rem", md: "1.15rem" },
                lineHeight: { xs: "1.3", sm: "1.6" },
                wordBreak: "break-word",
                color: "text.secondary",
              }}
            >
              {`${job["start-date"]} - ${
                !experience.active ? job["end-date"] : "Current"
              }`}
            </Typography>
          </Grid>

          {/* Proyectos asociados al trabajo */}
          {job.projects.map((project) => (
            <Grid item xs={12} key={project.id}>
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                      wordBreak: "break-word",
                    }}
                  >
                    {project.title}
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "1rem", md: "1.15rem" },
                      lineHeight: { xs: "1.3", sm: "1.6" },
                      wordBreak: "break-word",
                      color: "text.secondary",
                      whiteSpace: "normal",
                    }}
                  >
                    {project.description.map((description) => (
                      <Typography key={description}>{description}</Typography>
                    ))}
                  </Typography>
                }
              />
            </Grid>
          ))}
        </Grid>
      ))}
    </>
  );
}
