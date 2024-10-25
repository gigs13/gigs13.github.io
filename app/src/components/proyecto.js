import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";

export default function Proyecto({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }} // Efecto hover
      whileTap={{ scale: 1.1 }} // Efecto tap para agrandar temporalmente
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
            onClick={() => console.log("GitHub clicked")}
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => console.log("Demo clicked")}
          >
            Demo
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
