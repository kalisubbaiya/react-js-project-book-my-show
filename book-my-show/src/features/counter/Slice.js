import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "sample",
  initialState: {
    isAthendicate: false,
    movie:'',
  },
  reducers: {
    movieName: (state, action) =>{
      state.movie = action.payload;
    },
    changeAthe: (state, action) =>{
      state.isAthendicate = action.payload;
    }
  }
})

export const { movieName, changeAthe } = Slice.actions;

export default Slice.reducer;