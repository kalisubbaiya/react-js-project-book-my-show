import * as React from "react";
import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import scooter from "./assets/images/scooter.png";
import cycle from "./assets/images/cycle.png";
import auto from "./assets/images/auto.png";
import car from "./assets/images/car.png";
import car2 from "./assets/images/car2.png";
import van from "./assets/images/van.png";
import "./Popup.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { seatCount } from "./features/counter/Slice";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  textAlign: "center",
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

export default function Popup() {
  const [open, setOpen] = React.useState(false);
  const [listButton, setListButton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [imageUrl, setImageUrl] = useState(scooter);
  const [seatNo, setSeatNo] = useState(0);
  const ref = useRef(null);

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    if (seatNo !==0){
      setOpen(false);
      navigate("/seatsAvailability");
    }
  };

  const dispatch = useDispatch();

  const noOfSeat = (e, ref) => {
    if (!ref.current) {
      return;
    }
    if (!ref.current.classList.contains("changeBg")) {
      ref.current.classList.add("changeBg");
    } else {
      ref.current.classList.remove("changeBg");
      ref.current = null;
    }
    dispatch(seatCount(parseInt(e.target.innerHTML)));
    setSeatNo(parseInt(e.target.innerHTML))
  };

  const handleImage = (e) => {
    if (e.target.innerHTML === "1") {
      setImageUrl(cycle);
    } else if (e.target.innerHTML === "2") {
      setImageUrl(scooter);
    } else if (e.target.innerHTML === "3") {
      setImageUrl(auto);
    } else if (e.target.innerHTML === "4") {
      setImageUrl(car);
    } else if (
      e.target.innerHTML === "5" ||
      e.target.innerHTML === "6" ||
      e.target.innerHTML === "7"
    ) {
      setImageUrl(car2);
    } else if (
      e.target.innerHTML === "8" ||
      e.target.innerHTML === "9" ||
      e.target.innerHTML === "10"
    ) {
      setImageUrl(van);
    } else {
      setImageUrl(scooter);
    }
  };

  useEffect(() => {
    handleClickOpen();
  }, []);

  return (
    <div>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
        >
          How Many Seats?
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <img src={imageUrl} alt="no" width={"40%"}></img>
        </DialogContent>
        <Stack>
          <ul>
            {listButton.map((item, index) => {
              return (
                <li key={index}>
                  <button
                    onMouseOver={(e) => handleImage(e)}
                    onClick={(e) => {
                      noOfSeat(e, ref);
                      e.stopPropagation();
                      ref.current = e.target;
                      noOfSeat(e, ref);
                    }}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </Stack>
        <Grid
          className="diamond"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid>
            <p>DIAMOND</p>
            <h4>Rs. 190.00</h4>
            <span style={{ color: "#4abd5d" }}>Available</span>
          </Grid>
          <Grid>
            <p>PEARL</p>
            <h4>Rs. 60.00</h4>
            <span>Sold Out</span>
          </Grid>
        </Grid>
        <DialogActions>
          <Button
            id="selectSeat"
            autoFocus
            onClick={handleClose}
            style={{
              background: "#f84464",
              color: "#fff",
              textTransform: "capitalize",
              fontSize: "16px",
            }}
          >
            Select Seats
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
