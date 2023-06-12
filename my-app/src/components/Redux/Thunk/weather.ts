import { createAsyncThunk } from "@reduxjs/toolkit";

const secretKey = '23f43a4108747dc15753402bbc1542f4';

export const getWeather = createAsyncThunk('weather/GetWeather', async (city: string) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${secretKey}&units=metric`);
    const weather = await response.json();
    return {temp: weather.main.temp, icon: weather.weather[0].icon, speed: weather.wind.speed, humidity: weather.main.humidity};
  } catch (error) {
    throw error; 
  }
});