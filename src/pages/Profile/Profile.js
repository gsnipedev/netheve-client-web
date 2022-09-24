import { Backdrop, Button, CircularProgress, Container, Grid, Stack, Typography } from "@mui/material";
import BioCard from "./BioCard";
import MainCard from "./MainCard";
import ProfileSettingsCard from "./ProfileSettingsCard";
import React, { useEffect, useState } from "react";
import InformationDetail from "./InformationDetail";
import { useDispatch, useSelector } from "react-redux";
import { fetchFollowerData, fetchFollowingData, fetchProfileData, refreshId } from "../../Util/Slices/ProfileSlice";
import FollowingsDetail from "./FollowingsDetail";
import FollowerDetail from "./FollowerDetail";
import { useSearchParams } from "react-router-dom";
import { fetchLocalFollower, fetchLocalFollowing } from "../../Util/Slices/LocalUserDataSlice";

const Profile = () => {
  const localUserData = useSelector((state) => state.LocalUserData);
  const dispatch = useDispatch();
  const [displayInfo, setDisplayInfo] = useState("");
  const [biodata, setBiodata] = useState("");
  const [param, setParam] = useSearchParams();

  const [showDetailInformation, setShowDetailInformation] = useState(false);
  const [showFollowingsDetail, setShowFollowingsDetail] = useState(false);
  const [showFollowerDetail, setShowFollowerDetail] = useState(false);
  useEffect(() => {
    const id = param.get("id") == null ? localStorage.getItem("user_id") : param.get("id");
    console.log("local id: " + id);
    dispatch(fetchLocalFollower());
    dispatch(fetchLocalFollowing());
    dispatch(fetchFollowingData(id));
    dispatch(fetchFollowerData(id));
    dispatch(fetchProfileData(id));
    dispatch(refreshId(id));
  }, []);

  useEffect(() => {
    console.log(localUserData.following);
  }, [localUserData.following]);

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <MainCard
                displayInfo={displayInfo}
                handleInformation={setShowDetailInformation}
                handleFollowings={setShowFollowingsDetail}
                handleFollower={setShowFollowerDetail}
              />
              <BioCard biodata={biodata} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            {param.get("id") === null || param.get("id") == localStorage.getItem("user_id") ? (
              <ProfileSettingsCard />
            ) : null}
          </Grid>
        </Grid>
      </Container>
      <Backdrop open={showDetailInformation}>
        <InformationDetail closeHandle={setShowDetailInformation} />
      </Backdrop>
      <Backdrop open={showFollowingsDetail}>
        <FollowingsDetail handle={setShowFollowingsDetail} />
      </Backdrop>
      <Backdrop open={showFollowerDetail}>
        <FollowerDetail handle={setShowFollowerDetail} />
      </Backdrop>
    </React.Fragment>
  );
};

export default Profile;
