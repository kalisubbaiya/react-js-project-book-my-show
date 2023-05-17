import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { changeAthe } from "../features/counter/Slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [getUserDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const fetchAllAccounts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/bookmyshow_auth");
        console.log(res);
        setUserDetails(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllAccounts();
  }, []);

  console.log(getUserDetails);

  const [flagPassword, setflagPassword] = React.useState(false);
  const [flagMail, setflagMali] = React.useState(false);
  const [userPassword, setUserPassword] = React.useState("");
  const [userCPassword, setCPassword] = React.useState();

  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    if (e.target.value === userPassword) {
      setflagPassword(false);
    }
  };

  const handleEmail = () => {
    setflagMali(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      Cpassword: data.get("Cpassword"),
    });

    var allDetails = getUserDetails;
    var isAthend = allDetails.some((val) => val.email === data.get("email"));

    if (!isAthend && userPassword === userCPassword && !isAthend) {
      setflagMali(false);
    }

    if (isAthend) {
      setflagMali(true);
    } else {
      axios
        .post("http://localhost:8800/accounts", {
          email: data.get("email"),
          password: userPassword,
        })
        .then(() => console.log("success"));
    }

    if (userPassword !== userCPassword) {
      setflagPassword(true);
    } else {
      setflagPassword(false);
    }

    if (
      data.get("email") !== "" &&
      userPassword !== "" &&
      userCPassword !== "" &&
      userPassword === userCPassword &&
      !isAthend
    ) {
      dispatch(changeAthe(true));
      navigate("/moveCards");
    }
  };

  // localStorage.clear();

  return (
    <div className="signUp">
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={(e) => handleSubmit(e)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    type="email"
                    label="Email Address"
                    name="email"
                    autoComplete="off"
                    onChange={handleEmail}
                  />
                </Grid>
                {flagMail ? (
                  <p style={{ color: "#d32f2f", padding: "0 16px" }}>
                    Email Already Exist!
                  </p>
                ) : (
                  ""
                )}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="off"
                    onChange={(e) => handlePassword(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Cpassword"
                    label="Confirm Password"
                    type="password"
                    id="Cpassword"
                    autoComplete="off"
                    onChange={(e) => handleCPassword(e)}
                  />
                </Grid>
                {flagPassword ? (
                  <p style={{ color: "#d32f2f", padding: "0 16px" }}>
                    Password and Confirm password did't match
                  </p>
                ) : (
                  ""
                )}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item className="account">
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
