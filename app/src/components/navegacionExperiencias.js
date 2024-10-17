import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function NavegacionExperiencia({
  experiences,
  activeExperience,
  handleListItemClick,
}) {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {experiences.map((experience) => (
        <ListItem key={experience.shortName} id={`nav-${experience.shortName}`}>
          <ListItemButton
            disableRipple
            selected={activeExperience === experience.shortName}
            onClick={() => handleListItemClick(experience.shortName)}
            sx={{
              textAlign: "center",
            }}
          >
            <ListItemText primary={experience.shortName} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
