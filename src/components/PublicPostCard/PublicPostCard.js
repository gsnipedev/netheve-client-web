import { Verified } from "@mui/icons-material";
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
import React, { useState } from "react";
import MainTheme from "../MainTheme";
import ReplyTextField from "../ReplyTextField";
import Comments from "./Comments";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const PublicPostCard = (props) => {
  let [IsCommentOpen, setCommentOpen] = useState(false);
  let [IsPublicCommentOpen, setPublicCommentOpen] = useState(false);
  function HandleCommentToggleOn() {
    setCommentOpen(!IsCommentOpen);
    setPublicCommentOpen(true);
  }
  const isVerified = props.IsVerified;
  return (
    <React.Fragment>
      <ThemeProvider theme={MainTheme}>
        <Card sx={{ mt: 1, boxShadow: 2 }}>
          <CardContent sx={{ paddingBottom: "8px !important" }}>
            <Stack spacing={1}>
              <Grid container spacing={1}>
                <Grid item xs={2} sm={1} md={1.5} lg={1.2}>
                  <Avatar />
                </Grid>
                <Grid item xs={6}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography className="barlow">Nickname</Typography>
                    <Tooltip title="Verified" placement="right" arrow>
                      <Verified
                        sx={{ display: isVerified === true ? "flex" : "none", color: "#009FB7" }}
                        fontSize="small"
                      />
                    </Tooltip>
                  </Stack>
                  <Typography className="uchen" fontSize="small" color="gray">
                    Well-known Programmer
                  </Typography>
                </Grid>
              </Grid>
              <Typography className="mukta" fontSize="12">
                bro hayuk mabar bro
              </Typography>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <ThumbUpIcon sx={{ fontSize: 18 }} color="info" />
                <Typography className="mukta" color="gray">
                  15k
                </Typography>
                <Typography className="mukta" color="gray">
                  ·
                </Typography>
                <Typography justifySelf="end" fontSize={14}>
                  15k Comments
                </Typography>
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button variant="text" sx={{ textTransform: "none" }}>
                  <Stack direction="row" spacing={1}>
                    <ThumbUpOffAltIcon />
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
              <ReplyTextField ShouldShow={IsCommentOpen} />
              <Comments commentNickname="User Dummy 1" commentText="Wot defok?" ShouldShow={IsPublicCommentOpen} />
            </Stack>
          </CardContent>
        </Card>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default PublicPostCard;
