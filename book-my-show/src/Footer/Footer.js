import * as React from "react";
import Button from "@mui/material/Button";
import "./Footer.css";
import Customer from "../assets/images/cust.png";
import Ticket from "../assets/images/ticket.png";
import News from "../assets/images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer1">
          <div className="footer1a">
            <div style={{ display: "flex" }}>
              <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="no"></img>
              <p>
                <strong>List your Show </strong> Got a show, event, activity or
                a great experience? Partner with us & get listed on BookMyShow
              </p>
            </div>
            <div className="btn">
              <Button
                variant="contained"
                color="error"
                style={{ textTransform: "none", fontSize: "16px" }}
              >
                Contact today!
              </Button>
            </div>
          </div>
        </div>
        <div className="footer2">
          <div className="footer2a">
            <div className="img">
              <img src={Customer} alt="no"></img>
            </div>
            <p>24/7 CUSTOMER CARE</p>
          </div>
          <div className="footer2a">
            <div className="img">
              <img src={Ticket} alt="no"></img>
            </div>
            <p>RESEND BOOKING CONFIRMATION</p>
          </div>
          <div className="footer2a">
            <div className="img">
              <img src={News} alt="no"></img>
            </div>
            <p>SUBSCRIBE TO THE NEWSLETTER</p>
          </div>
        </div>
        <div className="footer3">
          <div className="footer3a">
            <div className="line"></div>
            <a href="#">
              {" "}
              <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="no"></img>{" "}
            </a>
            <div className="line"></div>
          </div>
          <div className="social_links">
            <div>
              <i className="lab la-facebook-f"></i>
            </div>
            <div>
              <i className="bi bi-twitter"></i>
            </div>
            <div>
              <i className="bi bi-instagram"></i>
            </div>
            <div>
              <i className="bi bi-youtube"></i>
            </div>
            <div>
              <i className="lab la-pinterest-p"></i>
            </div>
            <div>
              <i className="lab la-linkedin-in"></i>
            </div>
          </div>
          <p>
            Copyright 2023 &#169; Bigtree Entertainment Pvt. Ltd. All Rights
            Reserved.
          </p>
          <p>
            The content and images used on this site are copyright protected and
            copyrights vests with the respective owners. The usage of the
            content and images on this website is intended to promote the works
            and no endorsement of the artist shall be implied. Unauthorized use
            is prohibited and punishable by law.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
