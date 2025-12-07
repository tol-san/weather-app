import React from "react";


const WeatherBoard = ({ currentWeather }) => {
  let iconPath = `src/assets/icons/${currentWeather.weather[0].icon}.png`
  console.log(iconPath)
  return (
    <div className=" flex items-center flex-col md:flex-row mx-4 mt-16 hover:bg-white/10 bg-white/30  text-white  gap-4 p-12 shadow-2xl  rounded-xl backdrop-blur-xl  border border-white/20 duration-300">
      <span>
        <img
          className="w-32 md:mr-12 mx-auto md:w-56 shrink-0"
          src={iconPath.toString()}
          alt="sun icon"
        />
      </span>
      <div className=" text-center md:text-left">
        <p className="  text-white/80 text-xl mb-1">Today</p>
        <h2 className=" text-4xl md:text-5xl font-bold mb-3">{currentWeather.name}</h2>
        <p className=" text-md font-medium">
          Temperature: {currentWeather.main.temp} <span>°C</span>
        </p>
        <p className=" text-md">
          {currentWeather.weather[0].main}
        </p>
      </div>
    </div>
  );
};

export default WeatherBoard;
