import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ListItemText } from "@mui/material";
import Container from "@mui/material/Container";

import { Link } from "react-router-dom";

import Dashboard from "@mui/icons-material/DashboardCustomizeOutlined";
import History from "@mui/icons-material/ManageHistoryOutlined";
import Home from "@mui/icons-material/CottageOutlined";

const LinkStyle = {
  textDecoration: "none",
  fontWeight: "bold",
  letterSpacing: "1.5px",
  color: "#845EC2",
};

const drawerWidth = 240;
const navItems = [
  { item: "Home", route: "/", icon: <Home /> },
  { item: "History", route: "/history", icon: <History /> },
  { item: "Members", route: "/members", icon: <Dashboard /> },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2, fontFamily: "Alkatra" }}>
          <Link to="/" style={LinkStyle}>
            TODO GODZILLA
          </Link>
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.item} disablePadding>
              <ListItemButton sx={{ textAlign: "center", color: "#845EC2" }}>
                {item.icon}
                <Link
                  to={item.route}
                  style={{
                    textDecoration: "none",
                    letterSpacing: "1.5px",
                    width: "100%",
                    background: "#FEFEDF",
                    fontWeight: "bold",
                    borderRadius: "15px",
                  }}
                >
                  <ListItemText primary={item.item} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "#FBEAFF" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: "#C34A36" }}
          >
            <MenuIcon sx={{ fontSize: "35px" }} />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontFamily: "Alkatra",
              flexGrow: 1,
              textAlign: { xs: "right", md: "left" },
            }}
          >
            <Link to="/" style={LinkStyle}>
              TODO GODZILLA
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.item}
                sx={{ color: "#845EC2", margin: "0px 10px" }}
              >
                <span style={{ margin: "0px 10px 0px 0px" }}>{item.icon}</span>
                <Link style={LinkStyle} to={item.route}>
                  {item.item}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
