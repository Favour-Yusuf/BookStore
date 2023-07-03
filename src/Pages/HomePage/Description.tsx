import React from "react";
import des from "../../assets/pexels-helena-descrip-711009.jpg";
import des2 from "../../assets/pexels-des-936133.jpeg";

const Description: React.FC = () => {
  return (
    <div className=" h-[90vh] w-[100%] flex flex-col items-center justify-between ">
      <div className=" h-[40vh] w-[100%] flex items-center justify-center">
        <div className=" h-[40vh] w-[90%] flex">
          <div className=" h-[100%] w-[100%] ">
            <p className="text-3xl font-semibold leading-8 font-serif text-white  ">
              Connect with Fellow Book Enthusiasts
            </p>
            <p className="font-2xl leading-8 text-center text-white align-bottom">
              Join a community of passionate readers and writers who share your
              love for books. Engage in discussions, share your thoughts, and
              connect with like-minded individuals who appreciate the power of
              storytelling. From book clubs to interactive forums, Ink&Pages
              offers endless opportunities to connect with fellow book
              enthusiasts.
            </p>
          </div>
          <div className="h-[100%] w-[100%] ">
            <img
              src={des}
              alt=""
              className=" h-[100%] w-[100%]  object-contain "
            />
          </div>
        </div>
      </div>
      <div className=" h-[40vh] w-[100%] flex items-center justify-center">
        <div className=" h-[40vh] w-[90%] flex">
          <div className="  h-[100%] w-[100%] ">
            <img
              src={des2}
              alt=""
              className=" h-[100%] w-[100%] object-contain "
            />
          </div>
          <div className=" h-[100%] w-[100%] ">
            <p className="text-3xl font-semibold leading-8 font-serif text-white ">
              Discover New Authors
            </p>
            <p className="font-2xl leading-8 text-center align-bottom text-white">
              Discover emerging talents and established authors from various
              genres. From gripping thrillers to heartwarming romance, from
              mind-bending science fiction to captivating non-fiction, our
              platform celebrates diverse voices and explores the rich tapestry
              of literature. Get to know the authors behind the stories and gain
              insights into their creative journeys through our exclusive
              interviews and features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
