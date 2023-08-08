import React from "react";

const Cards = ({ image, num, text }: CardP) => {
  return (
    <div className="justify-center bg-[#0E121A] md:w-1/2 item-center text-center">
      <div className=" justify-center">
        <img className="mx-auto w-96 h-80" src={image} alt="" />
        <div className=" text-6xl text-zinc-400">{num}</div>
        <div className=" text-white font-bold w-auto text-lg">{text}</div>
      </div>
    </div>
  );
};

export default Cards;
