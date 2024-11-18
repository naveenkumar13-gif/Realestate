import React from "react";
import { useState } from "react";
import Residential from "../Card/residential";
import Commercial from "../Card/commercial";
import Apartments from "../Card/apartments";
import OfficeSpace from "../Card/officespace";

function Main() {
  const [activeButton, setActiveButton] = useState("residential");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div id="property">
      <div className="text-center">
        <h1 className="text-[2rem] text-[#000] font-semibold max-sm:text-[1.5rem] ">
          Find the category for you
        </h1>
        <p className="text-[#475569] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          sint iste corporis animi nam molestiae?
        </p>
      </div>
      <div className="flex justify-center mt-[2rem] mb-[2rem] ">
        <span className="bg-[#fff] p-[0.3rem] rounded-[0.3rem] ">
          <button
            className={`bg-[#f3f4f6] text-[1rem] font-semibold mr-[0.3rem] rounded-[0.3rem] px-[1rem] py-[0.3rem]  max-sm:text-[0.7rem] max-sm:px-[0.3rem]
      ${
        activeButton === "residential" ? "bg-black text-white" : "bg-[#f3f4f6]"
      } `}
            onClick={() => handleButtonClick("residential")}
          >
            Residential
          </button>

          <button
            className={`bg-[#f3f4f6] text-[1rem] font-semibold mr-[0.3rem] rounded-[0.3rem] px-[1rem] py-[0.3rem]  max-sm:text-[0.7rem] max-sm:px-[0.3rem] ${
              activeButton === "commercial"
                ? "bg-black text-white"
                : "bg-[#f3f4f6]"
            }`}
            onClick={() => handleButtonClick("commercial")}
          >
            Commercial
          </button>

          <button
            className={`bg-[#f3f4f6] text-[1rem] font-semibold mr-[0.3rem] rounded-[0.3rem] px-[1rem] py-[0.3rem]  max-sm:text-[0.7rem] max-sm:px-[0.3rem] ${
              activeButton === "apartments"
                ? "bg-black text-white"
                : "bg-[#f3f4f6]"
            }`}
            onClick={() => handleButtonClick("apartments")}
          >
            Apartments
          </button>

          <button
            className={`bg-[#f3f4f6] text-[1rem] font-semibold  rounded-[0.3rem] px-[1rem] py-[0.3rem] max-sm:text-[0.7rem] max-sm:px-[0.3rem] ${
              activeButton === "officespace"
                ? "bg-black text-white"
                : "bg-[#f3f4f6] "
            }`}
            onClick={() => handleButtonClick("officespace")}
          >
            Office space
          </button>
        </span>
      </div>
      {activeButton === "residential" && <Residential />}
      {activeButton === "commercial" && <Commercial />}
      {activeButton === "apartments" && <Apartments />}
      {activeButton === "officespace" && <OfficeSpace />}
    </div>
  );
}
export default Main;
