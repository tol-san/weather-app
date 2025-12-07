import rainyDay from "../assets/rainy-day.png";
const Forecast = () => {
  return (
    <div className="flex flex-col items-center mt-16 hover:bg-white/10 bg-white/20  text-white p-2 md:p-4 shadow-2xl rounded-xl backdrop-blur-xl  border border-white/20 duration-300">
      <h4 className="font-medium mb-1">Wednesday</h4>
      <span className="mb-2 block ">
        <img src={rainyDay} className="w-16 h-16 md:w-24 md:h-24 " />
      </span>
      <p className="text-center">
        21 <span>°C</span>
      </p>
    </div>
  );
};

export default Forecast;
