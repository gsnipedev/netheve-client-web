import { MoreHoriz, MoreVert, ThumbDown, ThumbUpOffAltOutlined, ThumbUpOutlined, Verified } from "@mui/icons-material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFypData } from "../../pages/Home/HomeSlice";
import AxiosHttpInstance from "../../Util/Axios";
import MainTheme from "../MainTheme";
import ReplyTextField from "../ReplyTextField";
import Comments from "./Comments";
import { refreshCard } from "./PostCardDataSlice";

const PublicPostCard = (props) => {
  const localPostData = useSelector((state) => state.Home.fypData[props.index]);
  const dispatch = useDispatch();
  const [IsCommentOpen, setCommentOpen] = useState(false);
  const [localLikeId, setLocalLikeId] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const [likeCount, setLikeCount] = useState(likes.length);
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(comments.length);
  const [IsPublicCommentOpen, setPublicCommentOpen] = useState(false);

  function HandleCommentToggleOn() {
    setCommentOpen(!IsCommentOpen);
    setPublicCommentOpen(true);
  }

  const CheckIsThisPostAlreadyLiked = () => {
    AxiosHttpInstance.get(`api/like/check?postId=${localPostData.id}&userId=${localStorage.getItem("user_id")}`).then(
      (response) => {
        const data = response.data.data;
        setIsLiked(data.isLiked);
        setLocalLikeId(data.id);
      }
    );
  };

  function HandleLikesPost() {
    const data = {
      postId: localPostData.id,
      issuerId: localStorage.getItem("user_id"),
    };

    switch (isLiked) {
      case false:
        AxiosHttpInstance.post("api/like", data).then((response) => {
          CheckIsThisPostAlreadyLiked();
          dispatch(fetchFypData());
        });
        break;

      case true:
        AxiosHttpInstance.delete("api/like?id=" + localLikeId).then((response) => {
          CheckIsThisPostAlreadyLiked();
          dispatch(fetchFypData());
        });
        break;
    }
  }
  useEffect(() => {
    CheckIsThisPostAlreadyLiked();
    setLikes(localPostData.likes);
    setComments(localPostData.comments);
  }, []);

  useEffect(() => {
    setLikeCount(likes.length);
  }, [likes]);

  useEffect(() => {
    setCommentCount(comments.length);
  }, [comments]);

  useEffect(() => {
    setComments(localPostData.comments);
    setLikes(localPostData.likes);
  }, [localPostData]);

  useMemo(() => {
    setInterval(() => {
      dispatch(fetchFypData());
    }, 5000);
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={MainTheme}>
        <Card sx={{ mt: 1, boxShadow: 2, position: "relative" }}>
          <MoreVert sx={{ position: "absolute", right: 10, top: 10 }} />
          <CardContent sx={{ paddingBottom: "8px !important" }}>
            <Stack spacing={1}>
              <Grid container spacing={1}>
                <Grid item xs={2} sm={1} md={1.5} lg={1.2}>
                  <Avatar />
                </Grid>
                <Grid item xs={6}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography className="barlow">{localPostData.account.username}</Typography>
                    <Tooltip title="Verified" placement="right" arrow>
                      <Verified
                        sx={{ display: props.IsVerified === true ? "flex" : "none", color: "#009FB7" }}
                        fontSize="small"
                      />
                    </Tooltip>
                  </Stack>
                  <Typography className="uchen" fontSize="small" color="gray">
                    Well-known Programmer
                  </Typography>
                </Grid>
              </Grid>
              <Typography className="mukta" fontSize="12" sx={{ overflowWrap: "break-word" }}>
                {localPostData.textContent}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <ThumbUpIcon sx={{ fontSize: 18 }} color="info" />
                <Typography className="mukta" color="gray">
                  {likeCount}
                </Typography>
                <Typography className="mukta" color="gray">
                  ·
                </Typography>
                <Typography justifySelf="end" fontSize={14}>
                  {commentCount} Comments
                </Typography>
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button variant="text" sx={{ textTransform: "none" }} onClick={HandleLikesPost}>
                  <Stack direction="row" spacing={1}>
                    {isLiked ? <ThumbUpIcon /> : <ThumbUpOutlined />}
                    <Typography className="mukta" sx={{ display: { xs: "none", sm: "flex" } }}>
                      Like
                    </Typography>
                  </Stack>
                </Button>
                <Button
                  variant="text"
                  sx={{ textTransform: "none" }}
                  onClick={() => {
                    HandleCommentToggleOn();
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <ChatBubbleOutlineIcon />
                    <Typography className="mukta" sx={{ display: { xs: "none", sm: "flex" } }}>
                      Comment
                    </Typography>
                  </Stack>
                </Button>
                <Button variant="text" sx={{ textTransform: "none" }}>
                  <Stack direction="row" spacing={1}>
                    <ShareIcon />
                    <Typography className="mukta" sx={{ display: { xs: "none", sm: "flex" } }}>
                      Share
                    </Typography>
                  </Stack>
                </Button>
                <Button variant="text" sx={{ textTransform: "none" }}>
                  <Stack direction="row" spacing={1}>
                    <SendIcon />
                    <Typography className="mukta" sx={{ display: { xs: "none", sm: "flex" } }}>
                      Send
                    </Typography>
                  </Stack>
                </Button>
              </Stack>
              <ReplyTextField ShouldShow={IsCommentOpen} type="comment" postId={localPostData.id} />
              {comments.map((data, index) => {
                return <Comments key={data.id} ShouldShow={IsPublicCommentOpen} data={data} />;
              })}
            </Stack>
          </CardContent>
        </Card>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default PublicPostCard;
