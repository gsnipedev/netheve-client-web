import { Delete } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Avatar,
  ButtonBase,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFypData } from "../../pages/Home/HomeSlice";
import AxiosHttpInstance from "../../Util/Axios";
import ReplyTextField from "../ReplyTextField";
import Reply from "./Reply";

const Comments = (props) => {
  const local = useSelector((state) => state.Home.fypData);
  let [IsCommentOpen, setCommentOpen] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState(props.data);
  const [dataReplies, setDataReplies] = useState([]);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    setDataReplies(Array.from(data.replies).reverse());
  }, [data]);

  function HandleCommentToggleOn(props) {
    setCommentOpen(!IsCommentOpen);
  }
  function HandleReplyToggleOn(props) {
    setCommentOpen(true);
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMoreMenu, setOpenMoreMenu] = useState(false);

  const HandleOpenMoreMenu = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMoreMenu(true);
  };

  const HandleCloseMoreMenu = (e) => {
    AxiosHttpInstance.delete("api/comment?id=" + data.id).then((response) => {
      dispatch(fetchFypData());
    });
    setOpenMoreMenu(false);
    setAnchorEl(null);
  };

  let Replies = dataReplies.map((data, index) => {
    return <Reply key={data.id} onClickReply={HandleReplyToggleOn} data={data} />;
  });

  return (
    <React.Fragment>
      <Stack direction="row" spacing={1} display={props.ShouldShow === true ? "flex" : "none"}>
        <Avatar />
        <Container disableGutters>
          <Paper sx={{ p: 1, boxShadow: "none", backgroundColor: "#F4F4F8", position: "relative" }}>
            <Typography className="mukta">{data.issuer.username}</Typography>
            <IconButton
              size="small"
              disableRipple
              sx={{ position: "absolute", top: 0, right: 0 }}
              onClick={HandleOpenMoreMenu}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu open={openMoreMenu} anchorEl={anchorEl} elevation={2}>
              <MenuItem onClick={HandleCloseMoreMenu} className="mukta">
                <Stack direction="row">
                  <Delete />
                  Delete
                </Stack>
              </MenuItem>
            </Menu>
            <Typography className="ptsans" fontSize={14} sx={{ mt: 1 }}>
              {data.text}
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
            {Replies}

            <ReplyTextField ShouldShow={IsCommentOpen} type="replyComment" commentId={data.id} dummy="comeafawgfaw" />
          </Stack>
          {/*Akhir dari stack komentar*/}
        </Container>
      </Stack>
    </React.Fragment>
  );
};

export default Comments;
