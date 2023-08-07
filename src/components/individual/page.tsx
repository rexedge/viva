import React from 'react'

const Cards = ({image, num, text}:CardP) => {
  return (
    <div className=' bg-gray-900 text-center '>
       <div className=' '>
       <img className=" w-96 h-80" src={image} alt="" />
        <div className="text-center">
          <div className="text-white">{num}</div>{text}
          </div>
       </div>
    </div>
  );
};

export default Cards;