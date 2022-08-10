import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import NewPostForm from "../../components/NewPostForm";
import ProfileCard from "../../components/ProfileCard";
import PublicPostCard from "../../components/PublicPostCard";
import TopicCard from "../../components/TopicCard";
import instance from "../../Util/Axios";

const { Box, Grid, Container, Divider } = require("@mui/material");

const Home = () => {
  function loadData() {
    instance.get(`/userdata?data=${localStorage.getItem("access_token")}`).then((response) => {
      if (response.data.status === false) window.location.href = "/login";
      setNickname(response.data.username);
      setDisplayInfo(response.data.displayInfo);
    });
  }

  useEffect(() => {
    loadData();
  }, []);

  let [nickname, setNickname] = useState("Unknown");
  let [displayInfo, setDisplayInfo] = useState("Unknown");
  return (
    <React.Fragment>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2.5}>
              <ProfileCard nickname={nickname} displayInfo={displayInfo} />
            </Grid>
            <Grid item xs={12} md={6}>
              <NewPostForm />
              <Divider sx={{ mt: 2, fontSize: 14 }} className="mukta" textAlign="left">
                Public Posts
              </Divider>

              <PublicPostCard IsVerified={true} />
              <PublicPostCard IsVerified={false} />
            </Grid>
            <Grid item xs={12} md={3.5}>
              <TopicCard />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
