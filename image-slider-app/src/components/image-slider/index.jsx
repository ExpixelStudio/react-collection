import { useState, useEffect, useRef } from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
/* import '../../App.css'; */
import './style.css';

export default function ImageSlider({url, limit = 5, page = 1}) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false); //when handling api calls always check loading state
    const [autoScroll, setAutoScroll] = useState(false); // auto scroll off by default
    /const [intervalId, setIntervalId] = useState(null); // Store interval ID for auto scroll
    const intervalIdRef = useRef(null); //store interval ID

    async function fetchImages(getUrl){
        try{
            setLoading(true); //before calling api set loading true

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json(); 

            if(data) { // if data recieved not null or true  set loading false
                setImages(data);
                setLoading(false);
            }

        }catch(e){
            setErrorMsg(e.message);
        }
    }
    
    useEffect (() => {
        if(url !== '') { //if url is not empty
            fetchImages(url);
        }
    },[url]);

    /* console.log(images.length); */
    console.log({currentSlide});    

    function handlePrevious(){
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext(){
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
        
    }

    useEffect(()=> {

        if (autoScroll) {
            const id = setInterval(() => {
                setCurrentSlide(prevSlide => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
                console.log({intervalIdRef});
            }, 2000); // Change slide every 3 seconds

            intervalIdRef.current = id; // Save the interval ID to clear it later
        }  else {
            clearInterval(intervalIdRef.current);
        }

        // Cleanup function to clear the interval when auto-scroll stops or component unmounts
        return () => clearInterval(intervalIdRef.current);

    }, [autoScroll]); // Re-run this effect if autoScroll or currentSlide changes

    
    function toggleAutoScroll(){
        /* autoScroll ? setAutoScroll(false) : setAutoScroll(true); */
        setAutoScroll(prev => !prev); //we used prev to clarify that it represents the previous value of autoScroll
        
        console.log(autoScroll); 
    }

    if(loading) {
        return <div>Loading data! Please wait.</div>
    }

    if(errorMsg !== null) {
        return <div>Error occured! {errorMsg}</div>
    }

    return (
    <div className="wrapper">
        <div className="slider-container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
            {
                images && images.length ? 
                    images.map((imageItem, index) => (
                        <img 
                            key={index}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className={currentSlide === index 
                                ? 'current-image' 
                                : 'current-image hide-current-image'}
                        />
                    ))
                : null
            }

            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
            <span className="circle-indicators">
                {
                    images && images.length ? 
                        images.map((_,index)=> <button
                        key={index}
                        className={
                            currentSlide === index 
                                ? 'current-indicator' 
                                : 'current-indicator inactive-indicator'}
                        onClick={() => setCurrentSlide(index)}
                        ></button>)
                    : null
                }
            </span>
            
        </div>

        <div className="auto-btn">
            {/* Button to toggle auto-scroll on/off */}
            <button onClick={toggleAutoScroll}>
                {autoScroll ? "Stop Auto-Srcoll" : "Start Auto-Scroll"}
            </button>
        </div>
        
    </div>   


    );
}