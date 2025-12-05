import grizzlybear from "./assets/grizzlybear.jpg";
import SearchBar from "./components/SearchBar";
import TemperatureToggle from "./components/TemperatureToggle";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className=" absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${grizzlybear})` }}
      >
        <div className=" absolute inset-0 bg-linear-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40 "></div>
      </div>
      <div className=" relative container mx-auto px-4 py-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="mb-8">
              <h1 className="text-5xl text-white md:text-7xl font-bold  mb-4 drop-shadow-2xl tracking-tight">
                Weather{" "}
                <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ">
                  Pro
                </span>
              </h1>
              <p className="text-lg text-white/80 md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Experince weather like never before with real-time data,
                beautiful visuals, and precise foreceasts for any location worl
                wide
              </p>
            </div>
            <div className=" flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6 mb-12">
                <SearchBar/>
                <TemperatureToggle/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
