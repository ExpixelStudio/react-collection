import { useState } from "react";


export default function ScrollIndicator({url}){

   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [errorMsg, setErrorMsg] = useState('');
   
   async function fetchData(getUrl){
      try{
         setLoading(true);
         const response = await fetch(getUrl);
         const data = await response.json();
         
         console.log(data);

      }catch(e) {
         console.log(e);
         setErrorMsg(e.message)
      }
   }

   useEffect(() =>{
      fetchData(url);
   },[url])

   return (
      <div>

      </div>
   );
}