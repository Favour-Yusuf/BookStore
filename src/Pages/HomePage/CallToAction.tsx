import React from "react";
import pic1 from "../../assets/pexels-dom-j-45717.jpg";
import pic2 from "../../assets/daria-nepriakhina-xY55bL5mZAM-unsplash.jpg";
import pic3 from "../../assets/studio-media-9DaOYUYnOls-unsplash.jpg";

const CallToAction: React.FC = () => {
  return (
    <div className=" h-[70vh] w-[100%] flex justify-center items-center ">
      <div className=" h-[70vh] w-[90%]  ">
        <div className=" h-[70%] w-[100%] flex items-center justify-center gap-[30px]">
          <div className=" h-[250px] w-[250px] shadow-xl rounded-xl ">
            <img src={pic1} alt="books" className="h-[100%] rounded-xl" />
          </div>
          <div className=" h-[250px] w-[250px] shadow-xl rounded-xl">
            <img
              src={pic2}
              alt="books"
              className="h-[100%] w-[100%] rounded-xl"
            />
          </div>
          <div className=" h-[250px] w-[250px] shadow-xl rounded-xl ">
            <img
              src={pic3}
              alt="books"
              className="h-[100%] w-[100%] rounded-xl"
            />
          </div>
        </div>
        <div className=" h-[30%] w-[100%] flex flex-col justify-center items-center space-y-6 ">
          <p className=" text-2xl font-semibold text-white ">
            Start Your Bookish Journey Today!
          </p>
          <button className="h-[40px] w-[150px] bg-red-500 rounded-lg text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
