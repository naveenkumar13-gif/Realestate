import React from "react";
import womenImg from "../../Assets/apartments/women-img.jpg";
import profileImg from "../../Assets/apartments/profile-img.jpg";

function FindApartments() {
  return (
    <div className="bg-[#8D82f1] p-[3rem] rounded-[1rem] max-sm:p-[1.5rem] ">
      <div className="flex  bg-[#fff] rounded-[1rem] max-lg:flex-col  ">
        <div className=" w-[50%] p-[3rem] max-lg:w-full max-sm:p-[1rem] ">
          <h2 className="text-[#000] text-[2rem] font-semibold max-xl:text-[1.5rem] max-sm:text-[1rem] ">
            The best place to discover amazing properties at great prices.are
            you looking to buy or sell a property?Get in touch today
          </h2>
          <button className="text-[#fff] bg-[#8D82f1] px-[1rem] py-[0.5rem] rounded-[0.5rem] mt-[1rem] ">
            Find apartments
          </button>
        </div>

        <div className="w-[50%] relative max-lg:w-full max-lg:p-[3rem] max-lg:pt-0 max-sm:p-[1rem] ">
          <img
            src={womenImg}
            className="rounded-r-[1rem] h-full w-full max-lg:rounded-[1rem]  "
          />
          <div className="bg-[#fff] w-[60%] flex gap-[1rem] h-[5rem] rounded-[0.5rem] p-[1rem] items-center absolute bottom-[2rem] left-[7.5rem] max-xl:w-[70%] max-xl:left-[4rem] max-lg:left-[7.5rem] max-lg:w-[60%] max-lg:bottom-[5rem] max-sm:hidden ">
            <div>
              <img
                src={profileImg}
                alt="profileImg"
                className="rounded-[50%] h-[4rem] w-[4rem] "
              />
            </div>
            <div>
              <p className="text-[#8D82f1] text-[1rem] font-semibold ">
                Congratulations!
              </p>
              <p className="text-[#000] text-[1rem] font-semibold max-xl:text-[0.8rem] max-lg:text-[1rem] ">
                you have rented an aprtment.
              </p>
              <p className="text-[#000] text-[1rem] font-semibold max-xl:text-[0.8rem] ">
                Thank you for choosing us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FindApartments;
