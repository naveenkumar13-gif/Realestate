import React from "react";
import bgImg from "../../Assets/discover/background-img.jpg";

function Discover() {
  return (
    <div className="mb-[5rem] relative ">
      <img
        src={bgImg}
        alt="bg-img"
        className="w-full h-[35rem] object-cover bg-no-repeat rounded-[1rem]"
      />
      <div className="bg-[#fff] inline-block h-[22rem] w-[24rem] rounded-[1rem] absolute top-[5rem] left-[5rem] p-[2.5rem] max-lg:top-[4rem] max-lg:left-[4rem] max-sm:w-[18rem]  max-sm:top-[3rem] max-sm:left-[0.8rem] max-sm:p-[2rem] ">
        <h3 className="text-[1.5rem] text-[#000] font-bold max-sm:text-[1.3rem]  ">
          <span className="text-[#7F73F1] text-[1.5rem] font-bold block">
            Discover properties
          </span>
          that our improve your life and that of your family
        </h3>
        <p className="mt-[1rem] text-[1rem] text-[#000] max-sm:text-[0.8rem] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          sint iste corporis animi nam molestiae?
        </p>
        <button className="bg-[#000] text-[#fff] px-[0.5rem] py-[0.3rem] rounded-[0.4rem] mt-[2rem] max-sm:mt-[1rem]  ">
          To catalog
        </button>
      </div>
    </div>
  );
}

export default Discover;
