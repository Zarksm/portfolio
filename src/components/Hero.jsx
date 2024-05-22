import React from "react";
import Sosmed from "./Sosmed";
import SocialMedia from "./Sosmed";

const Hero = () => {
  return (
    <>
      <div className="w-full">
        <div className="container">
          <div className="max-w-[400px] py-20 ">
            <h1 className="text-6xl tracking-wider">Frontend Developer</h1>
          </div>
        </div>
        <div className="w-full border-b border-t border-slate-600">
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default Hero;
