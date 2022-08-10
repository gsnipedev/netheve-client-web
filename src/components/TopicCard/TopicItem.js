import { ListItem, ListItemButton, Stack, Avatar, Typography } from "@mui/material";

const TopicItem = () => {
  return (
    <ListItem disableGutters>
      <ListItemButton>
        <Stack direction={"row"} spacing={2} alignItems="center">
          <Avatar src="images/gtaicon.png" variant="rounded" />
          <Typography className="mukta">GTA:San Andreas</Typography>
        </Stack>
      </ListItemButton>
    </ListItem>
  );
};

export default TopicItem;
