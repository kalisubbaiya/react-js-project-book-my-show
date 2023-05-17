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
import "./Login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeAthe } from "../features/counter/Slice";
import { useEffect } from "react";
import axios from "axios";

const theme = createTheme();

export default function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [getDetails, setDetails] = React.useState([]);

  useEffect(()=>{
    const fetchAllAccounts = async () =>{
      try{
        const res = await axios.get("http://localhost:8800/bookmyshow_auth");
        console.log(res);
        setDetails(res.data)
      }
      catch(err){
        console.log(err);
      }
    }
    fetchAllAccounts();
  }, [])
  console.log(getDetails);

  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [flag1, setFlag1] = React.useState(false);
  const [flag2, setFlag2] = React.useState(false);
  const [flag3, setFlag3] = React.useState(false);
  const [flag4, setFlag4] = React.useState(false);

  const handleInput = (e) => {
    if (e.target.name === "email") {
      setFlag1(false);
      setFlag3(false);
      setUserName(e.target.value);
    } else {
      setFlag2(false);
      setFlag4(false)
      setPassword(e.target.value);
    }
  };

  var loginUser;

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    if (userName === ""){
      setFlag1(true);
    }
    if (password === ""){
      setFlag2(true);
    }

    const loginUsers = getDetails;
    // console.log(loginUsers);
    
    const loginAthend = loginUsers.some((e)=>e.email === userName)
    // console.log(loginAthend);


    if (loginAthend){
      loginUser = loginUsers.filter((e)=> e.email === userName)
      loginUser = loginUser[0]
      if (loginUser.email === userName && loginUser.password === password){
        setFlag4(false)
      }
      else if (loginUser.email === userName && loginUser.password !== password){
        setFlag4(true);
      }
    }else{
      setFlag3(true);
    }

    // console.log(loginUser);

    

    if (
      userName !== "" &&
      loginAthend &&
      loginUser.password === password &&
      password !== "" 
    ) {
      dispatch(changeAthe(true));
      navigate("/moveCards");
    }
  };

  return (
    <div className="login">
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
            <Avatar sx={{ m: 1, bgcolor: "#d32f2f" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in to BookMyShow
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 1, mb: 5 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Enter Your Email Address"
                name="email"
                type="email"
                autoComplete="off"
                autoFocus
                onChange={(e) => handleInput(e)}
              />
              {userName === "" && flag1 && (
                <p style={{ color: "red" }}>User Email is required</p>
              )}
              {userName !== "" && flag3 && (
                <p style={{ color: "red" }}>This is not a registered email.Please try a valid email.</p>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                onChange={(e) => handleInput(e)}
              />
              {password === "" && flag2 && (
                <p style={{ color: "red" }}>Password is required</p>
              )}
              {password !== "" && flag4  && (
                <p style={{ color: "red" }}>Password didn't match</p>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
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
                  <Link href="/signUp" variant="body2">
                    {"Don't have an account? Sign Up"}
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
