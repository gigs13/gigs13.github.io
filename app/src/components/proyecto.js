import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
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
    >
      <Card sx={{ margin: "20px" }}>
        <CardHeader
          title={
            <Typography variant="h4" color={"text.secondary"}>
              {project.title}
            </Typography>
          }
        ></CardHeader>
        <CardContent>
          <Typography variant="body2">{project.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
