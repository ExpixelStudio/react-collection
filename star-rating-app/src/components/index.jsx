import { useState } from 'react';
import {FaStar} from 'react-icons/fa';

/* const [rating, setRating] = useState(0);
const [hover, setHover] = useState(0); */

function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex);
}

function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex);
}

function handleMouseLeave(getCurrentIndex) {
    console.log(getCurrentIndex);
}

export default function StarRating({noOfStars = 5}){ //if no value is passed, default value will be 5
    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_,index) => {

                    index += 1;

                    return (
                        <FaStar 
                            key ={index}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            size={40}
                        />
                    );
                })
            }
        </div>
    )
}