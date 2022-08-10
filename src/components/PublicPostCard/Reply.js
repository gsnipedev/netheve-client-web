import { Avatar, Paper, Stack, Typography, IconButton, ButtonBase } from "@mui/material";
import { Container } from "@mui/system";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Reply = (props) => {
  const HandleOpenReplyTextField = () => {
    props.onClickReply(true);
  };
  return (
    <Stack direction="row" spacing={1}>
      <Avatar />
      <Container disableGutters>
        <Paper sx={{ p: 1, boxShadow: "none", backgroundColor: "#F4F4F8", position: "relative" }}>
          <Typography className="mukta">{props.replyNickname}</Typography>
          <IconButton size="small" disableRipple sx={{ position: "absolute", top: 0, right: 0 }}>
            <MoreHorizIcon />
          </IconButton>
          <Typography className="ptsans" fontSize={14}>
            {props.replyText}
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
