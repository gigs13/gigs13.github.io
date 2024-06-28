import { useContext } from "react";
import { UserContext } from "../App";
import {
  Grid,
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
import Contacto from "./contacto";

export default function Footer() {
  const user = useContext(UserContext);
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid item sm={6}>
        <Contacto />
      </Grid>
      <Grid item sm={3} justifyContent="center">
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
          <ListItem>
            <ListItemIcon>
              <HomeRoundedIcon color="secondary" />
            </ListItemIcon>
            <ListItemText>{`${user.city}, ${user.country}`}</ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Grid item sm={3}>
        <List>
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
  );
}
