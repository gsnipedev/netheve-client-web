import { Search } from "@mui/icons-material";
import { Paper, Stack, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";

const Posts = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={2} sx={{ p: 1 }}>
        <Stack direction="row" justifyContent="center">
          <TextField variant="standard" placeholder="Search a Post" sx={{ width: 400, backgroundColor: "#EAEAEA" }} />
        </Stack>
      </Paper>
    </Container>
  );
};

export default Posts;
