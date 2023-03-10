import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Movie from '../MovieCard/Movie';
import Theater from '../Theater/Theater';
import Seats from '../CheckSeats/Seats';
import { useSelector } from 'react-redux';
// import store from '../app/store'

const Routing = () => {
  const state = useSelector(({sample})=>sample)
  return (
    <>
      {state.isAthendicate ? (
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Movie />}></Route>
            <Route path='/buytickets' element={<Theater />}></Route>
            <Route path='/seatsAvailability' element={<Seats />}></Route>
          </Routes>
      </BrowserRouter>
      ):(
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<Movie />}></Route>
          </Routes>
        </BrowserRouter>
      )}
        
    </>
  )
}

export default Routing