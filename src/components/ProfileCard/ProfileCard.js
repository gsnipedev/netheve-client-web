import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import "../../App.css";

const ProfileCard = (props) => {
  return (
    <Card sx={{ boxShadow: 2 }}>
      <CardContent sx={{ padding: 0 }}>
        <Container
          sx={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}
          disableGutters
        >
          <Box sx={{ backgroundImage: "url('images/banner.jpg')", height: 62, width: "100%", position: "absolute" }} />
          <Avatar sx={{ width: 72, height: 72, mt: 3 }} />
          <Typography className="mukta" fontWeight={"bold"} sx={{ mt: 3 }}>
            {props.nickname}
          </Typography>
          <Typography className="mukta" color={"gray"} fontSize={13}>
            {props.displayInfo}
          </Typography>
          <Divider flexItem sx={{ mt: 1, mb: 0 }} />
        </Container>
        <List>
          <ListItem disablePadding>
            <ListItemButton className="nav-button" href="/friends">
              <ListItemIcon>
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText>
                <span className="barlow">Friend List</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton className="nav-button">
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText>
                <span className="barlow">Logout</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
