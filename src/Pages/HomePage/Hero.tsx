import React from "react";
// import hero from "../../assets/pexels-photo-1907785.jpeg";

const Hero: React.FC = () => {
  return (
    <div className=" h-full w-[100%] bg-[url('./src/assets/pexels-photo-1907785.jpeg')]  ">
      <div className=" h-[100%] w-[100%] opacity-80 bg-slate-700 flex items-center justify-center py-10">
        <div className=" h-[100%] w-[90%] ">
          <p className=" text-[60px] font-extrabold text-white">
            Explore a World of Books
          </p>
          <p className=" text-[30px] text-white w-[50%] ">
            Unleash your love for literature and join the vibrant community at
            Ink&Pages! Explore, engage, and immerse yourself in our world of
            book reviews, interviews, and captivating articles. Dive in now and
            let your imagination run wild!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
