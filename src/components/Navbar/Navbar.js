import { AccountBox, Article, Home, Segment } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Avatar,
  Button,
  Container,
  IconButton,
  InputBase,
  Stack,
  TextField,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import "../../App.css";
import MainTheme from "../MainTheme";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={MainTheme}>
        <AppBar color="secondary" position="relative" sx={{ mb: 4 }}>
          <Container maxWidth="lg">
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Toolbar disableGutters>
                <Typography color={"warning.main"} className="memoirs" sx={{ fontSize: 32, mr: 3 }}>
                  NetHeve
                </Typography>

                <InputBase
                  type="text"
                  className="mukta"
                  placeholder="Search for Something"
                  sx={{
                    borderRadius: 2,
                    pl: 2,
                    pr: 2,
                    fontSize: 16,
                    backgroundColor: "#f4f4f8",

                    "[type=text]:focus": { outline: "1px solid black" },
                  }}
                />
              </Toolbar>
              <Toolbar disableGutters>
                <Tooltip title="Home" arrow sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton className="nav-button" href="/">
                    <Home />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Your Posts" arrow sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton className="nav-button">
                    <Article />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Account" arrow sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton className="nav-button" href="/profile">
                    <AccountBox />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Notifications" arrow sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton className="nav-button" href="/profile">
                    <NotificationsIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Account" arrow sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton className="nav-button">
                    <Segment />
                  </IconButton>
                </Tooltip>
                <Avatar sx={{ width: 32, height: 32, ml: 1 }} />
              </Toolbar>
            </Stack>
          </Container>
        </AppBar>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Navbar;
