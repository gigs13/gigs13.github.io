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
import { createSvgIcon } from "@mui/material/utils";
import Contacto from "./contacto";

export default function Footer() {
  const user = useContext(UserContext);

  const LinkedInIcon = createSvgIcon(
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="98"
      height="96"
      viewBox="0 0 98 96"
    >
      <path
        d="M0 0 C0.87344055 -0.00525696 1.7468811 -0.01051392 2.64678955 -0.01593018 C5.538145 -0.02914965 8.42895131 -0.02038521 11.3203125 -0.01025391 C13.32666123 -0.01227408 15.33300925 -0.01518505 17.33935547 -0.01895142 C21.54596949 -0.02337741 25.75239253 -0.01693481 29.95898438 -0.00292969 C35.35638633 0.01416229 40.75334079 0.00432259 46.15072632 -0.01364708 C50.29422388 -0.02447745 54.43761499 -0.021042 58.58111572 -0.0132637 C60.5714727 -0.01125963 62.56183929 -0.01372821 64.55218506 -0.02070236 C67.33192618 -0.02830452 70.1109383 -0.01673004 72.890625 0 C74.12972626 -0.00910904 74.12972626 -0.00910904 75.39385986 -0.0184021 C80.9885847 0.04411378 80.9885847 0.04411378 83.15633583 1.67716026 C85.40788419 4.66592792 84.85995037 8.34429917 84.83349609 11.94287109 C84.83875305 12.81631165 84.84401001 13.6897522 84.84942627 14.58966064 C84.86264574 17.48101609 84.8538813 20.3718224 84.84375 23.26318359 C84.84577018 25.26953233 84.84868114 27.27588035 84.85244751 29.28222656 C84.8568735 33.48884059 84.85043091 37.69526362 84.83642578 41.90185547 C84.8193338 47.29925743 84.82917351 52.69621188 84.84714317 58.09359741 C84.85797354 62.23709497 84.85453809 66.38048609 84.8467598 70.52398682 C84.84475572 72.5143438 84.8472243 74.50471038 84.85419846 76.49505615 C84.86180061 79.27479727 84.85022613 82.0538094 84.83349609 84.83349609 C84.83956879 85.6595636 84.84564148 86.4856311 84.85189819 87.33673096 C84.78938231 92.9314558 84.78938231 92.9314558 83.15633583 95.09920692 C80.16756817 97.35075529 76.48919692 96.80282147 72.890625 96.77636719 C71.58046417 96.78425262 71.58046417 96.78425262 70.24383545 96.79229736 C67.35248 96.80551684 64.46167369 96.7967524 61.5703125 96.78662109 C59.56396377 96.78864127 57.55761575 96.79155223 55.55126953 96.7953186 C51.34465551 96.7997446 47.13823247 96.793302 42.93164062 96.77929688 C37.53423867 96.7622049 32.13728421 96.7720446 26.73989868 96.79001427 C22.59640112 96.80084463 18.45301001 96.79740919 14.30950928 96.78963089 C12.3191523 96.78762682 10.32878571 96.7900954 8.33843994 96.79706955 C5.55869882 96.8046717 2.7796867 96.79309723 0 96.77636719 C-0.8260675 96.78243988 -1.65213501 96.78851257 -2.50323486 96.79476929 C-8.0979597 96.73225341 -8.0979597 96.73225341 -10.26571083 95.09920692 C-12.51725919 92.11043927 -11.96932537 88.43206802 -11.94287109 84.83349609 C-11.94812805 83.96005554 -11.95338501 83.08661499 -11.95880127 82.18670654 C-11.97202074 79.29535109 -11.9632563 76.40454479 -11.953125 73.51318359 C-11.95514518 71.50683486 -11.95805614 69.50048684 -11.96182251 67.49414062 C-11.9662485 63.2875266 -11.95980591 59.08110356 -11.94580078 54.87451172 C-11.9287088 49.47710976 -11.93854851 44.08015531 -11.95651817 38.68276978 C-11.96734854 34.53927222 -11.96391309 30.3958811 -11.9561348 26.25238037 C-11.95413072 24.26202339 -11.9565993 22.27165681 -11.96357346 20.28131104 C-11.97117561 17.50156991 -11.95960113 14.72255779 -11.94287109 11.94287109 C-11.94894379 11.11680359 -11.95501648 10.29073608 -11.96127319 9.43963623 C-11.89875731 3.84491139 -11.89875731 3.84491139 -10.26571083 1.67716026 C-7.27694317 -0.5743881 -3.59857192 -0.02645428 0 0 Z M5.6953125 14.38818359 C2.83550683 16.93023307 2.04881239 18.6163093 1.4453125 22.38818359 C2.7611092 26.00662453 3.90507675 27.10632146 7.3203125 28.88818359 C10.43118174 29.64548997 10.43118174 29.64548997 13.1953125 28.38818359 C16.05511817 25.84613411 16.84181261 24.16005789 17.4453125 20.38818359 C16.1295158 16.76974266 14.98554825 15.67004573 11.5703125 13.88818359 C8.45944326 13.13087722 8.45944326 13.13087722 5.6953125 14.38818359 Z M2.4453125 36.38818359 C2.4453125 51.56818359 2.4453125 66.74818359 2.4453125 82.38818359 C7.0653125 82.38818359 11.6853125 82.38818359 16.4453125 82.38818359 C16.4453125 67.20818359 16.4453125 52.02818359 16.4453125 36.38818359 C11.8253125 36.38818359 7.2053125 36.38818359 2.4453125 36.38818359 Z M24.4453125 36.38818359 C24.4453125 51.56818359 24.4453125 66.74818359 24.4453125 82.38818359 C29.0653125 82.38818359 33.6853125 82.38818359 38.4453125 82.38818359 C38.45949219 80.35275391 38.47367188 78.31732422 38.48828125 76.22021484 C38.52306256 74.23767996 38.55802036 72.25514395 38.59790039 70.27270508 C38.62102228 68.90042929 38.63546253 67.5279775 38.64086914 66.15551758 C38.65019915 64.17683889 38.69388269 62.19841735 38.73828125 60.22021484 C38.7539917 59.03145752 38.76970215 57.8427002 38.78588867 56.61791992 C39.63105518 52.47845022 41.16248675 50.97201373 44.4453125 48.38818359 C48.0078125 47.82568359 48.0078125 47.82568359 51.4453125 48.38818359 C54.48949885 50.62659608 55.35102515 51.83409781 55.99121094 55.59619141 C56.0121582 56.83208008 56.03310547 58.06796875 56.0546875 59.34130859 C56.07949188 60.33164093 56.07949188 60.33164093 56.10479736 61.34197998 C56.15319701 63.44080986 56.17462769 65.53891581 56.1953125 67.63818359 C56.22347933 69.06530319 56.25340778 70.49238918 56.28515625 71.91943359 C56.36225899 75.40934706 56.40284057 78.89699128 56.4453125 82.38818359 C61.0653125 82.38818359 65.6853125 82.38818359 70.4453125 82.38818359 C70.49963958 78.09634388 70.53914638 73.80520336 70.5703125 69.51318359 C70.58707031 68.30919922 70.60382813 67.10521484 70.62109375 65.86474609 C70.8064041 51.68381082 70.8064041 51.68381082 64.078125 39.76318359 C59.66996111 36.05104558 55.73237582 36.02599175 50.140625 36.13037109 C45.20548199 36.60242825 41.64238278 38.65826827 38.4453125 42.38818359 C38.1153125 40.40818359 37.7853125 38.42818359 37.4453125 36.38818359 C33.1553125 36.38818359 28.8653125 36.38818359 24.4453125 36.38818359 Z "
        fill="#4CAF50"
        transform="translate(11.5546875,-0.38818359375)"
      />
    </svg>
  );

  const GithubIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="98"
      height="96"
      viewBox="0 0 98 96"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        fill="#4CAF50"
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
        fill="#4CAF50"
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
      <Grid item xs={12} xl={3} justifyContent="center">
        <List>
          <ListItemButton
            component="a"
            href={user.whatsapp.url}
            target="_blank"
          >
            <ListItemIcon>
              <WhatsAppIcon />
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
      <Grid item xs={12} xl={3}>
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
            <ListItemIcon color="secondary">
              <LinkedInIcon color="secondary" />
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
              <GithubIcon color="secondary" fontSize="small" />
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
