import React, {useEffect, useState} from 'react';
import './ImageSlider.scss';

export function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return(
        <div className='slider'>
            <div className="slider-image">
                <img src={images[currentIndex]} alt="Selected"
                style={{ height: '500px !important;' }}/>
            </div>
        </div>
    );
};