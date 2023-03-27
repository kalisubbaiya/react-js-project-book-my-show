import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Payment.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theaterimage from "../assets/images/theater.png";

import aSmile from "../assets/images/book-a-smile-1.png";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const state = useSelector(({ sample }) => sample);
  const seatArray = state.seatBooked;
  const booked = state.seatBooked.toString();
  console.log(booked);

  var base = state.seats * 30;
  var gst = state.seats * 30 * (18 / 100);
  const Convenience = base + gst;

  const [message, setMessage] = useState(
    "Show the m-ticket QR Code on your mobile to enter the cinema."
  );

  const changeMtick = () => {
    setMessage("Show the m-ticket QR Code on your mobile to enter the cinema.");
  };

  const changeBoxtick = () => {
    setMessage("Select this option to pick your tickets from Box Office.");
  };

  const navigate = useNavigate();

  const successTick = () =>{
    console.log(seatArray);
    for (var i = 0; i < seatArray.length; i++) {
      localStorage.setItem(
        `${state.movie + state.theater + state.time}seat${seatArray[i]}`,
        `${state.movie + state.theater + state.time + seatArray[i]}`
      );
    }
    navigate("/paySuccess")
  }

  var [contribution, setContribution] = useState(state.seats * 1);

  const removeCont =(e) =>{
    setContribution(0);
    e.target.style.color = "#ccc";
  }

  return (
    <>
      <div className="payment_container">
        <div className="payment_card">
          <h2>BOOKING SUMMARY</h2>
          <div className="payBill">
            <h3>
              Diamond - {booked} {"(" + state.seats + "Tickets)"}
            </h3>
            <h3>Rs.{state.amount.toFixed(2)}</h3>
          </div>
          <div>
            <Accordion style={{ boxShadow: "none" }}>
              <AccordionSummary
                style={{ padding: 0 }}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ExpandMoreIcon
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "50%",
                    marginRight: "8px",
                    width: "auto",
                  }}
                />
                <Typography className="payBill" style={{ width: "95%" }}>
                  <div>Convenience fees</div>
                  <div>Rs.{Convenience.toFixed(2)}</div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Grid className="conv">
                    <div>Base Amount</div>
                    <div>Rs.{base.toFixed(2)}</div>
                  </Grid>
                  <Grid className="conv">
                    <div>Integrated GST (IGST) @ 18%</div>
                    <div>Rs.{gst.toFixed(2)}</div>
                  </Grid>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div className="payBill">
              <h3>Sub Total</h3>
              <h3>Rs.{(state.amount + Convenience).toFixed(2)}</h3>
            </div>
            <div className="contribution">
              <div className="bookASmile">
                <h3>
                  {" "}
                  <img src={aSmile} alt="no"></img> Contribution to BookASmile
                </h3>
                <h4>(&#8377;1 per ticket has been added)</h4>
                <p style={{ borderBottom: "0.5px dashed #666", display: "inline-block" }}>
                  VIEW T&C
                </p>
              </div>
              <div>
                Rs.{contribution}.00
                <div onClick={(e)=>removeCont(e)} className="remove">Remove</div>
              </div>
            </div>
            <p>
              Your Current state is <span className="state">Tamil Nadu</span>
            </p>
            <div className="payBill payable">
              <h3>Amount Payable</h3>
              <h3>
                Rs. {(state.amount + Convenience + contribution).toFixed(2)}
              </h3>
            </div>
          </div>
        </div>
        <div className="ticket-type">
          <div className="tick_head">SELECT TICKET TYPE</div>
          <div className="ticket_cont">
            <div className="m_tick">
              <div className="tick_inp">
                <label for="ticket"></label>
                <input
                  type="radio"
                  id="ticket"
                  name="ticket_type"
                  defaultChecked
                  onClick={changeMtick}
                />
              </div>
              <div className="tick_cont">
                <div>
                  <i className="las la-mobile"></i>
                  <i className="bi bi-ticket-fill"></i>
                  <i className="bi bi-ticket"></i>
                </div>
                <div>M-Ticket</div>
              </div>
            </div>
            <div className="m_tick">
              <div className="tick_inp">
                <input
                  type="radio"
                  id="ticket"
                  name="ticket_type"
                  onClick={changeBoxtick}
                />
              </div>
              <div className="tick_cont">
                <div>
                  <img
                    src={theaterimage}
                    alt="no-theater"
                    style={{ width: "30px", marginRight: "20px" }}
                  ></img>
                </div>
                <div>Box Office Pickup</div>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center", marginBottom: "40px"}}>{message}</p>
          <p>
            <i className="las la-info-circle"></i> By proceeding, I express my
            consent to complete this transaction.
          </p>
          <div className="proceed" onClick={successTick}>
            <div>TOTAL: Rs.{(state.amount + Convenience + contribution).toFixed(2)}</div>
            <div>Proceed</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
