import React from "react";


export default function Benefits({ image, title, description }:CardBenefitsP) {
  return (
    <div className="w-[100%] lg:w-[48%] text-center p-[30px] h-[500px] lg:h-[440px] bg-[#707685] mt-[20px] rounded-[20px] text-white">
      <img className="mx-auto" src={image} alt={title} />
      <h2 className="text-[25px] font-bold pb-[20px]">{title}</h2>
      <p>{description}</p>
    </div>
  );
}