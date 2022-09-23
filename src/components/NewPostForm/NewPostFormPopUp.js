import { Button, Card, CardContent, CardHeader, Divider, Stack, TextareaAutosize, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFypData } from "../../pages/Home/HomeSlice";
import AxiosHttpInstance from "../../Util/Axios";

const NewPostFormPopUp = (props) => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const dispatch = useDispatch();

  const HandleNewPostSubmit = (event) => {
    event.preventDefault();
    const loginFormData = new FormData(event.currentTarget);
    const data = {
      issuerId: localStorage.getItem("user_id"),
      textContent: loginFormData.get("TextContent"),
    };
    AxiosHttpInstance.post("api/post", data).then((response) => {
      dispatch(fetchFypData());
    });
    props.backdropHandle(false);
  };

  return (
    <>
      <Container component="form" onSubmit={HandleNewPostSubmit} maxWidth="sm">
        <Stack style={{ backgroundColor: "white", borderRadius: 5 }} spacing={0}>
          <Container disableGutters>
            <Typography className="barlow" color="black" fontSize={17} textAlign="center" sx={{ margin: 1 }}>
              New Post
            </Typography>
            <Divider />
          </Container>
          <Container sx={{ pt: 1, pb: 1 }}>
            <TextareaAutosize
              className="barlow"
              value={textAreaValue}
              name="TextContent"
              placeholder="Type Something"
              minRows={20}
              maxRows={20}
              style={{
                outline: "none",
                border: "none",
                resize: "none",
                fontSize: 16,
                margin: 0,
                width: "100%",
              }}
              onChange={(e) => {
                setTextAreaValue(e.target.value);
              }}
            />
          </Container>

          <Container disableGutters>
            <Divider />
            <Stack direction="row" justifyContent="end">
              <Button
                className="barlow"
                variant="text"
                sx={{ margin: 1, textTransform: "none" }}
                onClick={() => {
                  props.backdropHandle(false);
                  setTextAreaValue("");
                }}
              >
                Cancel
              </Button>
              <Button type="submit" className="barlow" variant="contained" sx={{ margin: 1, textTransform: "none" }}>
                Add Post
              </Button>
            </Stack>
          </Container>
        </Stack>
      </Container>
    </>
  );
};

export default NewPostFormPopUp;
