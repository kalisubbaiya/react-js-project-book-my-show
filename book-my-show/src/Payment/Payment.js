import * as React from "react";
import { useSelector } from "react-redux";
import "./Payment.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import aSmile from '../assets/images/book-a-smile-1.png'
import { Grid } from "@mui/material";

const Payment = () => {
  const state = useSelector(({ sample }) => sample);
  const booked = state.seatBooked.toString();
  console.log(booked);

  var base = (state.seats * 30);
  var gst = (state.seats * 30 *(18/100));
  const Convenience = base + gst;

  return (
    <>
      <div className="payment_container">
        <div className="payment_card">
          <h2>BOOKING SUMMARY</h2>
          <div className="payBill">
            <h3>
              Diamond - {booked} {"(" + state.seats + "Tickets)"}
            </h3>
            <h3>Rs.{(state.amount).toFixed(2)}</h3>
          </div>
          <div>
            <Accordion style={{boxShadow: "none"}}>
              <AccordionSummary
                style={{padding: 0}}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ><ExpandMoreIcon style={{border: "1px solid #ccc", borderRadius: "50%", marginRight:"8px", width: "auto"}}/>
                <Typography  className="payBill" style={{width: "95%"}}>
                    <div>
                      Convenience fees
                    </div>
                    <div>
                      Rs.{Convenience.toFixed(2)}
                    </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Grid className="conv">
                    <div>
                      Base Amount
                    </div>
                    <div>
                      Rs.{base.toFixed(2)}
                    </div>
                  </Grid>
                  <Grid className="conv">
                    <div>
                      Integrated GST (IGST) @ 18%
                    </div>
                    <div>
                      Rs.{gst.toFixed(2)}
                    </div>
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
                <h3> <img src={aSmile} alt="no"></img> Contribution to BookASmile</h3>
                <h4>(&#8377;1 per ticket has been added)</h4>
                <p style={{borderBottom: "0.5px dashed #666", width: "50px"}}>VIEW T&C</p>
              </div>
              <div style={{margin : "18.72px 0"}}>
                  Rs.{state.seats * 1}.00
              </div>
            </div>
            <p>Your Current state is <span>Tamil Nadu</span></p>
            <div className="payBill">
                <h3>Amount Payable</h3>
                <h3>Rs. {(state.amount + Convenience + (state.seats * 1)).toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
