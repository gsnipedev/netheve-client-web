import { Close } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Container, Divider, IconButton, Stack } from "@mui/material";

import { useSelector } from "react-redux";
import { FollowingDetailItem } from "./FollowingDetailItem";

const FollowingsDetail = (props) => {
  const data = useSelector((state) => state.Profiledata.following);
  function followingList() {
    const localData = Array.from(data);
    if (Array.from(localData).length < 1) {
      return <center>You Have'nt follows anyone yet</center>;
    }

    const listData = localData.map((data, index) => {
      return <FollowingDetailItem key={data.id} id={data.right.id} username={data.right.username} />;
    });

    return listData;
  }

  return (
    <Container maxWidth="xs">
      <Card sx={{ position: "relative" }}>
        <IconButton sx={{ position: "absolute", right: 5, top: 5 }} onClick={() => props.handle(false)}>
          <Close />
        </IconButton>
        <CardHeader title="Following" />
        <CardContent sx={{ minHeight: 200, maxHeight: 300, overflow: "auto" }}>
          <Stack spacing={2}>{followingList()}</Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FollowingsDetail;
