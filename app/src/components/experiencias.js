import NavegacionExperiencia from "./navegacionExperiencias";
import Experiencia from "./experiencia";
import { Box, Grid } from "@mui/material";

export default function Experiencias() {
  return (
    <Box id="experience">
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <NavegacionExperiencia />
        <Experiencia />
      </Grid>
    </Box>
  );
}
