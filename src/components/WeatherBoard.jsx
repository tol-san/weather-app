import React from "react";
import sun from "../assets/sun.png";

const WeatherBoard = () => {
  return (
    <div className=" flex flex-col lg:flex-row mx-4 mt-16 hover:bg-white/20 bg-white/30  text-white  shadow-2xl  rounded-xl backdrop-blur-xl  border border-white/20 duration-300">
      <span>
        <img className="w-32 mx-auto lg:w-56 shrink-0" src={sun} alt="sun icon" />
      </span>
      <div className=" text-center lg:text-left">
        <p>Today</p>
        <h2>New York</h2>
        <p>
          Temperature: 17 <span>°C</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherBoard;
