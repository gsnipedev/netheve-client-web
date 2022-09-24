import React, { createContext, useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewPostForm from "../../components/NewPostForm";
import ProfileCard from "../../components/ProfileCard";
import PublicPostCard from "../../components/PublicPostCard";
import TopicCard from "../../components/TopicCard";
import { fetchFypData, updateHomeState } from "./HomeSlice";

const { Box, Grid, Container, Divider, Button } = require("@mui/material");

const Home = () => {
  const fypData = useSelector((state) => state.Home.fypData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFypData());
  }, []);

  let Posts = fypData.map((data, index) => {
    return <PublicPostCard IsVerified={true} key={data.id} id={data.id} index={index} />;
  });

  return (
    <React.Fragment>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2.5}>
              <ProfileCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <NewPostForm />
              <Divider sx={{ mt: 2, fontSize: 14 }} className="mukta" textAlign="left">
                Public Posts
              </Divider>
              {Posts}
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
