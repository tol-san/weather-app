import SearchBar from "./components/SearchBar";
import bg from "./assets/grizzlybear.jpg";
import WeatherBoard from "./components/WeatherBoard";

function App() {
  return (
    <div
      className="absolute w-full min-h-screen h-screen bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" relative max-w-5xl mx-auto  ">
        <SearchBar />
        <WeatherBoard/>
      </div>
    </div>
  );
}

export default App;
