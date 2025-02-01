import { useEffect, useState } from "react";
import Search from "../search";


export default function Weather(){

   const [search, setSearch] = useState('');
   const [loading, setLoading]= useState('false');
   const [weatherData, setWeatherData] = useState(null);

   async function fetchWeatherData(param){
      setLoading(true);

      try{

         const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=`); //temporary remove key for commit

         const data = await response.json();
         console.log(data, 'data');
         
         if(data){
            setWeatherData(data);
            setLoading(false);
         }

      }catch(e){
         setLoading(false);
         console.log(e);
      }
   }

   function handleSearch(){ 
      fetchWeatherData(search);
   }

   function getCurrentDate(){
      return new Date().toLocaleDateString('en-us', {
         weekday : 'long',
         month : 'long',
         day : 'numeric',
         year : "numeric",
      })
   }

   useEffect(()=>{
      fetchWeatherData('bridgetown')
   },[]);

   console.log(weatherData);
   console.log({loading});

   

   return (
      <div>
         <Search
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
         />
         {
            loading ? ( 
            <div className="loading">Loading... Please wait.</div> 
            ) : ( 
            <div>
               <div className="city-name">
                  <h3>City name: {weatherData?.name}, <span>{weatherData?.sys?.country}</span></h3>
               </div>
               
               <div className="date">
                  <span>{getCurrentDate()}</span>
               </div>

               <div className="temperature">{weatherData?.main?.temp}°</div>

               <p className="description">
                  {weatherData && weatherData.weather && weatherData.weather[0] ? 
                   weatherData.weather[0].description 
                   : ''
                  }
               </p>

               <div className="weather-info">
                  <div className="column">
                     <div>
                        <p className="wind">{weatherData?.wind?.speed}</p>
                        <p>Wind Speed</p>
                     </div>
                  </div>

                  <div className="column">
                     <div>
                        <p className="humidity">{weatherData?.main?.humidity}</p>
                        <p>Humidity</p>
                     </div>
                  </div>
               </div>

            </div>
            
         )}
        
      </div>
   )
}