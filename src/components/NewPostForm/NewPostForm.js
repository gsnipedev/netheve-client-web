import { Avatar, Button, Card, CardContent, Stack, ThemeProvider, Typography, Backdrop } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import React, { useState } from "react";
import MainTheme from "../MainTheme";

const NewPostForm = () => {
  let [ShouldOpenBackdrop, setShouldOpenBackdrop] = useState(false);

  return (
    <React.Fragment>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={ShouldOpenBackdrop}
        onMouseUp={() => setShouldOpenBackdrop(false)}
      >
        <Avatar />
      </Backdrop>
      <ThemeProvider theme={MainTheme}>
        <Card sx={{ boxShadow: 2 }}>
          <CardContent>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ height: 52, width: 52 }} />
                <Button
                  variant="outlined"
                  className="barlow"
                  fullWidth
                  onClick={() => setShouldOpenBackdrop(true)}
                  sx={{ textTransform: "none", borderRadius: 10, backgroundColor: "#EAEAEA", justifyContent: "start" }}
                >
                  Post Something
                </Button>
              </Stack>
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Button variant="text" sx={{ textTransform: "none" }}>
                  <Stack direction="row" spacing={1}>
                    <InsertPhotoIcon sx={{ color: "#51BBFE" }} />
                    <Typography className="barlow" sx={{ display: { xs: "none", sm: "flex" } }}>
                      Image
                    </Typography>
                  </Stack>
                </Button>
                <Button variant="text" sx={{ textTransform: "none" }}>
                  <Stack direction="row" spacing={1}>
                    <SmartDisplayIcon sx={{ color: "crimson" }} />
                    <Typography className="barlow" sx={{ display: { xs: "none", sm: "flex" } }}>
                      Video
                    </Typography>
                  </Stack>
                </Button>
                <Button variant="text" sx={{ textTransform: "none" }}>
                  <Stack direction="row" spacing={1}>
                    <EventIcon sx={{ color: "orange" }} />
                    <Typography className="barlow" sx={{ display: { xs: "none", sm: "flex" } }}>
                      Event
                    </Typography>
                  </Stack>
                </Button>
                <Button variant="text" sx={{ textTransform: "none" }}>
                  <Stack direction="row" spacing={1}>
                    <NewspaperIcon sx={{ color: "#51BBFE" }} />
                    <Typography className="barlow" sx={{ display: { xs: "none", sm: "flex" } }}>
                      Article
                    </Typography>
                  </Stack>
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default NewPostForm;
