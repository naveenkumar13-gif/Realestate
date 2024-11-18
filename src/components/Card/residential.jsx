import React from "react";
import card1 from "../../Assets/cards/Residential/card-1.jpg";
import card2 from "../../Assets/cards/Residential/card-2.jpg";
import card3 from "../../Assets/cards/Residential/card-3.jpg";
import card4 from "../../Assets/cards/Residential/card-4.jpg";
import card5 from "../../Assets/cards/Residential/card-5.jpg";
import card6 from "../../Assets/cards/Residential/card-6.jpg";

function Card() {
  const residentialCardData = [
    {
      image: card1,
      availability: "For rent",
      availabilityType: "RENT",
      prize: "$384000",
      title: "The Queen Inside-Type 52",
      place: "San Francisco",
      rooms: [
        { label: "3 beds" },
        { label: "2 bathrooms" },
        { label: "100 m2" },
      ],
    },
    {
      image: card2,
      availability: "For rent",
      availabilityType: "RENT",
      prize: "$450000",
      title: "The Queen Inside-Type 52",
      place: "San Diego",
      rooms: [
        { label: "3 beds" },
        { label: "2 bathrooms" },
        { label: "100 m2" },
      ],
    },
    {
      image: card3,
      availability: "For sale",
      availabilityType: "SALE",
      prize: "$730000",
      title: "The Queen Inside-Type 52",
      place: "Los Angeles",
      rooms: [
        { label: "4 beds" },
        { label: "4 bathrooms" },
        { label: "100 m2" },
      ],
    },
    {
      image: card4,
      availability: "For sale",
      availabilityType: "SALE",
      prize: "$12000000",
      title: "The Queen Inside-Type 52",
      place: "San Francisco",
      rooms: [
        { label: "5 beds" },
        { label: "4 bathrooms" },
        { label: "100 m2" },
      ],
    },
    {
      image: card5,
      availability: "For sale",
      availabilityType: "SALE",
      prize: "$768000",
      title: "The Queen Inside-Type 52",
      place: "San Francisco",
      rooms: [
        { label: "3 beds" },
        { label: "3 bathrooms" },
        { label: "100 m2" },
      ],
    },
    {
      image: card6,
      availability: "For rent",
      availabilityType: "RENT",
      prize: "$120000",
      title: "The Queen Inside-Type 52",
      place: "San Jose",
      rooms: [
        { label: "3 beds" },
        { label: "2 bathrooms" },
        { label: "100 m2" },
      ],
    },
  ];
  return (
    <div className="px-[3rem] mb-[5rem] max-sm:px-0 ">
      <div className=" grid grid-cols-3 gap-[1rem] max-lg:grid-cols-2 max-sm:grid-cols-1 ">
        {residentialCardData.map((card, index) => (
          <div key={index} className="bg-[#fff] shadow-2xl rounded-[0.5rem] ">
            <div className="p-[0.5rem] relative ">
              <img
                src={card.image}
                className="w-full h-[15rem] object-cover rounded-[0.5rem] "
                alt="card-img"
              />
              {card.availabilityType === "RENT" ? (
                <span className="bg-[#7F73F1] text-[#fff] cursor-pointer absolute top-[2rem] left-[2rem] rounded-[2rem] px-[0.5rem] py-[0.2rem] max-xl:text-[0.9rem] ">
                  {card.availability}
                </span>
              ) : (
                <span className="text-[#7F73F1] text-[1rem] bg-[#ede9fe] cursor-pointer absolute top-[2rem] left-[2rem] rounded-[2rem] px-[0.5rem] py-[0.2rem]">
                  {card.availability}
                </span>
              )}
            </div>
            <div className="p-[1rem] ">
              <span className="text-[1.5rem] font-semibold text-[#7F73F1]">
                {card.prize}
              </span>
              <span className="text-[#9ca3af] text-[1rem]">/per month</span>
              <h2 className="text-[1.2rem] font-bold ">{card.title}</h2>
              <p className="text-[#94a3b8] ">{card.place} </p>
              <hr className="mt-[1.5rem] max-sm:mt-[0.5rem] "></hr>
              <div className="mt-[2rem] flex gap-[1rem] max-xl:gap-[0.8rem] max-sm:mt-[1rem] ">
                {card.rooms.map((room, roomIndex) => (
                  <span
                    key={roomIndex}
                    className="text-[#7F73F1] text-[1rem] bg-[#ede9fe] cursor-pointer font-semibold  rounded-[2rem] px-[0.8rem] py-[0.3rem] max-xl:text-[0.8rem] max-xl:px-[0.5rem] max-xl:rounded-[1.5rem] max-sm:text-[1rem] "
                  >
                    {room.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[2rem] text-center ">
        <button className="text-[#fff] bg-[#7F75E3] px-[1.5rem] py-[0.5rem] rounded-[0.5rem]">
          Explore all listings
        </button>
      </div>
    </div>
  );
}
export default Card;
