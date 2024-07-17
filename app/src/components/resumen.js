import { useContext } from "react";
import { Box, Stack, Grid, Avatar, Typography, Button } from "@mui/material";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import { UserContext } from "../App";
import imagen from "../assets/resumePhoto.jpeg";
import resume from "../assets/documents/app/src/assets/documents/Rodrigo's Proffesional Resume.pdf";

export default function Resumen() {
  const user = useContext(UserContext);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "Rodrigo's Resume";
    link.href = resume;
    link.click();
  };

  return (
    <Box
      sx={{
        p: 2,
        margin: "auto",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid id="about" container spacing={2}>
        <Grid
          item
          xs={12}
          xl={3}
          justifyContent="center"
          alignItems="center"
          sx={{
            p: 4,
          }}
        >
          <Stack>
            <Avatar
              alt={`${user.name} ${user.lastName}`}
              src={imagen}
              sx={{ width: 256, height: 256 }}
            />
            <Typography variant="h3">
              {user.name}
              <br />
              {user.lastName}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} xl={9} justifyContent="center" alignItems="center">
          <Box
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={4}
            sx={{ border: "2px solid grey", borderRadius: 1 }}
          >
            <Typography variant="h5" align="center">
              <span className="bold">Motivated</span> team player with
              experience developing, deploying, and maintaining software
              solutions. Well-versed in using cutting-edge technologies, such as
              AWS, Python, Django, Node.js and React to create powerful
              solutions.
            </Typography>
          </Box>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ py: 6 }}
          >
            <Button
              variant="contained"
              onClick={handleDownload}
              endIcon={<DownloadForOfflineRoundedIcon />}
            >
              Download CV
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
