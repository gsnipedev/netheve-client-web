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
import Footer from "../../components/Footer";
import instance from "../../Util/Axios";
import { useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6874E8",
    },
  },
});

const LoginCard = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);

    instance
      .post("/account/login", {
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        if (response.data.loginStatus) {
          localStorage.setItem("access_token", response.data.access_token);
          window.location.href = "/";
        } else seterror_message(response.data.error_message);
      })
      .catch((error) => {
        setLoading(false);
        seterror_message("Something is wrong, please try again later");
      });
  };

  let [error_message, seterror_message] = useState("");
  let [loading, setLoading] = useState(false);

  return (
    <React.Fragment>
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
              Sign in
            </Typography>
            <Typography color="warning" className="mukta" mt={2}>
              {error_message}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, mb: 2 }}>
              <TextField
                style={{ fontFamily: "monospace" }}
                size="small"
                margin="normal"
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
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
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
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Footer />
          </Box>
        </Container>
      </ThemeProvider>
      <Backdrop open={loading}>
        <CircularProgress sx={{ color: "#fff" }} />
      </Backdrop>
    </React.Fragment>
  );
};

export default LoginCard;
