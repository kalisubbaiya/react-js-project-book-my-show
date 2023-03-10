import React from "react";
import data from "../MOCK_DATA.json";
import { Link } from "@mui/material";
import "./Movie.css";

const Movie = () => {

    var datas = [];

    for ( var i=0 ; i<5; i++){
        datas[i] = data [i];
    }

  return (
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
            <div className="movie_card">
              <div>
                <img
                  src={e.image} alt="no"
                ></img>
              </div>
              {/* <p>{e["rating/likes"]}</p> */}
              <h3>{e["movie_title"]}</h3>
              <p>{e.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
