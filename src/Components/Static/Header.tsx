import React from "react";

const Header: React.FC = () => {
  return (
    <div className=" h-20 w-full bg-white flex justify-center items-center ">
      <div className="h-20 w-[90%]  bg-white flex justify-between items-center ">
        <div className="">
          <p className="text-base font-medium">Ink&Pages</p>
        </div>
        <div className="flex space-x-10">
          <p>Catalogue</p>
          <p>Contact</p>
          <p>Page</p>
          <p>Read</p>
        </div>
        <button className="h-[40px] w-[150px] bg-red-500 rounded-lg text-white">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Header;
