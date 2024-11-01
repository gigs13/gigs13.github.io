import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
  Tooltip,
  Chip,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion } from "framer-motion";

export default function Proyecto({ project }) {
  const githubLink = project.links.find((link) => link["github-repository"]);
  const demoLink = project.links.find((link) => link.url);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.1 }}
    >
      <Card
        elevation={3}
        sx={{
          maxWidth: 500,
          margin: "auto",
          transition: "0.3s",
          padding: 1,
        }}
      >
        <CardHeader
          title={
            <Typography variant="h5" color={"text.secondary"}>
              {project.title}
            </Typography>
          }
          subheader={project["tech-stack"].map((tech) => (
            <Tooltip
              title={`${tech.category} ${
                tech.frameworks.length > 0
                  ? `- Frameworks: ${tech.frameworks.join(", ")}`
                  : ""
              }`}
              key={`${project.id}-${tech.category}`}
              arrow
            >
              <Chip
                label={tech.language}
                color="secondary"
                variant="outlined"
                sx={{ mr: 1 }}
              />
            </Tooltip>
          ))}
        />

        <CardContent>
          {project.description.map((desc, index) => (
            <Typography variant="body2" color="text.secondary" key={index}>
              {desc}
            </Typography>
          ))}
        </CardContent>

        <CardActions>
          <IconButton
            color="secondary"
            disabled={!githubLink}
            onClick={() =>
              githubLink &&
              window.open(githubLink["github-repository"], "_blank")
            }
          >
            <GitHubIcon />
          </IconButton>

          <Button
            variant="contained"
            size="small"
            color="secondary"
            startIcon={<OpenInNewIcon />}
            disabled={!demoLink}
            onClick={() => demoLink && window.open(demoLink.url, "_blank")}
          >
            Demo
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
