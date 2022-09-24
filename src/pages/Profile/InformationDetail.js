import { Close, Email } from "@mui/icons-material";
import { Avatar, Button, Card, Container, Divider, IconButton, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useSelector } from "react-redux";

const InformationDetail = (props) => {
  const data = useSelector((state) => state.Profiledata);
  return (
    <Container maxWidth="sm">
      <Paper sx={{ background: "#FFF", height: 400, maxWidth: 600, position: "relative" }}>
        <IconButton
          onClick={() => props.closeHandle(false)}
          sx={{ position: "absolute", right: 1, top: 1 }}
          disableRipple
        >
          <Close />
        </IconButton>
        <Box justifyContent="center" sx={{ p: 1 }}>
          <Typography fontWeight="bold">Detail Information of {data.fullname}</Typography>
        </Box>
        <Divider />
        <Stack spacing={1}>
          <DetailInformationItem title="Email" data="dummy@gmail.com" />
          <DetailInformationItem title="Whatsapp" data="000011111122222" />
          <DetailInformationItem title="Github" data="dummydev" />
          <DetailInformationItem title="IDK" data="dummyData" />
        </Stack>
      </Paper>
    </Container>
  );
};

const DetailInformationItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [data, setData] = useState(props.data);
  return (
    <>
      <table
        border={0}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#EAEAEA")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
      >
        <tbody>
          <tr>
            <td width={50} align="center">
              <Email />
            </td>
            <td className="mukta" style={{ fontWeight: "bold" }}>
              {title}
            </td>
          </tr>
          <tr>
            <td></td>
            <td>{data}</td>
          </tr>
        </tbody>
      </table>
      <Divider />
    </>
  );
};

export default InformationDetail;
