import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import headVillaImage from "../../Assets/home/head-villa.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="flex flex-col h-[100%] bg-[#8D82f1] mb-[4rem] rounded-[1.5rem] pb-[6rem] mt-[2rem] max-sm:pb-[1.5rem]">
      <nav className="flex items-center justify-between py-[2rem] px-[4rem] max-lg:px-[3.2rem] max-lg:py-[1.8rem] max-md:px-[2.8rem] max-md:py-[1.5rem]  max-sm:px-[1.5rem] max-sm:py-[1rem] ">
        <div className="flex items-center gap-2 text-[#fff] text-[1.5rem] ">
          <FontAwesomeIcon icon={faHouse} />
          <h1 className=" font-semibold cursor-pointer ">Homix</h1>
        </div>

      <div className="flex gap-10 text-[#fff] max-lg:hidden max-md:gap-5 ">
          <a className="relative group " href="#home">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px]  bg-[#fff] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="relative group" href="#property">
            Property
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="relative group" href="#blog">
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="relative group" href="#about">
            About
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full"></span>
          </a>
      </div>
        <div>
          <button className="bg-[#000] text-[#fff] rounded-[0.5rem] py-[0.5rem] px-[1rem] max-lg:hidden border border-transparent  hover:bg-transparent hover:border-white ">
            Contact Us
          </button>
        </div>
        <div
          className="hidden max-lg:block text-[24px] text-[#fff] fill-current hover:cursor-pointer"
          onClick={handleClick}
        >
          {open ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </nav>

      {open && (
        <div className="hidden max-lg:flex flex-col gap-4 items-center justify-center text-[#fff] bg-[#A19AE8] py-[2rem] ">
          <a className="relative group" href="#home">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="relative group" href="#property">
            Property
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="relative group" href="#blog">
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="relative group" href="#about">
            About
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fff] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            className="bg-[#000] text-[#fff] rounded-[0.5rem] py-[0.5rem] px-[1rem] border border-transparent  hover:bg-transparent hover:border-white "
            href="#contact"
          >
            Contact Us
          </a>
        </div>
      )}

      <div
        className="flex gap-10 pt-[2rem] max-lg:pt-[1rem] max-lg:flex-col max-lg:items-center"
        id="home"
      >
        <div className=" text-[#fff] pl-[4rem] w-[50%]  max-lg:px-[4rem] max-lg:w-[100%] max-sm:px-[1.5rem] ">
          <h1 className="text-[3rem] font-semibold w-[60%] leading-none mb-[2.5rem] max-xl:text-[2.5rem] max-xl:w-[70%] max-xl:mb-[2rem] max-sm:text-[1.8rem] max-sm:mb-[1rem] ">
            The best place to find your dream house
          </h1>
          <p className="mb-[1.25rem] max-xl:mb-[1rem] max-sm:mb-[0.5rem] ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel qui
            consequuntur at sequi est, recusandae eum, expedita aliquam
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Find your room... "
              className="  mt-[1rem] py-[0.8rem] pl-[0.8rem] pr-[10rem] border-none outline-none rounded-[0.3rem] max-sm:pr-[0.8rem] "
            ></input>

            <p className="text-[#fff] cursor-pointer absolute top-[1.5rem] right-[14rem] bg-[#8D82f1] px-[0.8rem] py-[0.3rem] rounded-[0.2rem] max-xl:right-[5rem] max-lg:right-[15rem] max-sm:hidden ">
              Search
            </p>
          </div>
        </div>

        <div className="pr-[4rem]  w-[50%] max-lg:w-[100%] max-lg:px-[4rem] max-sm:px-[1.5rem]  ">
          <img
            className=" h-full w-full rounded-[1rem]   "
            src={headVillaImage}
          alt="headVillaImage" ></img>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


  /*  colors=8D82f1,7F75E3,7F73F1,A19AE8, */

