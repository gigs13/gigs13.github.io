import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
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

    return () => observer.disconnect(); // Clenaup the observer if component unmount.
  }, [activeExperience, setActiveExperience, experience, refs]);

  return (
    <>
      <ListSubheader>
        <ListItem ref={refs[experience.shortName]} id={experience.id}>
          <ListItemIcon>{/* {experience.icon} */}</ListItemIcon>
          <ListItemText>
            <Typography variant="h4" color={activeClass}>
              {experience.company}
            </Typography>
          </ListItemText>
        </ListItem>
      </ListSubheader>
      {experience.jobs.map((job) => (
        <ListItem key={`job-${job.id}`}>
          <ListItemText
            primary={job.title}
            secondary={`${job["start-date"]} - ${
              !experience.active ? job["end-date"] : "Current"
            }`}
          />
          {job.projects.map((project) => (
            <ListItemText
              primary={`${project.title}`}
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  {project.description.map((description) => (
                    <ListItemText>{description}</ListItemText>
                  ))}
                </Typography>
              }
            />
          ))}
        </ListItem>
      ))}
    </>
  );
}
