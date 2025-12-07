import { MapPin, Search } from "lucide-react";
import React from "react";

const SearchBar = () => {


  return (
    <div
      className="
       relative w-full max-w-sm mx-auto mt-16
      "
    >
      <input
        placeholder="Search a city...."
        type="text"
        className="
          block
          w-full
          mx-auto px-4 py-2
          text-white
          bg-white/20
          rounded-xl border border-white/20
          transition-all shadow-2xl
          hover:bg-white/30 focus:scale-110 hover:scale-110 focus:outline-0 duration-200 backdrop-blur-xl placeholder:text-white/80
        "
      />

    </div>
  );
};

export default SearchBar;
