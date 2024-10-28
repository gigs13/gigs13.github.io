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
        }}
      >
        <CardHeader
          title={
            <Typography variant="h4" color={"text.secondary"}>
              {project.title}
            </Typography>
          }
          subheader={project["tech-stack"].map((tech) => (
            <Tooltip title={tech.category} key={tech.id} arrow>
              <Chip
                label={tech.language}
                color="secondary"
                variant="outlined"
                sx={{ mr: 1, mb: 1 }}
              />
            </Tooltip>
          ))}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Tooltip title="GitHub" arrow>
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
          </Tooltip>

          <Tooltip title="Demo" arrow>
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
          </Tooltip>
        </CardActions>
      </Card>
    </motion.div>
  );
}
