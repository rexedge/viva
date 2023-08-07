'use client';
import React, { useState } from 'react';

const ClickBtn = () => {
    const [showImage, setShowImage] = useState(false);

    const handleButtonClick = () => {
        setShowImage(!showImage);
    };

    return (
        <div className="container mx-auto">
            <div className=' justify-between'>
                <button
                    onClick={handleButtonClick}
                    className="px-4 py-2 bg-gray-600 w-96 h-20 items-center text-white rounded-2xl focus:outline-none"
                >
                    {showImage ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    }
                    Effortless
                </button>
                {showImage && (
                    <div className="mt-4 w-[1144px] h-96">
                        <img
                            src="image/Effortless.png"
                            alt="Image"
                            className="mx-auto"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClickBtn;
