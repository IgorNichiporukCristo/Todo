import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getWeather } from "../Redux/Thunk/weather";
import { RootState, useAppDispatch } from "../Redux/types/type";
import { useForm, SubmitHandler } from "react-hook-form";
import {AiOutlineSearch } from "react-icons/ai";
import style from "./Weather.module.css";

type Input = {
  city: string;
};

function Weather() {
  const dispatch = useAppDispatch();
  const weather = useSelector((state: RootState) => state.weatherSlice.weather);
  const loading = useSelector((state: RootState) => state.weatherSlice.loading);
  const error = useSelector((state: RootState) => state.weatherSlice.error);
  const { register, handleSubmit } = useForm<Input>();

  useEffect(() => {
    dispatch(getWeather("Brest"));
  }, []);

  const onSubmit: SubmitHandler<Input> = (data) => {
      dispatch(getWeather(data.city));
  };

  return (
    <div className={style.containerWeather}>
      {!loading ? (
        <div className={style.containerContact}>
          <form onSubmit={handleSubmit(onSubmit)} className={style.formWeather}>
            <input
              className={style.inputWeather}
              placeholder="Введите город"
              type="text"
              {...register("city")}
              required
            />
            <button className={style.button} type="submit">
              <AiOutlineSearch />
            </button>
          </form>
          {error ? (
            <h1>город не найден</h1>
          ) : (
            <>
              <p className={style.tempContainer}>
              <span>{`Температура: ${Math.round(weather.temp)} °C`}</span>
              <img className={style.iconWeather}
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt="Weather Icon"
              />
              </p>
             
              <span>{`Скорость ветра: ${weather.speed} m/s`}</span>
              <span>{`Влажность: ${weather.humidity} %`}</span>
            </>
          )}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default Weather;
