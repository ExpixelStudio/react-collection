import { useEffect, useState } from "react"



export default function GithubProfileFinder(){

   const [userName, setUsername] = useState('ExpixelStudio');
   
   async function fetchGithubUserData(params) {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();

      console.log(data);
   }

   function handleSubmit(){

   }

   useEffect(()=>{
      fetchGithubUserData();
   },[])

   return (
      <div className="github-profile-container">

         <div className="input-wrapper">
            <input 
            name="search-by-username" 
            type="text" 
            placeholder="Search Github Username..."
            value={userName}
            onChange={(e)=> setUsername(e.target.value)}
            />
            
            <button onClick={handleSubmit}>Search</button>
         </div>
      </div>
   )
}