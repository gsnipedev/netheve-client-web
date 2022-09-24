import { Close } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { useSelector } from "react-redux";

const FollowingsDetail = (props) => {
  const data = useSelector((state) => state.LocalUserData.following);
  function followingList() {
    const localData = Array.from(data);
    if (Array.from(localData).length < 1) {
      return <center>You Have'nt follows anyone yet</center>;
    }

    const listData = localData.map((data, index) => {
      return <FollowingDetailItem key={data.id} username={data.right.username} />;
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

function FollowingDetailItem(props) {
  const [buttonText, setButtonText] = useState("Unfollow");
  const [buttonVariant, setButtonVariant] = useState("outlined");
  const [currentAction, setCurrentAction] = useState(true);
  function followHandle() {
    if (currentAction) {
      setButtonText("Follow");
      setButtonVariant("contained");
      setCurrentAction(!currentAction);
    } else {
      setButtonText("Unfollow");
      setButtonVariant("outlined");
      setCurrentAction(!currentAction);
    }
  }
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar />
        <Typography className="barlow">{props.username}</Typography>
      </Stack>
      <Button
        variant={buttonVariant}
        className="mukta"
        sx={{ textTransform: "none", boxShadow: "none" }}
        onClick={followHandle}
      >
        {buttonText}
      </Button>
    </Stack>
  );
}

export default FollowingsDetail;
