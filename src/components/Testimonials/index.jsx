import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import CustomerImg from "../../Assets/testimonials/customer-img.jpg";
import Avatar1 from "../../Assets/testimonials/Avatar/avatar-1.jpg";

const quotes = [
  "People now recognise that having a good performance conversation means that something happens as a result.",
  "Ensuring utmost customer satisfaction is our topmost priority, driving every pivotal business decision we make.",
  "Every interaction with a customer is invaluable opportunity to craft a memorable experience that resonates.",
];

function Testimonial() {
  const [step, setStep] = useState(1);

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  return (
    <div
      className="bg-[#8D82f1] mb-[5rem] rounded-[1rem] w-full flex max-lg:flex-col"
      id="blog"
    >
      <div className="w-[50%] p-[4rem] max-xl:p-[3rem] max-lg:w-full max-sm:p-[1.5rem] ">
        <h3 className="text-[2rem] font-semibold text-[#fff] max-xl:text-[1.5rem] max-sm:text-[1.3rem] ">
          <span className="text-[#fff] ">&#10077;</span>
          {quotes[step - 1]}
          <span className="text-[#fff]">&#10078;</span>
        </h3>
        <p className="text-[#e2e8f0] mt-[1rem] ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          voluptate ea adipisci illum consequuntur ex saepe inventore vero
        </p>
        <button className="mt-[2rem] flex items-center gap-[0.5rem] ">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className={`text-[#7F75E3] px-[0.8rem] py-[0.5rem] rounded-[0.4rem] ${
              step === 1 ? "bg-[#d1d5db]" : "bg-white"
            }`}
            onClick={handlePrevious}
            disabled={step === 1}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`text-[#7F75E3] px-[0.8rem] py-[0.5rem] rounded-[0.4rem] ${
              step === 3 ? "bg-[#d1d5db]" : "bg-white"
            }`}
            onClick={handleNext}
            disabled={step === 3}
          />
        </button>
      </div>

      <div className="w-[50%] p-[4rem] relative max-xl:p-[3rem] max-lg:w-full max-lg:pt-0 max-lg:pb-[4rem] max-sm:p-[1.5rem] max-sm:pt-0">
        <img src={CustomerImg} alt="customer-img" className="rounded-[1rem]" />
        <div className="bg-[#fff] rounded-[0.5rem] w-[50%] h-[5rem] px-[2rem] py-[1rem] flex gap-[1rem] items-center absolute bottom-[1.5rem] left-[10rem] max-xl:h-[4rem] max-xl:px-[1.5rem] max-xl:py-[0.8rem] max-xl:bottom-[2.5rem] max-xl:left-[7.5rem] max-lg:bottom-[2rem] max-lg:left-[11rem] max-lg:px-[2rem] max-lg:py-[1rem] max-lg:gap-[3rem] max-sm:hidden ">
          <div>
            <h5 className="text-[1.3rem] font-extrabold max-xl:text-[1rem] max-lg:font-semibold">
              Kristin Watson
            </h5>
            <p className="text-[0.8rem] max-xl:text-[0.7rem]">
              Product manager at joon
            </p>
          </div>
          <div>
            <img
              src={Avatar1}
              alt="avatar-1"
              className="h-[4rem] w-[4rem] bg-[#8D82f1] rounded-[50%] max-xl:h-[3rem] max-xl:w-[3rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
