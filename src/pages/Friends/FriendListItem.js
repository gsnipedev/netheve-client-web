import { Avatar, Button, Card, CardContent, IconButton, Stack, Typography, Grid, Tooltip } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { ThemeProvider } from "@emotion/react";
import MainTheme from "../../components/MainTheme";
import { Verified } from "@mui/icons-material";
import React from "react";

const FriendListItem = (props) => {
  const isDonater = props.IsDonater;
  const isVerified = props.IsVerified;
  let Background = "secondary";
  if (isDonater) Background = "linear-gradient(90deg, rgba(195,5,68,1) 36%, rgba(2,139,167,1) 100%)";
  return (
    <React.Fragment>
      <Grid item xs={12} md={6}>
        <ThemeProvider theme={MainTheme}>
          <Card
            sx={{
              background: Background,
              transition: "0.2s",
              ":hover": { cursor: "pointer", filter: "brightness(0.9)" },
              ":active": { transform: "scale(0.98)" },
            }}
          >
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar />
                  <Typography className="barlow" sx={{ color: isDonater === true ? "#fff" : "#000" }}>
                    Nickname
                  </Typography>
                  <Tooltip title="Verified" placement="right" arrow>
                    <Verified
                      style={{ color: isDonater === true ? "#fff" : "#009FB7" }}
                      sx={{ display: isVerified === true ? "flex" : "none" }}
                      fontSize="small"
                    />
                  </Tooltip>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}></Stack>
              </Stack>
            </CardContent>
          </Card>
        </ThemeProvider>
      </Grid>
    </React.Fragment>
  );
};

export default FriendListItem;
