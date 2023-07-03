import React from "react";

const Footer: React.FC = () => {
  return (
    <div className=" h-[50vh] w-[100%] text-white flex justify-center items-center">
      <div className="h-[100%] w-[90%] flex ">
        <div className="h-[100%] w-[50%]">
          <p className="font-semibold ">Signup to News Letter</p>
          <input placeholder="email" type="email" />
          <button className=" h-[40px] w-[150px] bg-white rounded-lg ">
            Sign Up
          </button>
        </div>
        <div className="h-[100%] w-[50%] flex justify-between ">
          <div className=" space-y-7">
            <p className="font-bold">Menu</p>
            <p>Home</p>
            <p>Contact Us</p>
            <p>Donate Blood</p>
          </div>
          <div className=" space-y-7">
            <p className="font-bold">Menu</p>
            <p>Home</p>
            <p>Contact Us</p>
            <p>Donate Blood</p>
          </div>
          <div className=" space-y-7">
            <p className="font-bold">Menu</p>
            <p>Home</p>
            <p>Contact Us</p>
            <p>Donate Blood</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
