import * as React from "react";
import { useSelector } from "react-redux";
import "./Payment.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Payment = () => {
  const state = useSelector(({ sample }) => sample);
  const booked = state.seatBooked.toString();
  console.log(booked);

  const Convenience = JSON.parse(((18/100) * (state.amount)).toFixed(2));

  return (
    <>
      <div className="payment_container">
        <div className="payment_card">
          <h2>BOOKING SUMMARY</h2>
          <div>
            <h3>
              Diamond - {booked} {"(" + state.seats + "Tickets)"}
            </h3>
            <h3>Rs.{state.amount}.00</h3>
          </div>
          <div>
            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              ><ExpandMoreIcon />
                <Typography>Convenience fees</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div>
                Rs.{Convenience}
            </div>
            <div>
                <h3>Sub Total</h3>
                <h3>{(state.amount + Convenience).toFixed(2)}</h3>
            </div>
            <div>
                <div>
                    <h3>Contribution to BookASmile</h3>
                    <h4>(&#8377;1 per ticket has been added)</h4>
                    <p style={{textDecoration: "underline"}}>VIEW T&C</p>
                </div>
                <div>
                    Rs.{state.seats * 1}
                </div>
            </div>
            <p>Your Current state is <span>Tamil Nadu</span></p>
            <div>
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
