import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function NavegacionExperiencia({
  experiences,
  activeExperience,
  handleListItemClick,
}) {
  return (
    <List>
      {experiences.map((experience) => (
        <ListItem key={experience.id} id={experience.id}>
          <ListItemButton
            selected={activeExperience === experience.id ? true : false}
            onClick={() => handleListItemClick(experience.id)}
          >
            <ListItemText primary={experience.shortName} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
