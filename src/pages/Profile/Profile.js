import { Container, Grid, Stack, Typography } from "@mui/material";
import BioCard from "./BioCard";
import MainCard from "./MainCard";
import ProfileSettingsCard from "./ProfileSettingsCard";
import React, { useEffect, useState } from "react";
import instance from "../../Util/Axios";

const Profile = () => {
  let [fullname, setFullname] = useState("");
  let [displayInfo, setDisplayInfo] = useState("");
  let [biodata, setBiodata] = useState("");
  function getUserData(access_token) {
    instance.get(`/userdata?data=${access_token}`).then((response) => {
      setFullname(response.data.firstname + " " + response.data.lastname);
      setDisplayInfo(response.data.displayInfo);
      setBiodata(response.data.biodata);
    });
  }
  useEffect(() => {
    getUserData(localStorage.getItem("access_token"));
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <MainCard fullname={fullname} displayInfo={displayInfo} />
              <BioCard biodata={biodata} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <ProfileSettingsCard />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
