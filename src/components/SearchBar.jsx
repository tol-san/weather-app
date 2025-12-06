import { MapPin, Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (

    <input
        className="block mx-auto mt-16 bg-white/20 hover:bg-white/30 transition-all hover:focus:scale-110 text-white focus:outline-0  duration-200  shadow-2xl px-4 py-2 w-sm rounded-xl backdrop-blur-xl  border border-white/20 placeholder:text-white/80"
        placeholder="Search a city...."
        type="text"
      />
  );
};

export default SearchBar;
