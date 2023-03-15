import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Seats.css";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Seats = () => {
  const state = useSelector(({ sample }) => sample);


  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let row1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let row2 = ["K", "L", "M", "N"];
  let row3 = ["O", "P"];

  const countSeat = state.seats;

  const ref = useRef(null);

  var [count, setCount] = useState(0);
  const [soldOut, setSoldOut] = useState([]);
  // console.log(arry);

  const selectSeat = (e, index) => {
    var active = document.getElementById(e)
    var current = count;
    var array1 = soldOut;
    if (count < countSeat && !active.classList.contains("selectSeat")){
      console.log(e);
      active.classList.add("selectSeat");
      // localStorage.setItem(`seat${e}`,`${e}`)
      array1.push(`${e}`);
      setSoldOut(array1)
      current++
      setCount(current)
      console.log(array1);
    }
    else if(active.classList.contains("selectSeat")){
      active.classList.remove("selectSeat")
      count--
    }
  };

  // console.log(array1);

  // localStorage.clear();

  const navigate = useNavigate();

  const handleSubmit = (e) =>{ 
    e.preventDefault();  
    for (var i=0; i<soldOut.length; i++){
      localStorage.setItem(`seat${soldOut[i]}`,soldOut[i])
    } 
    navigate("/payment")
  }

  return (
    <section>
      <div className="ceat-container">
        <div className="ceat-header" style={{ backgroundColor: "#1f2533" }}>
          <div>
            <span>{state.movie}</span>
            <p style={{ marginBottom: "0px" }}>
              Anand Theatre Madhuranthagam RGB LASER 4k | Tomorrow, 11 Mar,
              11:30 AM
            </p>
          </div>
          <div>
            <Button
              style={{
                textTransform: "none",
                border: "1px solid white",
                color: "white",
              }}
              sx={{ mr: 2, ml: 2, pt: 0, pb: 0 }}
            >
              {countSeat} Tickets
            </Button>
          </div>
        </div>
        <p>DIAMOUNT : </p>
        <div className="ceats-rows">
          {row1.map((value, ind) => {
            return (
              <div className="ceat-row">
                <div className="ceat" key={ind}>
                  <div className="ceat-no">{value}</div>
                </div>
                <div className="ceat" name={ind}>
                  {array.map((value, index) => {
                    return ((localStorage.getItem(`seat${row1[ind] + value}`) === (row1[ind] + value) ? 
                      <button
                        className={'ceat-no error'} 
                        id={row1[ind] + value}
                        key={index}
                        disabled
                        onClick={(e, index) => {
                          selectSeat(e.target.id);
                        }}
                      >
                        {value}
                      </button> :(
                        <button
                        className={'ceat-no'} 
                        id={row1[ind] + value}
                        key={index}
                        onClick={(e, index) => {
                          selectSeat(e.target.id);
                        }}
                      >
                        {value}
                      </button>
                      ))
                    );
                  })}
                </div>
                <div className="ceat">
                  {array.map((value, index) => {
                    return (
                      <button
                        className="ceat-no"
                        id={row1[ind] + (value + 11)}
                        key={index}
                        onClick={(e) => {
                          selectSeat(e.target.id);
                        }}
                      >
                        {index + 12}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="space"></div>
          {row2.map((value, ind) => {
            return (
              <div className="ceat-row">
                <div className="ceat" key={ind}>
                  <div className="ceat-no">{value}</div>
                </div>
                <div className="ceat">
                  {array.map((value, index) => {
                    return (
                      <div
                        className="ceat-no"
                        key={index}
                        title={row2[ind] + value}
                        onClick={(e) => {
                          selectSeat(e, ref);
                          e.stopPropagation();
                          ref.current = e.target;
                          selectSeat(e, ref);
                        }}
                      >
                        {index + 1}
                      </div>
                    );
                  })}
                </div>
                <div className="ceat">
                  {array.map((value, index) => {
                    return (
                      <div
                        className="ceat-no"
                        title={row2[ind] + (value + 11)}
                        key={index}
                        onClick={(e) => {
                          selectSeat(e, ref);
                          e.stopPropagation();
                          ref.current = e.target;
                          selectSeat(e, ref);
                        }}
                      >
                        {index + 12}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="space"></div>
          {row3.map((value, index) => {
            return (
              <div className="ceat-row">
                <div className="ceat">
                  <div className="ceat-no">{value}</div>
                </div>
                <div className="ceat">
                  {array.map((value, index) => {
                    return <div className="ceat-no last-ceat">{index + 1}</div>;
                  })}
                </div>
                <div className="ceat">
                  {array.map((value, index) => {
                    return (
                      <div className="ceat-no last-ceat" aria-disabled>
                        {index + 12}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="space"></div>
          <div className="last-content">
            <div className="box"></div>
            <span>All eyes this way please </span>
          </div>
          <div className="seat-legent-wrapper">
            <div className="seat-legent-container">
              <div className="seat-legent-inner">
                <div className="seat-legent">
                  <div className="seat-box box1"></div>
                  <span>Sold</span>
                </div>
                <div className="seat-legent">
                  <div className="seat-box box2"></div>
                  <span>Available</span>
                </div>
                <div className="seat-legent">
                  <div className="seat-box box3"></div>
                  <span>Selected</span>
                </div>
              </div>
              <Button
                variant="contained"
                color="error"
                style={{ textTransform: "none" }}
                sx={{ mr: 2, ml: 2 }}
                onClick={(e)=>handleSubmit(e)}
              >
                Pay Rs.{190 * countSeat}.00
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seats;
