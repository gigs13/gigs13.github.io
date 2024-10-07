import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Grid,
  Box,
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
    rootMargin: "-30% 0px -50% 0px",
    threshold: 0,
  };

  // eslint-disable-next-line no-unused-vars
  const [ref, isIntersecting] = useIntersectionObserver(
    observerOptions,
    refs[experience.shortName]
  );

  // Actualiza el estado solo cuando el elemento esté visible y no esté ya activo
  useEffect(() => {
    if (isIntersecting && activeExperience !== experience.shortName) {
      setActiveExperience(experience.shortName);
    }
    // eslint-disable-next-line
  }, [isIntersecting, experience.shortName]);

  const activeClass =
    activeExperience === experience.shortName ? "secondary" : "text.secondary";

  return (
    <>
      <Box
        component="div"
        sx={{ backgroundColor: "background.paper", padding: "8px 16px" }}
      >
        <ListItem
          ref={refs[experience.shortName]}
          id={experience.shortName}
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <ListItemIcon>{/* Icono del trabajo (si lo tienes) */}</ListItemIcon>
          <ListItemText>
            <Typography
              variant="h4"
              color={activeClass}
              component="span"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
                textAlign: { xs: "center", sm: "left" },
                wordBreak: "break-word",
              }}
            >
              {experience.company}
            </Typography>
          </ListItemText>
        </ListItem>
      </Box>

      {experience.jobs.map((job) => (
        <Grid
          container
          sx={{ flexGrow: 1, overflowX: "hidden", marginBottom: 2 }}
          spacing={2}
          key={job.id}
        >
          <Grid item xs={12}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                wordBreak: "break-word",
                fontWeight: "bold",
              }}
            >
              {job.title}
            </Typography>
            <Typography
              component="div"
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

          {job.projects.map((project) => (
            <Grid item xs={12} key={project.id}>
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    component="span"
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
                    component="span"
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "1rem", md: "1.15rem" },
                      lineHeight: { xs: "1.3", sm: "1.6" },
                      wordBreak: "break-word",
                      color: "text.secondary",
                      whiteSpace: "normal",
                    }}
                  >
                    {project.description.map((description) => (
                      <Typography key={description} component="span">
                        {description}
                      </Typography>
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
