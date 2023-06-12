import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import postsSlice from './posts.slice';
import weatherSlice from './weather.slice';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
 const store = configureStore({
  reducer: {
    postsSlice,
    weatherSlice
  },

});
export default store;

