import { Avatar, Paper, Stack, Typography, IconButton, ButtonBase, Menu, MenuItem, TextField } from "@mui/material";
import { Container } from "@mui/system";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React, { useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import AxiosHttpInstance from "../../Util/Axios";
import { useDispatch } from "react-redux";
import { fetchFypData } from "../../pages/Home/HomeSlice";

const Reply = (props) => {
  const [data, setData] = useState(props.data);
  const dispatch = useDispatch();
  const HandleOpenReplyTextField = () => {
    props.onClickReply(true);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMoreMenu, setOpenMoreMenu] = useState(false);

  const DeleteReply = () => {
    AxiosHttpInstance.delete("api/reply?id=" + data.id).then((response) => {
      dispatch(fetchFypData());
      HandleCloseMoreMenu();
    });
  };

  const HandleOpenMoreMenu = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMoreMenu(true);
  };
  const HandleCloseMoreMenu = (e) => {
    setOpenMoreMenu(false);
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" spacing={1}>
      <Avatar />
      <Container disableGutters>
        <Paper sx={{ p: 1, boxShadow: "none", backgroundColor: "#F4F4F8", position: "relative" }}>
          <Typography className="mukta">{data.issuer.username}</Typography>
          <IconButton
            size="small"
            disableRipple
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={openMoreMenu == true ? HandleCloseMoreMenu : HandleOpenMoreMenu}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu open={openMoreMenu} anchorEl={anchorEl} elevation={2}>
            <MenuItem onClick={DeleteReply} className="mukta">
              <Stack direction="row">
                <Delete />
                Delete
              </Stack>
            </MenuItem>
          </Menu>
          <Typography className="ptsans" fontSize={14}>
            {data.text}
          </Typography>
        </Paper>
        <Stack direction="row" spacing={2}>
          <ButtonBase disableRipple className="mukta">
            Like
          </ButtonBase>
          <ButtonBase disableRipple className="mukta" onClick={HandleOpenReplyTextField}>
            Reply
          </ButtonBase>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Reply;
