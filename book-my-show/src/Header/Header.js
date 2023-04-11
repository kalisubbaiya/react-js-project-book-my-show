import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import './Header.css'
import { useDispatch } from "react-redux";
import { changeAthe } from "../features/counter/Slice";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  color: "#000",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#000",
  "& .MuiInputBase-input": {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "60ch",
    },
  },
}));

const preventDefault = (event) => event.preventDefault();

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const signOut = () =>{
    dispatch(changeAthe(false));
    navigate('/login')
  }
  return (
    <div className="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#000", opacity: 0.8 }}>
          <Toolbar>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <img
                sx={{ display: "flex"}}
                src="https://in.bmscdn.com/webin/common/icons/logo.svg"
                width="55%"
                height="60px"
                alt="no"
              />
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for Movies, Events, Plays, Sports, and Activities"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <span>Chennai</span>
            <ArrowDropDownIcon />
            <Button
              variant="contained"
              color="error"
              sx={{ mr: 2, ml: 2, pt: 0, pb: 0 }}
              style={{ textTransform: "none" }}
              onClick={signOut}
            >
              Sign Out
            </Button>
            <IconButton
              sx={{ display: { xs: "none", md: "flex", mr: 2 } }}
              size="large"
              edge="end"
              color="inherit"
              aria-label="open drawer"
              // sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        style={{          
          background: "#000",
          opacity: 0.85,
          color: "#fff",
          padding: "8px 0",
        }}
        sx={{
          typography: "body1",
          "& > :not(style) + :not(style)": {
            ml: 2,
          },
        }}
        onClick={preventDefault}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width:"90%",
            padding: "0 0 0 4px",
            margin: "auto"
          }}
        >
          <div>
            <Link href="#">Movies</Link>
            <Link href="#" className="new">Stream</Link>
            <Link href="#">Events</Link>
            <Link href="#">Plays</Link>
            <Link href="#">Sports</Link>
            <Link href="#">Activities</Link>
            <Link href="#">Buzz</Link>
          </div>
          <div className="head_bottom">
            <Link href="#" className="new">ListYourShow</Link>
            <Link href="#">Corporates</Link>
            <Link href="#">Offers</Link>
            <Link href="#">Gift Cards</Link>
          </div>
        </div>
      </Box>
    </div>
  );
}
