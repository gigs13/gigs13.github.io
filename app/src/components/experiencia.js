import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import data from "../data/data.json";

export default function Experiencia() {
  return (
    <Box>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <List
          sx={{
            bgcolor: "background.paper",
            overflow: "auto",
            maxHeight: 700,
          }}
          subheader={<li />}
        >
          {data.experiences.map((experience) => (
            <li>
              <ListSubheader>
                <ListItem key={`experience-${experience.id}`}>
                  <ListItemIcon>{/* {experience.icon} */}</ListItemIcon>
                  <ListItemText>
                    <Typography variant="h4">{experience.company}</Typography>
                  </ListItemText>
                </ListItem>
              </ListSubheader>
              {experience.jobs.map((job) => (
                <ListItem key={`job-${job.id}`}>
                  <ListItemText
                    primary={job.title}
                    secondary={`${job["start-date"]} - ${
                      !experience.active ? job["end-date"] : "Present"
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
            </li>
          ))}
        </List>
      </Grid>
    </Box>
  );
}
