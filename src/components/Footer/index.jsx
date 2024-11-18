import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="px-[3rem] mt-[5rem] max-sm:px-0" id="contact">
      <div className="bg-[#ede9fe] rounded-[1rem] p-[2rem] grid grid-cols-6 max-lg:grid-cols-3 max-sm:grid-cols-1 ">
        <div className="flex flex-col gap-[1rem] max-xl:text-[0.8rem] max-sm:col-span-1 ">
          <h5 className="text-[#7b6cff] text-[1rem] font-semibold max-sm:text-[0.8rem] ">
            Features
          </h5>
          <p className="text-[#6b7280]">Home V1</p>
          <p className="text-[#6b7280]">Home V2</p>
          <p className="text-[#6b7280]">About</p>
          <p className="text-[#6b7280]">Catalog</p>
          <p className="text-[#6b7280]">Cart page</p>
          <p className="text-[#6b7280]">Blog V1</p>
          <p className="text-[#6b7280]">Blog V2</p>
          <p className="text-[#6b7280]">Blog post V1</p>
        </div>
        <div className="mt-[2.5rem] flex flex-col gap-[1rem] max-xl:text-[0.8rem] max-sm:col-span-1">
          <p className="text-[#6b7280]">FAQs</p>
          <p className="text-[#6b7280]">Blog post V2</p>
          <p className="text-[#6b7280]">Contacts V1</p>
          <p className="text-[#6b7280]">Contacts V2</p>
          <p className="text-[#6b7280]">Member page V1</p>
          <p className="text-[#6b7280]">Member page V2</p>
          <p className="text-[#6b7280]">Member cards V1</p>
          <p className="text-[#6b7280]">Member cards V2</p>
        </div>
        <div className="flex flex-col gap-[1rem] max-xl:text-[0.8rem] max-sm:col-span-1">
          <h5 className="text-[#7b6cff] text-[1rem] font-semibold max-sm:mt-[2rem] max-sm:text-[0.8rem]">
            Utility pages
          </h5>
          <p className="text-[#6b7280]">404 not found</p>
          <p className="text-[#6b7280]">Changelog</p>
          <p className="text-[#6b7280]">Sign in </p>
          <p className="text-[#6b7280]">Sign up</p>
          <p className="text-[#6b7280]">Checkout</p>
          <p className="text-[#6b7280]">Forgot password</p>
          <p className="text-[#6b7280]">Email confirmation</p>
          <p className="text-[#6b7280]">UI-kit</p>
        </div>

        <div className="col-span-3 max-xl:text-[0.8rem] max-sm:col-span-1">
          <h5 className="text-[#7b6cff] text-[1rem] font-semibold max-lg:mt-[1rem] max-sm:text-[0.8rem]">
            Keep yourself up to date
          </h5>
          <p className="text-[#6b7280] mt-[1rem] mb-[1rem] max-lg:mt-0 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quos odio ipsa
          </p>
          <div className="relative ">
            <input
              type="text"
              placeholder="Enter your email address"
              className="px-[1rem] py-[0.8rem] pr-[10rem] rounded-[0.3rem] max-lg:pr-[8rem] max-sm:pr-[6rem] max-sm:px-[0.5rem] "
            ></input>
            <button className="text-[#fff] bg-[#8D82f1] px-[0.8rem] py-[0.3rem] rounded-[0.3rem] absolute right-[13.5rem] top-[0.5rem] max-xl:right-[6rem] max-lg:right-[17rem] max-sm:right-10 max-sm:px-[0.5rem] ">
              Subscribe
            </button>
          </div>
          <hr className="mt-[2rem] bg-gray-300 h-[1.5px] max-lg:mt-[1.5rem] "></hr>
          <div className="flex gap-[2rem] mt-[3rem] max-lg:mt-[1.5rem] max-sm:flex-col max-sm:gap-[1rem] ">
            <div>
              <p className="text-[#8D82f1] font-semibold">Contact us:</p>
              <p className="text-[#000] font-semibold">hello@homix.com</p>
            </div>
            <div>
              <p className="text-[#8D82f1] font-semibold">Phone:</p>
              <p className="text-[#000] font-semibold">(120)450-6589</p>
            </div>
            <div>
              <p className="text-[#8D82f1] font-semibold">Location:</p>
              <p className="text-[#000] font-semibold">San Francisco,CA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between py-[3rem] max-sm:flex-col max-sm:items-start max-sm:py-[2rem]  ">
        <div className="text-[1.5rem] text-[#7b6cff] flex items-center gap-[1rem] max-lg:text-[1.2rem]   ">
          <FontAwesomeIcon icon={faHouse} />
          <h1 className=" font-semibold cursor-pointer ">Homix</h1>
        </div>
        <div>
          <p className="font-semibold max-lg:text-[0.8rem]  ">
            ©️ Copyright 2024 Homix | Designed by Digital Butlers-Powered by
            Webflow
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
