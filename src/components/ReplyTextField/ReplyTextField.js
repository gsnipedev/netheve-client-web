import { Avatar, Button, InputBase, Stack } from "@mui/material";
import React, { useState, useReducer, useContext } from "react";
import { useDispatch } from "react-redux";
import { fetchFypData } from "../../pages/Home/HomeSlice";
import AxiosHttpInstance from "../../Util/Axios";

export default function ReplyTextField(props) {
  let [CommentText, SetCommentText] = useState("");
  const dispatch = useDispatch();

  const HandleSubmitComment = (event) => {
    if (props.type == "comment") {
      const data = {
        postId: props.postId,
        issuerId: localStorage.getItem("user_id"),
        textComment: CommentText,
      };
      if (event.which == "13") {
        SetCommentText("");
        console.log(data);
        AxiosHttpInstance.post("/api/comment", data).then((response) => {
          dispatch(fetchFypData());
        });
        SetCommentText("");
      }
    }

    if (props.type == "replyComment") {
      const data = {
        commentId: props.commentId,
        issuer: localStorage.getItem("user_id"),
        textReply: CommentText,
      };
      if (event.which == "13") {
        SetCommentText("");
        console.log(data);
        AxiosHttpInstance.post("/api/reply", data).then((response) => {
          dispatch(fetchFypData());
        });
      }
    }
  };

  const [borderColor, setBorderColor] = useState("gray");

  return (
    <React.Fragment>
      <Stack direction="row" spacing={1} alignItems="center" display={props.ShouldShow === true ? "flex" : "none"}>
        <Avatar sx={{ alignSelf: "start" }} />
        <InputBase
          className="mukta"
          placeholder="Say Something"
          value={CommentText}
          multiline
          sx={{
            borderBottom: "2px solid",
            pl: 1,
            pr: 0,
            pt: 0.7,
            pb: 0.7,
            fontSize: 14,
            borderColor: borderColor,
            backgroundColor: "#F4F4F8",
          }}
          onFocus={() => setBorderColor("skyblue")}
          onBlur={() => setBorderColor("gray")}
          fullWidth
          onInput={(e) => (e.currentTarget.style.borderColor = "")}
          onChange={(e) => SetCommentText(e.target.value)}
          onKeyDown={(e) => {
            HandleSubmitComment(e);
          }}
        />
      </Stack>
    </React.Fragment>
  );
}
