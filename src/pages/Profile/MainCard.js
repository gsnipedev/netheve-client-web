import EditIcon from "@mui/icons-material/Edit";
import { Avatar, Box, Button, Card, CardContent, Container, IconButton, Link, Stack, Typography } from "@mui/material";

const MainCard = (props) => {
  return (
    <Card>
      <CardContent sx={{ p: 0, position: "relative" }}>
        <Box
          sx={{
            background: "linear-gradient(90deg, rgba(2,155,186,1) 27%, rgba(195,5,68,1) 100%)",
            height: 140,
            width: "100%",
            position: "absolute",
          }}
        />
        <Container disableGutters sx={{ pt: 10, pl: 3, pr: 3 }}>
          <Avatar sx={{ height: 120, width: 120 }} />
          <Stack direction="row" justifyContent="space-between">
            <Typography className="barlow" fontSize={24}>
              {props.fullname}
            </Typography>
            <IconButton>
              <EditIcon sx={{ color: "black" }} />
            </IconButton>
          </Stack>
          <Typography className="barlow" fontSize={15} color="gray">
            {props.displayInfo}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography className="roboto" fontSize={13} color="gray">
              Los Santos, San Andreas
            </Typography>
            <Link className="mukta" onClick={() => props.handle(true)} sx={{ ":hover": { cursor: "pointer" } }}>
              Information Detail
            </Link>
          </Stack>
        </Container>
      </CardContent>
    </Card>
  );
};

export default MainCard;
