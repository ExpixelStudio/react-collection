import { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './style.css';


export default function StarRating({noOfStars = 6}){ //if no value is passed, default value will be 5

        const [rating, setRating] = useState(0);
        const [hover, setHover] = useState(0);

        function handleClick(getCurrentIndex) {
        console.log(getCurrentIndex);
        setRating(getCurrentIndex);
        }

        function handleMouseEnter(getCurrentIndex) {
        console.log(getCurrentIndex);
        setHover(getCurrentIndex);
        }

        function handleMouseLeave() {
        /* console.log(getCurrentIndex); */
        setHover(rating);
        }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {  /*  _ is a placeholder for the first argument in the callback (value) which is being ignored/not used. So that the 2nd argument (index) can be utilized */   

                    index += 1; //starts index count from 1-5 instead of 0-4
                    
                    return (
                        <FaStar 
                            key ={index}
                            className= {index <= (hover || rating) ? 'active star' : 'inactive star'}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave()}
                            size={40}
                        />
                    );
                })
            }

        <div className="display">
            <h3>{`You Rated it ${rating} out of ${noOfStars} stars.`}</h3>
        </div>

        </div>

        
    )
}