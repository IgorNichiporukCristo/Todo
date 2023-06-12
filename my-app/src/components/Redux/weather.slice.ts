import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getWeather } from './Thunk/weather';

interface Weather {
  temp: number;
  icon: string;
  speed: string;
  humidity: string;
}

interface Weathers {
  weather: Weather;
  loading: boolean;
  error: boolean; 
}

const initialState: Weathers = {
  weather: {
    temp: 0,
    icon: '',
    speed: '',
    humidity: '',
  },
  loading: false,
  error: false,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeather.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getWeather.fulfilled, (state, action: PayloadAction<Weather>) => {
      state.weather = action.payload;
      state.loading = false;
      state.error = false;
    })
    builder.addCase(getWeather.rejected, (state) => {
      state.error = true;
      state.loading = false;
    })
  }
});

export default weatherSlice.reducer;