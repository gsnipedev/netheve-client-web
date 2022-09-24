import { Avatar, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FollowFunction from "../../Util/Follow/FollowFunction";
import UnfollowFunction from "../../Util/Follow/UnfollowFunction";
import { fetchLocalFollower, fetchLocalFollowing } from "../../Util/Slices/LocalUserDataSlice";
import { fetchFollowerData, fetchFollowingData } from "../../Util/Slices/ProfileSlice";

async function CheckIfMutualism(target, localUserDataFollowing) {
  const array = Array.from(localUserDataFollowing);
  if (array.length < 1) return [false, 0];

  for (let i = 0; i < array.length; i++) {
    if (array[i].right.username === target) {
      return [true, array[i].id];
    }
  }
  return [false, 0];
}

export const FollowerDetailItem = (props) => {
  const localProfileData = useSelector((state) => state.Profiledata);
  const localUserData = useSelector((state) => state.LocalUserData);

  const workingId = useSelector((state) => state.Profiledata.currentWorkingId);
  const dispatch = useDispatch();
  const [buttonVariant, setButtonVariant] = useState("contained");
  const [buttonText, setButtonText] = useState("Follow");
  const [isFollowing, setIsFollowing] = useState(false);
  const [followingId, setFollowingId] = useState(0);
  function ButtonHandle(id) {
    switch (isFollowing) {
      case false:
        FollowFunction(id).then(() => dispatch(fetchLocalFollowing()));
        break;

      default:
        UnfollowFunction(followingId).then(() => dispatch(fetchLocalFollowing()));
        break;
    }
  }

  useEffect(() => {
    CheckIfMutualism(props.username, localUserData.following).then((result) => {
      setIsFollowing(result[0]);
      setFollowingId(result[1]);
    });
  }, [localUserData.following]);

  useEffect(() => {
    if (isFollowing) {
      setButtonText("Unfollow");
      setButtonVariant("outlined");
    } else {
      setButtonText("Follow");
      setButtonVariant("contained");
    }
  }, [isFollowing]);

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar />
        <Typography className="barlow">{props.username}</Typography>
      </Stack>
      <Button
        variant={buttonVariant}
        className="mukta"
        disableElevation
        sx={{ textTransform: "none" }}
        onClick={() => ButtonHandle(props.id)}
      >
        {buttonText}
      </Button>
    </Stack>
  );
};
