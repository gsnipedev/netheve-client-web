import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, ButtonBase, Divider, IconButton, Paper, Stack, Typography, InputBase } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import ReplyTextField from "../ReplyTextField";
import Reply from "./Reply";
const Comments = (props) => {
  let [IsCommentOpen, setCommentOpen] = useState(false);

  function HandleCommentToggleOn(props) {
    setCommentOpen(!IsCommentOpen);
  }
  function HandleReplyToggleOn(props) {
    setCommentOpen(true);
  }
  return (
    <React.Fragment>
      <Stack direction="row" spacing={1} display={props.ShouldShow === true ? "flex" : "none"}>
        <Avatar />
        <Container disableGutters>
          <Paper sx={{ p: 1, boxShadow: "none", backgroundColor: "#F4F4F8", position: "relative" }}>
            <Typography className="mukta">{props.commentNickname}</Typography>
            <IconButton size="small" disableRipple sx={{ position: "absolute", top: 0, right: 0 }}>
              <MoreHorizIcon />
            </IconButton>
            <Typography className="ptsans" fontSize={14} sx={{ mt: 1 }}>
              {props.commentText}
            </Typography>
          </Paper>
          <Stack direction="row" spacing={2}>
            <ButtonBase disableRipple className="mukta">
              Like
            </ButtonBase>
            <ButtonBase
              disableRipple
              className="mukta"
              onClick={() => {
                HandleCommentToggleOn();
              }}
            >
              Reply
            </ButtonBase>
          </Stack>
          {/*Ini adalah stack yang berisi komentar dari user*/}
          <Stack spacing={1}>
            <Reply
              replyNickname="User dummy 2"
              replyText="Enim deserunt do non consequat deserunt. Quis adipisicing aliquip dolor culpa qui. Ea sunt deserunt aliquip exercitation officia aliquip aute ullamco mollit cillum aliqua irure deserunt. Commodo in veniam minim consectetur pariatur. Labore nostrud esse adipisicing occaecat qui labore culpa enim elit in laboris fugiat velit et. Reprehenderit id amet ad proident sit tempor sunt sunt nisi cillum cupidatat."
              onClickReply={HandleReplyToggleOn}
            />

            <ReplyTextField ShouldShow={IsCommentOpen} />
          </Stack>
          {/*Akhir dari stack komentar*/}
        </Container>
      </Stack>
    </React.Fragment>
  );
};

export default Comments;
