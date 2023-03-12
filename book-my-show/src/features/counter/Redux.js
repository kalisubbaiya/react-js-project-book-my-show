import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";

export const Redux = configureStore({
    reducer: {
        sample: Slice,
    }
})