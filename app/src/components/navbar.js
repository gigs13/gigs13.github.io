import { useState, useContext } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavegacionExperiencia from "./navegacionExperiencias";
import { UserContext } from "../App"; // Importamos el contexto

const drawerWidth = 240;
const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

function HideOnScroll({ children, window }) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar({ window }) {
  const { experiences } = useContext(UserContext); // Accedemos al contexto

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeExperience, setActiveExperience] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleListItemClick = (shortName) => {
    // Lógica para seleccionar una experiencia activa y hacer scroll
    const experienceElement = document.getElementById(shortName);
    if (experienceElement) {
      experienceElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    setActiveExperience(shortName); // Actualiza la experiencia activa
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Rodrigo Sánchez Isunza
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
      <Divider />
      {/* Navegación de experiencias */}
      <Typography variant="h6" sx={{ mt: 2 }}>
        Experiencias
      </Typography>
      <NavegacionExperiencia
        experiences={experiences} // Pasamos las experiencias del contexto
        activeExperience={activeExperience}
        handleListItemClick={handleListItemClick} // Actualizamos para usar esta función
      />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HideOnScroll window={window}>
        <AppBar component="nav" color="primary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "left",
                display: { xs: "none", sm: "block" },
              }}
            >
              Rodrigo's Resume
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}>
                  <Button key={item} sx={{ color: "#fff" }}>
                    {item}
                  </Button>
                </a>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Mejor rendimiento en móviles
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography />
      </Box>
    </Box>
  );
}

export default Navbar;
