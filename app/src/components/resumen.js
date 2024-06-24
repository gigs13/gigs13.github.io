import { useContext } from "react";
import {
  Box,
  Stack,
  Grid,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import { ReactComponent as GithubSvg } from "../assets/logo/github-mark.svg";
import SvgIcon from "@mui/material/SvgIcon";
import { UserContext } from "../App";
import imagen from "../assets/resumePhoto.jpeg";

export default function Resumen() {
  const user = useContext(UserContext);
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
            <Typography variant="h3">
              {user.name}
              <br />
              {user.lastName}
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
          <Grid container justifyContent="center">
            <Grid container xs={7} spacing={4} justifyContent="center">
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CallRoundedIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText>{user.phone}</ListItemText>
                </ListItem>
                <ListItemButton component="a" href="#contact">
                  <ListItemIcon>
                    <EmailRoundedIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText>{user.mail}</ListItemText>
                </ListItemButton>
                <ListItemButton component="a" href={user.website}>
                  <ListItemIcon>
                    <LanguageRoundedIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={user.website}
                    primaryTypographyProps={{
                      color: "secondary",
                      fontWeight: "medium",
                      variant: "body2",
                    }}
                  ></ListItemText>
                </ListItemButton>
                <ListItem>
                  <ListItemIcon>
                    <HomeRoundedIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText>{`${user.city}, ${user.country}`}</ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid container xs={5} spacing={2}>
              <List>
                <ListItemButton component="a" href={user.linkedin.url}>
                  <ListItemIcon>
                    <WorkRoundedIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={user.linkedin.user}
                    primaryTypographyProps={{
                      color: "primary",
                      fontWeight: "medium",
                      variant: "body2",
                    }}
                  ></ListItemText>
                </ListItemButton>
                <ListItemButton component="a" href={user.github.url}>
                  <ListItemIcon>
                    <SvgIcon color="secondary">
                      <GithubSvg />
                    </SvgIcon>
                  </ListItemIcon>
                  <ListItemText
                    primary={user.github.user}
                    primaryTypographyProps={{
                      color: "primary",
                      fontWeight: "medium",
                      variant: "body2",
                    }}
                  ></ListItemText>
                </ListItemButton>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
