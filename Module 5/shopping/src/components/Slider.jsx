import { useState, useEffect } from 'react';

const Slider = () => {

    const slides = [
        "../public/banner.jpg",
        "../public/banner.jpg",
        "../public/banner.jpg"
    ];
    const [position, setPosition] = useState(0);
    const changePosition = (increment) => {
        const newPosition = position + increment;
        setPosition(newPosition >= 0 && newPosition < slides.length ? newPosition : position);
    };

    return (
        <>
            <div className='relative py-3'>
                <div className='flex overflow-hidden items-center justify-center w-full'>
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            alt={`banner-${index}`}
                            className={`px-4 ${position === index ? 'block' : 'hidden'}`}
                        />
                    ))}
                </div>
                <div className='absolute flex justify-between top-1/2 transform -translate-y-1/2 px-5 w-full'>
                    <button onClick={() => changePosition(-1)} className='text-2xl'>&#x2190;</button>
                    <button onClick={() => changePosition(1)} className='text-2xl'>&#x2192;</button>
                </div>
            </div>
        </>
    )
}

export default Slider