import React from "react";
import data from "../MOCK_DATA.json";
import { Link } from "@mui/material";
import "./Movie.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  changeAthe, movieName } from "../features/counter/Slice";

const Movie = () => {

  const state  = useSelector(({sample})=>sample)
  console.log(state);

  var datas = [];

  for ( var i=0 ; i<10; i++){
    datas[i] = data[i];
  }
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const gotoTheater = (e) =>{
    console.log(e.target.title);
    navigate("/buytickets")
    dispatch(movieName(e.target.title))
    dispatch(changeAthe(true))
  }

  return (
    <>
    <Header />
    <div className="movie_container">
      <div className="recom">
        <h1>Recommended Movies</h1>
        <div className="btn">
          <Link href="#">See All</Link>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
      <div className="movie_row">
        {datas.map((e, index) => (
          <div className="movie_col" key={index}>
            <div className="movie_card"  title={e["movie_title"]} onClick={(e, index)=>gotoTheater(e, index)}>
              <div title={e["movie_title"]}>
                <img
                   title={e["movie_title"]}
                  src={e.image} alt="no"
                ></img>
              </div>
              <h3 title={e["movie_title"]}>{e["movie_title"]}</h3>
              <p title={e["movie_title"]}>{e.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Movie;
