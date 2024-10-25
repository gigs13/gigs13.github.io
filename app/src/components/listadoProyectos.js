import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import Proyecto from "./proyecto";
import { UserContext } from "../App";
import { useContext } from "react";

export default function Proyectos() {
  const projects = useContext(UserContext).projects;

  return (
    <Grid container spacing={2}>
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
