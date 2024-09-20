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
        height: "100%",
      }}
    >
      {experiences.map((experience) => (
        <ListItem key={experience.shortName} id={experience.shortName}>
          <ListItemButton
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
