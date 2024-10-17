import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";

export default function Experiencia({
  experience,
  activeExperience,
  setActiveExperience,
}) {
  const activeClass =
    activeExperience === experience.shortName ? "secondary" : "text.secondary";

  return (
    <motion.div
      id={experience.shortName}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.5 }}
      onViewportEnter={() => setActiveExperience(experience.shortName)}
    >
      <Card
        sx={{
          backgroundColor: "background.paper",
          marginBottom: 3,
          borderRadius: 2,
          boxShadow: 3,
          padding: 2,
        }}
      >
        {/* Titulo de la compañía */}
        <CardHeader
          avatar={<ListItemIcon>{/* Icono del trabajo */}</ListItemIcon>}
          title={
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
          }
        />

        <CardContent>
          {experience.jobs.map((job, index) => (
            <Grid
              container
              sx={{
                flexGrow: 1,
                overflowX: "hidden",
                marginBottom: 2,
                borderBottom:
                  experience.jobs.length > 1 &&
                  index !== experience.jobs.length - 1
                    ? "1px solid rgba(255,255,255,0.12)"
                    : "none",
                paddingBottom: 2,
              }}
              spacing={2}
              key={job.id}
            >
              <Grid item xs={12}>
                {/* Título de la posición */}
                <ListItemText
                  primary={
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
                  }
                />
                {/* Fechas del trabajo */}
                <ListItemText
                  secondary={
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
                  }
                />
              </Grid>

              {/* Divider para mayor claridad entre secciones */}
              <Divider sx={{ marginY: 2 }} />

              {job.projects.map((project) => (
                <Grid item xs={12} key={project.id}>
                  {/* Título del proyecto */}
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" }, // Más pequeño que el título de la posición
                          wordBreak: "break-word",
                        }}
                      >
                        {project.title}
                      </Typography>
                    }
                  />
                  {/* Descripción del proyecto */}
                  <ListItemText
                    secondary={
                      <Typography
                        component="span"
                        sx={{
                          fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" },
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
        </CardContent>
      </Card>
    </motion.div>
  );
}
