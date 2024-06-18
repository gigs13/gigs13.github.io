import { useContext } from "react";
import {
  Box,
  Stack,
  Grid,
  Avatar,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { UserContext } from "../App";
import imagen from "../assets/resumePhoto.jpeg";

export default function Resumen() {
  const user = useContext(UserContext);
  return (
    <Grid id="about" container spacing={2}>
      <Grid
        container
        xs={5}
        justifyContent="center"
        alignItems="center"
        columnSpacing={6}
      >
        <Stack>
          <Avatar
            alt={`${user.name} ${user.lastName}`}
            src={imagen}
            sx={{ width: 256, height: 256 }}
          />
          <Typography>
            <h1>
              {user.name}
              <br />
              {user.lastName}
            </h1>
          </Typography>
        </Stack>
      </Grid>
      <Grid container xs={7} justifyContent="center" alignItems="center">
        <Box
          my={4}
          display="flex"
          alignItems="center"
          gap={4}
          p={4}
          sx={{ border: "2px solid grey" }}
        >
          <Typography>
            <span className="bold">Motivated</span> team player with experience
            developing, deploying, and maintaining software solutions.
            Well-versed in using cutting-edge technologies, such as AWS, Python,
            Django, Node.js and React to create powerful solutions.
          </Typography>
        </Box>
        <Grid container xs={6} spacing={2}>
          <List>
            <ListItem>Call</ListItem>
            <ListItem>Mail</ListItem>
            <ListItem>Web</ListItem>
            <ListItem>Home</ListItem>
          </List>

          <List>
            <ListItem>{user.phone}</ListItem>
            <ListItem>{user.mail}</ListItem>
            <ListItem>
              <a href={user.website}>{user.website}</a>
            </ListItem>
            <ListItem>{`${user.city}, ${user.country}`}</ListItem>
          </List>
        </Grid>
        <Grid container xs={6} spacing={2}>
          <List>
            <ListItem>LinkedIn</ListItem>
            <ListItem>Github</ListItem>
          </List>
          <List>
            <ListItem>
              <a href={user.linkedinUrl}>{user.linkedinUser}</a>
            </ListItem>
            <ListItem>
              <a href={user.githubUrl}>{user.githubUser}</a>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
}
