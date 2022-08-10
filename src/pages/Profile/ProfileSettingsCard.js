import { Info, Logout, Mail, Password } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import MainTheme from "../../components/MainTheme";

const ProfileSettingsCard = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={MainTheme}>
        <Card>
          <CardContent sx={{ padding: 0 }}>
            <Box marginTop={2} marginLeft={2}>
              <Typography fontSize={18} className="barlow" fontWeight="bold">
                Account Settings
              </Typography>
            </Box>
            <List disablePadding>
              <ListItem disablePadding>
                <ListItemButton className="nav-button">
                  <Stack direction="row" spacing={2}>
                    <Info />
                    <Typography className="mukta ">Personal Informations</Typography>
                  </Stack>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton className="nav-button">
                  <Stack direction="row" spacing={2}>
                    <Mail />
                    <Typography className="mukta ">Email Settings</Typography>
                  </Stack>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton className="nav-button">
                  <Stack direction="row" spacing={2}>
                    <Password />
                    <Typography className="mukta ">Password Settings</Typography>
                  </Stack>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton className="nav-button">
                  <Stack direction="row" spacing={2}>
                    <Logout />
                    <Typography className="mukta ">Logout</Typography>
                  </Stack>
                </ListItemButton>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default ProfileSettingsCard;
