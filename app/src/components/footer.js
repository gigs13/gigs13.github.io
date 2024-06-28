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
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import { createSvgIcon } from "@mui/material/utils";
import Contacto from "./contacto";

export default function Footer() {
  const user = useContext(UserContext);

  const GithubIcon = createSvgIcon(
    <svg width="98" height="96" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        fill="#fff"
      />
    </svg>
  );
  const WhatsAppIcon = createSvgIcon(
    <svg
      width="360"
      height="362"
      viewBox="0 0 360 362"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M307.546 52.5655C273.709 18.685 228.706 0.0171895 180.756 0C81.951 0 1.53846 80.404 1.50408 179.235C1.48689 210.829 9.74646 241.667 25.4319 268.844L0 361.736L95.0236 336.811C121.203 351.096 150.683 358.616 180.679 358.625H180.756C279.544 358.625 359.966 278.212 360 179.381C360.017 131.483 341.392 86.4547 307.546 52.5741V52.5655ZM180.756 328.354H180.696C153.966 328.346 127.744 321.16 104.865 307.589L99.4242 304.358L43.034 319.149L58.0834 264.168L54.5423 258.53C39.6304 234.809 31.749 207.391 31.7662 179.244C31.8006 97.1036 98.6334 30.2707 180.817 30.2707C220.61 30.2879 258.015 45.8015 286.145 73.9665C314.276 102.123 329.755 139.562 329.738 179.364C329.703 261.513 262.871 328.346 180.756 328.346V328.354ZM262.475 216.777C257.997 214.534 235.978 203.704 231.869 202.209C227.761 200.713 224.779 199.966 221.796 204.452C218.814 208.939 210.228 219.029 207.615 222.011C205.002 225.002 202.389 225.372 197.911 223.128C193.434 220.885 179.003 216.158 161.891 200.902C148.578 189.024 139.587 174.362 136.975 169.875C134.362 165.389 136.7 162.965 138.934 160.739C140.945 158.728 143.412 155.505 145.655 152.892C147.899 150.279 148.638 148.406 150.133 145.423C151.629 142.432 150.881 139.82 149.764 137.576C148.646 135.333 139.691 113.287 135.952 104.323C132.316 95.5909 128.621 96.777 125.879 96.6309C123.266 96.5019 120.284 96.4762 117.293 96.4762C114.302 96.4762 109.454 97.5935 105.346 102.08C101.238 106.566 89.6691 117.404 89.6691 139.441C89.6691 161.478 105.716 182.785 107.959 185.776C110.202 188.767 139.544 234.001 184.469 253.408C195.153 258.023 203.498 260.782 210.004 262.845C220.731 266.257 230.494 265.776 238.212 264.624C246.816 263.335 264.71 253.786 268.44 243.326C272.17 232.866 272.17 223.893 271.053 222.028C269.936 220.163 266.945 219.037 262.467 216.794L262.475 216.777Z"
        fill="#25D366"
      />
    </svg>
  );

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
          <ListItemButton
            component="a"
            href={user.whatsapp.url}
            target="_blank"
          >
            <ListItemIcon>
              <WhatsAppIcon color="secondary" />
            </ListItemIcon>
            <ListItemText>Chat with me {user.whatsapp.user}</ListItemText>
          </ListItemButton>
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
          <ListItemButton component="a" href={user.website} target="_blank">
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
          <ListItemButton
            component="a"
            href={user.linkedin.url}
            target="_blank"
          >
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
          <ListItemButton component="a" href={user.github.url} target="_blank">
            <ListItemIcon>
              <GithubIcon color="secondary" />
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
