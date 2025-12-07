import SearchBar from "./components/SearchBar";
import bg from "./assets/grizzlybear.jpg";
import WeatherBoard from "./components/WeatherBoard";
import ForecastList from "./components/ForecastList";
import { useState, useEffect } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    let isMounted = true;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        async function fetchWeather() {
          const API_KEY = "3688e438ae9f6f6124835aff7c2ae7b4";
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

          try {
            const response = await fetch(url);
            if (!response.ok)
              console.log(`Response status: ${response.status}`);
            const result = await response.json();
            if (isMounted) setWeather(result);
          } catch (error) {
            console.log(error.message);
            if (isMounted) setWeather(null);
          } finally {
            if (isMounted) setLoading(false);
          }
        }
 
        fetchWeather(latitude, longitude);
      },
      (error) => {
        console.log(error.message);
        setLoading(false);
        setWeather(null);
      },
    );
    return () => {
      isMounted = false;
    };
  }, []);


  console.log(weather)
  if (loading)
    return console.log("Loading");
  if (!weather || weather.cod !== 200) 
    return console.log("Could not fetching weather.")
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="
        w-full min-h-screen h-screen
        bg-center bg-cover bg-no-repeat
        absolute
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          relative
        "
      >
        <SearchBar  />
        <WeatherBoard currentWeather={weather} />
        <ForecastList />
      </div>
    </div>
  );
}

export default App;
