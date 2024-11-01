import Proyecto from "./proyecto";
import { UserContext } from "../App";
import { Grid } from "@mui/material";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function Proyectos() {
  const projects = useContext(UserContext).projects.filter(
    (project) => project.show
  );

  return (
    <Grid
      container
      spacing={3}
      justifyContent="space-between"
      sx={{ flexGrow: 1, my: 3, py: 2 }}
    >
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <motion.div
            whileHover={{ scale: 1.05 }} // Efecto de agrandar
            whileTap={{ scale: 0.95 }} // Efecto al hacer click
          >
            <Proyecto project={project} />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
