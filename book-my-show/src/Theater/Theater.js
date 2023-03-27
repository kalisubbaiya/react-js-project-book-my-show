import React from "react";
import "./Theater.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ListTheater from "../TheaterList.json";
import { showDate, showMonth, showTime, theaterName } from "../features/counter/Slice";
import data from '../MOCK_DATA.json'
import { JoinFull } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#49ba8e",
}));

const Theater = () => {
  const state = useSelector(({ sample }) => sample);
  console.log(state.movie);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const seatsHandle = () => {
    navigate("/selectSeats");
  };

  const toDay = new Date();
  const tomorrow = new Date(toDay);
  tomorrow.setDate(toDay.getDate()+1);
  const dayAfter = new Date(toDay);
  dayAfter.setDate(toDay.getDate()+2);

  console.log(toDay.getDate());
  console.log(tomorrow);
  console.log(dayAfter);
  

  const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const months = ['JAN', 'FEB','MAR','APR','MAY','JUN','JULY','AUG','SEP','OCT','NOV','DEC'];


  var currentTime = toDay.getHours();
  var currentMin = toDay.getMinutes() < 10 ? "0"+toDay.getMinutes() : toDay.getMinutes();
  var timeWithMin = currentTime+"."+currentMin
  console.log(timeWithMin);

  dispatch(showDate(toDay.getDate()));
  dispatch(showMonth(months[toDay.getMonth()]))

  var theaterLoop = ListTheater.filter((e) => {
    if (e.movieName === state.movie) return e.theaterList;
  });

  var theaterLoop1 = theaterLoop[0].theaterList;
  var theaterLoop2 = [];
  for (var i = 0; i < theaterLoop1.length; i++) {
    theaterLoop2[i] = theaterLoop1[i].showTime;
  }
  console.log(theaterLoop2);
  console.log(theaterLoop);

  console.log(theaterLoop1);

  var [genres] = data.filter((e)=>{
    return state.movie === e["movie_title"]
  })
  console.log(genres);

  return (
    <>
      <Header />
      <div className="theater_header">
        <h1>{state.movie} - Tamil</h1>
        <div className="thHead">
          <div className="cert">UA</div>
          <div className="genre">{genres["genre"]}</div>
            
        </div>
      </div>
      <div className="theater_sticky">
        <div className="theater_date">
          <div className="chevron">
            <i className="bi bi-chevron-left"></i>
          </div>
          <div className="date_month bgColor">
            <p>{days[toDay.getDay()]}</p>
            <h3>{toDay.getDate()}</h3>
            <p>{months[toDay.getMonth()]}</p>
          </div>
          <div className="date_month">
            <p>{days[tomorrow.getDay()]}</p>
            <h3>{tomorrow.getDate()}</h3>
            <p>{months[tomorrow.getMonth()]}</p>
          </div>
          <div className="date_month">
            <p>{days[dayAfter.getDay()]}</p>
            <h3>{dayAfter.getDate()}</h3>
            <p>{months[dayAfter.getMonth()]}</p>
          </div>
          <div className="chevron">
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
        <div className="filter">
          <div>Tamil - 2D</div>
          <div>
            {" "}
            <p>Filter Price Range</p> <i className="las la-angle-down"></i>{" "}
          </div>
          <div>Filter Show Timings</div>
          <div>
            {" "}
            <i className="las la-search"></i>{" "}
          </div>
        </div>
      </div>
      <Grid style={{ background: "#f2f2f2", padding: "20px 0" }}>
        <Grid
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            background: "#fff",
            width: "98%",
            margin: "auto",
          }}
        >
          <Grid style={{ width: "75%" }}></Grid>
          <Grid
            style={{
              width: "25%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "11px",
              padding: "8px",
              color: "#000",
              opacity: 0.7,
            }}
          >
            <div className="avail"></div>
            <div>AVALABLE</div>
            <div className="fastfill"></div>
            <div>FAST FILLING</div>
            <div className="subtitle">LAN</div>
            <div>SUBTITLES LANGUAGE</div>
          </Grid>
        </Grid>
        {theaterLoop1.map((e, index) => {
          return (
            <Grid
              key={index}
              style={{
                display: "flex",
                background: "#fff",
                width: "98%",
                margin: "auto",
                borderTop: "1px solid #cccccc",
              }}
            >
              <Grid className="cinema_cont">
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0 20px 20px",
                  }}
                >
                  <i className="bi bi-heart-fill"></i>
                </Grid>
                <Grid className="cinema">
                  <h5>{e.theatername}</h5>
                  <Grid container spacing={2}>
                    <Grid>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#49ba8e",
                        }}
                      >
                        <div>
                          <i className="las la-mobile"></i>
                        </div>
                        <p>M-Ticket</p>
                      </div>
                    </Grid>
                    <Grid style={{ marginLeft: "20px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "orange",
                        }}
                      >
                        <div style={{ position: "relative" }}>
                          <i className="las la-hamburger"></i>
                          <i className="bi bi-cup-straw"></i>
                        </div>
                        <p>Food & Beverge</p>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  style={{
                    fontSize: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#000",
                    opacity: 0.8,
                    padding: "0 20px 20px",
                  }}
                >
                  <i className="las la-info-circle"></i>
                  INFO
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                className="cinema_timing"
                style={{ alignContent: "center" }}
              >
                {theaterLoop2[index].map((e1, index1) => {
                  return (
                     e1 ? (JSON.parse(e1) > JSON.parse(timeWithMin)) ?
                      <Grid item xs={2} key={index1}>
                        <Item
                          onClick={() => {
                            seatsHandle();
                            dispatch(theaterName(e.theatername));
                            dispatch(showTime(e1));
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <p>{e1 < 12 ? (e1 + " AM") : ((e1-12).toFixed(2) + " PM")}</p>
                          <p>{e.screen}</p>
                        </Item>
                      </Grid>
                    :("") :(""))
                })}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      <Grid
        style={{
          background: "#fff",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          color: "#000",
          opacity: 0.8,
        }}
      >
        Home
        <i className="las la-long-arrow-alt-right"></i>
        Movies in Chennai
        <i className="las la-long-arrow-alt-right"></i>
        {state.movie}
      </Grid>
      <Grid
        className="privacy_policy"
        style={{
          background: "#f2f2f2",
          padding: "24px 50px 10px 50px",
          fontSize: "12px",
          color: "#999999",
        }}
      >
        <h4>Privacy Note</h4>
        <p>
          By using www.bookmyshow.com(our website), you are fully accepting the
          Privacy Policy available at{" "}
          <span>https://bookmyshow.com/privacy</span> governing your access to
          Bookmyshow and provision of services by Bookmyshow to you. If you do
          not accept terms mentioned in the <span>Privacy Policy</span> , you
          must not share any of your personal information and immediately exit
          Bookmyshow.
        </p>
      </Grid>
      <Footer />
    </>
  );
};

export default Theater;
