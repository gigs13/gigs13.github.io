import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

export default function NavegacionExperiencia() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box>
      <Grid
        container
        xs={3}
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <List>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemText primary="Drop Climbing" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemText primary="Santander" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText primary="Abraxas" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemText primary="freelancer.mx" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemText primary="POSiBLE" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
          >
            <ListItemText primary="Intellego" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}
          >
            <ListItemText primary="INTRAVI" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}
          >
            <ListItemText primary="Bosch" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 8}
            onClick={(event) => handleListItemClick(event, 8)}
          >
            <ListItemText primary="LCI" />
          </ListItemButton>
        </List>
      </Grid>
    </Box>
  );
}
