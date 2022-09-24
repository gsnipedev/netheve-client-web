import { Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProfileCard from "../../components/ProfileCard";
import FriendListItem from "./FriendListItem";

const Friends = () => {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={2.5}>
            <ProfileCard />
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
