import { Backdrop, Button, CircularProgress, Container, Grid, Stack, Typography } from "@mui/material";
import BioCard from "./BioCard";
import MainCard from "./MainCard";
import ProfileSettingsCard from "./ProfileSettingsCard";
import React, { useContext, useEffect, useState } from "react";
import instance from "../../Util/Axios";
import AxiosHttpInstance from "../../Util/Axios";
import InformationDetail from "./InformationDetail";

const Profile = () => {
  const [fullname, setFullname] = useState("");
  const [displayInfo, setDisplayInfo] = useState("");
  const [biodata, setBiodata] = useState("");
  function getUserData(access_token) {
    AxiosHttpInstance.get(`api/account/${localStorage.getItem("user_id")}`).then((response) => {
      const data = response.data.data.userData;
      setFullname(data.firstname + " " + data.lastname);
    });
  }
  const [showDetailInformation, setShowDetailInformation] = useState(false);
  useEffect(() => {
    getUserData(localStorage.getItem("access_token"));
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <MainCard fullname={fullname} displayInfo={displayInfo} handle={setShowDetailInformation} />
              <BioCard biodata={biodata} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <ProfileSettingsCard />
          </Grid>
        </Grid>
      </Container>
      <Backdrop open={showDetailInformation}>
        <InformationDetail closeHandle={setShowDetailInformation} fullname={fullname} />
      </Backdrop>
    </React.Fragment>
  );
};

export default Profile;
