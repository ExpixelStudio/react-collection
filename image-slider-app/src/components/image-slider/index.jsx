import { useState, useEffect } from "react";
import '../../App.css';

export default function ImageSlider({url, limit = 5, page = 1}) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false); //when handling api calls always check loading state

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

    console.log(images);

    if(loading) {
        return <div>Loading data! Please wait.</div>
    }

    if(errorMsg !== null) {
        return <div>Error occured! {errorMsg}</div>
    }

    return (
        <div className="container">
            <h1>DOJ</h1>
        </div>
    ) 
}