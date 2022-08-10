import { Avatar, InputBase, Stack } from "@mui/material";
import React, { useState } from "react";

const ReplyTextField = (props) => {
  let [CommentText, SetCommentText] = useState("");
  const HandleSubmitComment = (event) => {
    if (event.key === "Enter") {
      SetCommentText("");
      console.log(CommentText);
    }
  };
  return (
    <React.Fragment>
      <Stack direction="row" spacing={1} alignItems="center" display={props.ShouldShow === true ? "flex" : "none"}>
        <Avatar sx={{ alignSelf: "start" }} />
        <InputBase
          className="mukta"
          placeholder="Say Something"
          value={CommentText}
          sx={{ border: "2px solid gray", borderRadius: 5, pl: 2, pr: 2, pt: 0.7, pb: 0.7, fontSize: 14 }}
          fullWidth
          onChange={(e) => SetCommentText(e.target.value)}
          onKeyUp={(e) => {
            HandleSubmitComment(e);
          }}
        />
      </Stack>
    </React.Fragment>
  );
};

export default ReplyTextField;
