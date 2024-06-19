import NavegacionExperiencia from "./navegacionExperiencias";
import Experiencia from "./experiencia";
import { Box, Grid } from "@mui/material";

export default function Experiencias() {
  return (
    <Box id="experience">
      <Grid container md={12} direction="row" alignItems="center">
        <NavegacionExperiencia />
        <Experiencia />
      </Grid>
    </Box>
  );
}
