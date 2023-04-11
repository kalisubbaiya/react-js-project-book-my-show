import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Movie from '../MovieCard/Movie';
import Theater from '../Theater/Theater';
import Seats from '../CheckSeats/Seats';
import { useSelector } from 'react-redux';
import Popup from '../Popup';
import Payment from '../Payment/Payment';
import Success from '../Successfull/Success';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const Routing = () => {
  const state = useSelector(({sample})=>sample)
  return (
    <>
      {state.isAthendicate ? (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Movie />}></Route>
            <Route path='/moveCards' element={<Movie />}></Route>
            <Route path='/buytickets' element={<Theater />}></Route>
            <Route path='/selectSeats' element={<Popup />}></Route>
            <Route path='/seatsAvailability' element={<Seats />}></Route>
            <Route path='/payment' element={<Payment />}></Route>
            <Route path='/paySuccess' element={<Success />}></Route>
          </Routes>
      </BrowserRouter>
      ):(
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signUp' element={<SignUp />}></Route>
            <Route path='*' element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      )}
        
    </>
  )
}

export default Routing