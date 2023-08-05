import React from 'react'

const Cards = ({image, num, text}) => {
  return (
    <div className=' bg-gray-900 text-center font-bold text-x1'>
       <div>
       <h1>How to receive money on your phone</h1>
       </div>
       <div>
       <img className=" " src={image} alt="" />
        <div className="text-center">
          <div className="text-white">{num}</div>{text}
          </div>
       </div>
    </div>
  );
};

export default Cards;