import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function NavegacionExperiencia({
  experiences,
  activeExperience,
  handleListItemClick,
}) {
  return (
    <List>
      {experiences.map((experience) => (
        <ListItem key={experience.shortName} id={experience.shortName}>
          <ListItemButton
            selected={activeExperience == experience.id ? true : false}
            onClick={() => handleListItemClick(experience.shortName)}
          >
            <ListItemText primary={experience.shortName} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
