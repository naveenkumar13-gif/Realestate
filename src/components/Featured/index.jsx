import React from "react";
import houseImg1 from "../../Assets/featured/house-1.jpg";
import houseImg2 from "../../Assets/featured/house-2.jpg";

function Featured() {
  const cardsData = [
    {
      image: houseImg1,
      prize: "$730 000",
      availability: "For rent",
      availabilityType: "RENT",
      title: "The Queen Inside-Type 52",
      content:
        "Lorem jdf jdshfj jhkjfhs jfjskf hhfueyuw mouli rithik nithish thala ranga hevin kjfh oqw n iowof sjas asdfghjk fghj.",
      rooms: [
        { label: "3 beds" },
        {
          label: "2 bathrooms",
        },
        {
          label: "100 m2",
        },
      ],
    },
    {
      image: houseImg2,
      prize: "$730 000 ",
      availability: "For sale",
      availabilityType: "SALE",

      title: "The Queen Inside-Type 52",
      content:
        "Lorem jdf jdshfj jhkjfhs jfjskf hhfueyuw mouli rithik nithish thala ranga hevin kjfh oqw n iowof sjas asdfghjk fghj.",
      rooms: [
        { label: "3 beds" },
        {
          label: "2 bathrooms",
        },
        {
          label: "100 m2",
        },
      ],
    },
  ];

  return (
    <div className="px-[3rem] mb-[5rem] max-sm:px-[0]">
      <div className="flex justify-between mb-[2rem] items-center ">
        <h1 className="text-[2rem] font-semibold max-sm:text-[1rem] ">
          Featured properties
        </h1>
        <button className="text-[#fff] bg-[#7F75E3] px-[1.5rem] py-[0.5rem] rounded-[0.5rem] max-sm:px-[1rem] max-sm:py-[0.3rem] ">
          Explore all listings
        </button>
      </div>

      <div className="mb-[2rem] ">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex bg-[#ffffff] mb-[2rem] shadow-2xl rounded-[1rem] max-md:flex-col  "
          >
            <div className="w-1/2 max-md:w-full max-md:p-[2rem] max-sm:p-[0.5rem] ">
              <img
                src={card.image}
                alt="house "
                className="w-full h-[18rem] object-cover rounded-l-[1rem] max-md:rounded-[1rem] "
              />
            </div>
            <div className="w-1/2 p-[2rem] max-lg:p-[1.5rem] max-md:w-full max-md:px-[2rem] max-sm:p-[1rem] ">
              <div className="flex justify-between items-center">
                <span className="text-[1.5rem] font-semibold text-[#7F73F1] max-lg:text-[1.2rem] ">
                  {card.prize}
                  <span className="text-[#9ca3af] text-[1rem] ">
                    /per month
                  </span>
                </span>

                {card.availabilityType === "RENT" ? (
                  <span className="bg-[#7F73F1] text-[#fff] text-[1rem] cursor-pointer rounded-[2rem] px-[0.5rem] py-[0.2rem] max-md:text-[0.7rem]  ">
                    {card.availability}
                  </span>
                ) : (
                  <span className="text-[#7F73F1] text-[1rem] bg-[#ede9fe] cursor-pointer  rounded-[2rem] px-[0.5rem] py-[0.2rem] max-sm:text-[0.7rem] ">
                    {card.availability}
                  </span>
                )}
              </div>
              <h2 className="mb-[0.8rem] text-[1.2rem] font-bold max-sm:mb-[0.5rem] ">
                {card.title}
              </h2>
              <p className="text-[#94a3b8] ">{card.content} </p>

              <div className="mt-[2rem] max-sm:mt-[1rem] ">
                {card.rooms.map((room, roomIndex) => (
                  <span
                    key={roomIndex}
                    className="text-[#7F73F1] text-[1rem] bg-[#ede9fe] cursor-pointer font-semibold mr-[1rem] rounded-[0.3rem] p-[0.5rem] max-lg:text-[0.7rem]   "
                  >
                    {room.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
