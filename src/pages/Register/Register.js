import { Stack, Backdrop, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "../../App.css";
import { useState } from "react";
import Footer from "../../components/Footer";
import instance from "../../Util/Axios";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6874E8",
    },
  },
});

const RegisterCard = () => {
  let data = "";
  let username = "";
  let firstname = "";
  let lastname = "";
  let email = "";
  let password = "";
  let confirmation_password = "";
  const [errormsg, setErrormsg] = useState("");
  function registerdata(name) {
    instance
      .post("/userdata", { firstname, lastname, accountUsername: name })
      .then((response) => {
        if (response.data.status) window.location.href = "/login";
      })
      .catch((err) => {
        console.log("Server Error");
      });
  }
  const [loading, setLoading] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    data = new FormData(event.currentTarget);
    username = data.get("username");
    firstname = data.get("firstname");
    lastname = data.get("lastname");
    email = data.get("email");
    password = data.get("password");
    confirmation_password = data.get("confirmation_password");

    instance
      .post("/account/register", { username, firstname, lastname, email, password, confirmation_password })
      .then((response) => {
        setLoading(false);
        console.log(response.data.error_message);
        if (response.data.status) registerdata(username);
        else if (!response.data.status) setErrormsg(response.data.error_message);
      })
      .catch((error) => {
        setLoading(false);
        console.log("server error");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography className="memoirs" fontSize={42} color="crimson">
            NetHeve
          </Typography>
          <Typography component="h1" variant="h5" className="mukta">
            Sign Up
          </Typography>
          <Typography className="mukta" mt={2}>
            {errormsg}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3, mb: 1 }}>
            <Stack direction="row" spacing={1}>
              <TextField
                style={{ fontFamily: "monospace" }}
                size="small"
                required
                id="firstname"
                placeholder="First Name"
                name="firstname"
                autoComplete="given-name"
                autoFocus
              />
              <TextField
                style={{ fontFamily: "monospace" }}
                size="small"
                margin="normal"
                required
                id="lastname"
                placeholder="Last Name"
                name="lastname"
                autoComplete="family-name"
                autoFocus
              />
            </Stack>
            <TextField
              size="small"
              margin="dense"
              required
              fullWidth
              id="username"
              placeholder="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              size="small"
              margin="dense"
              required
              fullWidth
              id="email"
              placeholder="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              size="small"
              margin="dense"
              required
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              size="small"
              margin="dense"
              required
              fullWidth
              name="confirmation_password"
              placeholder="Confirm Password"
              type="password"
              id="confirmation-password"
              autoComplete="current-password"
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button
              type="submit"
              className="mukta"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2, textTransform: "none" }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an Account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Footer />
        </Box>
      </Container>
      <Backdrop open={loading}>
        <CircularProgress sx={{ color: "#fff" }} />
      </Backdrop>
    </ThemeProvider>
  );
};

export default RegisterCard;
