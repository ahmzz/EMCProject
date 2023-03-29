import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, ClickAwayListener, styled } from "@mui/material";
import routes from "../../utils/routes";
import ClearIcon from "@mui/icons-material/Clear";
import CustomizedMenus from "../common/CustomDropDownNav.js";
import { NavLink } from "react-router-dom";
import ExpandableNav from "../common/ExpandableNav";
import Logo from "../../assets/logo.png";

function DrawerAppBar(props) {
  const StyledDrawer = styled((props) => <Drawer {...props} />)(
    ({ theme }) => ({
      "& .MuiPaper-root": { top: "80px !important" }
    })
  );

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", position: "relative" }}
    >
      <List>
        {routes.map((item) => {
          return !item.children ? (
            <NavLink className="text-primary " to={item.path}>
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ) : (
            <ExpandableNav name={item.name} menu={item.children} />
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* mostly Desktop */}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: "rgba(255,255,255,1)" }}>
          <Toolbar>
            <Box
              sx={{
                width: "60%",
                "@media screen and (max-width:768px)": { width: "80%" }
              }}
            >
              <Box
                sx={{
                  width: "7rem",
                  borderRadius: "0.25rem",
                  overflow: "hidden",
                  "@media screen and (max-width:768px)": { width: "5rem" }
                }}
              >
                <img src={Logo} />
              </Box>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
                position: "absolute",
                right: "10px"
              }}
            >
              {!mobileOpen ? <MenuIcon /> : <ClearIcon />}
            </IconButton>
            <Box
              sx={{ width: "70%", display: "flex", justifyContent: "flex-end" }}
            >
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "flex-around",
                  width: "70%"
                }}
              >
                {routes.map((item) => {
                  return !item.children ? (
                    <NavLink
                      style={{ textDecoration: "none", marginRight: "5rem" }}
                      to={item.path}

                    >
                      <Button
                        className="footer-link"
                        key={item.name}
                        sx={{
                          color: "primary",
                          fontSize: "16px",
                          fontWeight: "bold"
                        }}
                      >
                        {item.name}
                      </Button>
                    </NavLink>
                  ) : (
                    <CustomizedMenus
                      menuItems={item.children}
                      name={item.name}
                    />
                  );
                })}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Mobile */}
      <Box component="nav">
        <ClickAwayListener>
          <StyledDrawer
            hideBackdrop={true}
            anchor="top"
            container={container}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            variant="persistent"
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" }
            }}
          >
            {drawer}
          </StyledDrawer>
        </ClickAwayListener>
      </Box>
    </>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default DrawerAppBar;
