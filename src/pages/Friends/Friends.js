import { Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProfileCard from "../../components/ProfileCard";
import FriendListItem from "./FriendListItem";
import instance from "../../Util/Axios";

const Friends = () => {
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
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={2.5}>
            <ProfileCard nickname={nickname} displayInfo={displayInfo} />
          </Grid>
          <Grid item xs={12} md={9.5}>
            <Grid container spacing={1}>
              <FriendListItem IsDonater={true} />
              <FriendListItem IsVerified={true} />
              <FriendListItem IsDonater={true} IsVerified={true} />
              <FriendListItem />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Friends;
