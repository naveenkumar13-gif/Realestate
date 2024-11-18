import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import employee1 from "../../Assets/team/employee-1.jpg";
import employee2 from "../../Assets/team/employee-2.jpg";
import employee3 from "../../Assets/team/employee-3.jpg";

function Accordian() {
  const faqs = [
    {
      title: "What are the benefits of investing in real estate?",
      text: "Investing in real estate offers numerous advantages, including potential for long-term appreciation, passive income through rental properties, tax benefits such as depreciation deductions, and a hedge against inflation.",
    },
    {
      title: "How do I determine the right type of property to invest in?",
      text: "Choosing the right property depends on your investment goals, risk tolerance, and market conditions. Factors to consider include location, property type (residential, commercial, etc.), potential for rental income or resale value, and your budget.",
    },
    {
      title: "What should I look for when buying a home for my family?",
      text: "When buying a home for your family, it's important to consider factors such as location (proximity to schools, amenities, and work), size of the property, neighborhood safety, school districts, future resale value, and overall livability of the house.",
    },
    {
      title: "How can I increase the value of my property before selling it?",
      text: "There are several ways to enhance the value of your property, including making cosmetic improvements like fresh paint, landscaping, updating kitchens and bathrooms, improving energy efficiency, and addressing any structural issues.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  function handleClick(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="px-[3rem] max-sm:px-0" id="about">
      <div className="text-center mb-[3rem] ">
        <h1 className="text-[2rem] font-bold max-sm:text-[1.5rem] ">
          Frequently asked questions
        </h1>
        <p className="text-[#475569]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          mollitia, a et tempora sapiente quod.
        </p>
      </div>

      <div>
        {faqs.map((faqs, index) => (
          <div key={index}>
            <div className="bg-[#ffffff] shadow-xl rounded-[0.5rem] mb-[1rem] px-[2rem] py-[1rem] flex justify-between max-sm:px-[1rem] " onClick={() => handleClick(index)}>
              <div>
                <h4 className="text-[1.3rem] text-[#000] font-semibold max-sm:text-[1rem] ">
                  {faqs.title}
                </h4>
                <div>
                  {openIndex === index && (
                    <p className="text-[1rem] text-[#94a3b8] mt-[1rem] ">
                      {faqs.text}
                    </p>
                  )}
                </div>
              </div>
              <span
                className="flex items-center justify-end "
                
              >
                {openIndex === index ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#ede9fe] rounded-[1rem] p-[3rem] mt-[4rem] mb-[5rem] max-sm:p-[1.5rem] ">
        <div className="flex items-center justify-center">
          <img
            src={employee1}
            alt="team-img"
            className="rounded-[50%] h-[3rem] w-[3rem] border-[1px] border-[#fff]  "
          />
          <img
            src={employee2}
            alt="team-img"
            className="rounded-[50%] h-[3rem] w-[3rem] border-[1px] border-[#fff] ml-[-1rem] "
          />
          <img
            src={employee3}
            alt="team-img"
            className="rounded-[50%] h-[3rem] w-[3rem] border-[1px] border-[#fff] ml-[-1rem] "
          />
        </div>
        <div className="text-center mt-[1rem] ">
          <h2 className="text-[#7b6cff] text-[2rem] font-semibold ">
            Still have questions?
          </h2>
          <p className="text-[#6b7280] font-semibold">
            Can't find the answer your'e looking for?Please chat to our friendly
            team.
          </p>
          <button className="text-[#fff] font-semibold bg-[#8D82f1] px-[0.8rem] py-[0.3rem] rounded-[0.4rem] mt-[1.5rem] ">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
