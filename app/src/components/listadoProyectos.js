import Proyecto from "./proyecto";
import { UserContext } from "../App";
import { Grid, Typography, Box } from "@mui/material";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function Proyectos() {
  const projects = useContext(UserContext).projects.filter(
    (project) => project.show
  );

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="space-between"
      sx={{ flexGrow: 1, my: 3, py: 2 }}
    >
      <Grid item xs={12}>
        <Box sx={{ flexGrow: 1, ml: 3 }}>
          <Typography variant="h4" color="secondary">
            Projects that inspired my growth
          </Typography>
        </Box>
      </Grid>

      {projects.map((project) => (
        <Grid item mx={1} xs={12} md={4} xl={3} key={project.id}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Proyecto project={project} />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
