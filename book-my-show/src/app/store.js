import { configureStore } from '@reduxjs/toolkit';
import Slice from '../features/counter/Slice';

export const Store = configureStore({
  reducer: {
    sample: Slice,
  },
});
