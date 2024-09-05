import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
  Grid,
} from "@mui/material";
import { useEffect } from "react";

export default function Experiencia({
  experience,
  activeExperience,
  setActiveExperience,
  refs,
}) {
  const activeClass =
    activeExperience === experience.id ? "secondary" : "text.secondary";

  useEffect(() => {
    const observerConfig = {
      rootMargin: "-50% 33.3% -50% 0%",
      threshold: 0,
    };
    const handleIntersection = function (entries) {
      entries.forEach((entry) => {
        if (entry.target.id !== activeExperience && entry.isIntersecting) {
          setActiveExperience(Number(entry.target.id));
        }
      });
    };
    const observer = new IntersectionObserver(
      handleIntersection,
      observerConfig
    );
    observer.observe(refs[experience.shortName].current);

    return () => observer.disconnect(); // Cleanup the observer if component unmounts.
  }, [activeExperience, setActiveExperience, experience, refs]);

  return (
    <>
      <ListSubheader>
        <ListItem ref={refs[experience.shortName]} id={experience.id}>
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
          sx={{ flexGrow: 1, overflowX: "hidden", marginBottom: 2 }} // Añade un margen inferior entre cada trabajo
          spacing={2} // Añade espacio entre elementos
          key={job.id}
        >
          {/* Título del trabajo */}
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                wordBreak: "break-word", // Rompe palabras largas
                fontWeight: "bold", // Asegura que se destaque el título del trabajo
              }}
            >
              {job.title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.85rem", sm: "1rem", md: "1.15rem" },
                lineHeight: { xs: "1.3", sm: "1.6" }, // Espaciado entre líneas
                wordBreak: "break-word", // Rompe palabras largas en la descripción
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
                      wordBreak: "break-word", // Asegura que el título no se desborde
                    }}
                  >
                    {project.title}
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "1rem", md: "1.15rem" },
                      lineHeight: { xs: "1.3", sm: "1.6" }, // Espaciado entre líneas
                      wordBreak: "break-word", // Rompe palabras largas
                      color: "text.secondary",
                      whiteSpace: "normal", // Asegura que el texto no se mantenga en una sola línea
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
