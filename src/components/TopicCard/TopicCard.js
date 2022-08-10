import { Box, Card, CardContent, Container, List, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import Footer from "../Footer";
import MainTheme from "../MainTheme";
import TopicItem from "./TopicItem";

const TopicCard = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={MainTheme}>
        <Container disableGutters sx={{ position: "sticky", top: 20 }}>
          <Card>
            <CardContent sx={{ padding: 0 }}>
              <Box marginTop={2} marginLeft={2}>
                <Typography className="barlow">Topic Recommendation</Typography>
              </Box>
              <List disablePadding>
                <TopicItem />
              </List>
            </CardContent>
          </Card>
          <Footer />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default TopicCard;
