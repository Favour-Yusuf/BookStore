import React from "react";
import pro1 from "../../assets/download atomic.jpg";
import pro2 from "../../assets/download psychol.jpg";
import pro3 from "../../assets/download subtle.jpg";
import pro4 from "../../assets/images product 1.jpg";

const Products: React.FC = () => {
  return (
    <div className=" h-[70vh] w-[100%] bg-cyan-800 flex items-center justify-center  ">
      <div className="h-[100%] w-[90%] grid grid-cols-2 grid-rows-2 ">
        <div>
          <img src={pro1} alt="" />
        </div>
        <div>
          <img src={pro2} alt="" />
        </div>
        <div>
          <img src={pro3} alt="" />
        </div>
        <div>
          <img src={pro4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Products;
