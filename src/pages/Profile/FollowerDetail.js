import { Close } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Container, Divider, IconButton, Stack } from "@mui/material";

import { useSelector } from "react-redux";
import { FollowerDetailItem } from "./FollowerDetailItem";

const FollowerDetail = (props) => {
  const localProfileFollower = useSelector((state) => state.Profiledata.follower);

  function followerList() {
    const localData = Array.from(localProfileFollower);
    if (Array.from(localData).length < 1) {
      return <center>You Have no Follower</center>;
    }

    const listData = localData.map((data, index) => {
      return <FollowerDetailItem key={index} id={data.left.id} username={data.left.username} />;
    });

    return listData;
  }

  return (
    <Container maxWidth="xs">
      <Card sx={{ position: "relative" }}>
        <IconButton sx={{ position: "absolute", right: 5, top: 5 }} onClick={() => props.handle(false)}>
          <Close />
        </IconButton>
        <CardHeader title="Follower" />
        <CardContent sx={{ minHeight: 200, maxHeight: 300, overflow: "auto" }}>
          <Stack spacing={2}>{followerList()}</Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FollowerDetail;
