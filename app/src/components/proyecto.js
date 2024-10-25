import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
  Tooltip,
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
        }}
      >
        <CardHeader
          title={
            <Typography variant="h4" color={"text.secondary"}>
              {project.title}
            </Typography>
          }
          subheader={
            // Tooltip para cada tecnología
            project["tech-stack"].map((tech) => (
              <Tooltip title={tech.category} key={tech.id}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="span"
                  sx={{ mr: 1 }} // Espaciado entre cada tecnología
                >
                  {tech.language}
                </Typography>
              </Tooltip>
            ))
          }
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            startIcon={<GitHubIcon />}
            disabled={!githubLink}
            onClick={() =>
              githubLink &&
              window.open(githubLink["github-repository"], "_blank")
            }
          >
            GitHub
          </Button>
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
