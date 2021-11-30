import React from "react";
import "./Socialbtns.css";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsApple, BsGoogle } from "react-icons/bs";
import { DiYahooSmall } from "react-icons/di";

function Socialbtns() {
  return (
    <>
      <div className="Socialbtns bg-dark rounded shadow-lg text-center">
        <div className="btn btnIcon m-2 facebook">
          <CgFacebook />
        </div>
        <div className="btn btnIcon m-2 twitter">
          <AiOutlineTwitter />
        </div>
        <div className="btn btnIcon m-2 apple">
          <BsApple />
        </div>
        <div className="btn btnIcon m-2 google">
          <BsGoogle />
        </div>
        <div className="btn btnIcon m-2 yahoo">
          <DiYahooSmall />
        </div>
      </div>
    </>
  );
}

export default Socialbtns;
