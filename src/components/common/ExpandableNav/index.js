import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";
import React from "react";

const ExpandableNav = ({ menu, name }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <ListItem
        key={name}
        disablePadding
        onClick={() => {
          setOpen(!open);
        }}
        className="text-primary"
      >
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menu.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default ExpandableNav;
