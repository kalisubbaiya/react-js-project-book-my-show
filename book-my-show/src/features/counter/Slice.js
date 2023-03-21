import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "sample",
  initialState: {
    isAthendicate: false,
    movie: "",
    theater: "",
    time: "",
    date: "",
    month: "",
    seatBooked: [],
    seats: 0,
    amount: "",
    booking: [],
  },
  reducers: {
    movieName: (state, action) => {
      state.movie = action.payload;
    },
    changeAthe: (state, action) => {
      state.isAthendicate = action.payload;
    },
    seatCount: (state, action) => {
      state.seats = action.payload;
    },
    seatBook: (state, action) => {
      state.booking = action.payload;
    },
    theaterName: (state, action) => {
      state.theater = action.payload;
    },
    showTime: (state, action) => {
      state.time = action.payload;
    },
    seatNo: (state, action) => {
      state.seatBooked = action.payload;
    },
    payAmount: (state, action) => {
      state.amount = action.payload;
    },
    showDate: (state, action) => {
      state.date = action.payload;
    },
    showMonth: (state, action) => {
      state.month = action.payload;
    },
  },
});

export const {
  movieName,
  changeAthe,
  seatCount,
  seatBook,
  theaterName,
  showTime,
  showDate,
  showMonth,
  seatNo,
  payAmount,
} = Slice.actions;

export default Slice.reducer;
