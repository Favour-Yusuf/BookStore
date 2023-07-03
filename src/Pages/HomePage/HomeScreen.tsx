import React from "react";
import { CallToAction, Description, Hero, Products } from ".";

const HomeScreen: React.FC = () => {
  return (
    <div>
      <Hero />
      <CallToAction />
      <br />
      <br />
      <Description />
      <Products />
    </div>
  );
};

export default HomeScreen;
