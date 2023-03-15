import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "sample",
  initialState: {
    isAthendicate: false,
    movie:'',
    seats:0,
    booking:[]
  },
  reducers: {
    movieName: (state, action) =>{
      state.movie = action.payload;
    },
    changeAthe: (state, action) =>{
      state.isAthendicate = action.payload;
    },
    seatCount: (state, action) =>{
      state.seats = action.payload;
    },
    seatBook: (state, action) =>{
      state.booking = action.payload
    }
  }
})

export const { movieName, changeAthe, seatCount, seatBook } = Slice.actions;

export default Slice.reducer;