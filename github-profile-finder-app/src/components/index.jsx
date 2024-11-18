import { useEffect, useState } from "react"
import UserCard from "./UserCard";


export default function GithubProfileFinder(){

   const [userName, setUsername] = useState('ExpixelStudio');
   const [userData, setUserData] = useState(null);
   const [loading, setLoading] = useState(false);
   
   async function fetchGithubUserData() {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();

      if(data){
         setUserData(data);
         setLoading(false);
         setUsername('');
      }

      console.log(data);
   }

   function handleSubmit(){
      fetchGithubUserData();
   }

   useEffect(()=>{
      fetchGithubUserData();
   },[])

   if(loading){
      return (
         <h1>Loading data ! Please wait.</h1>
      )
   }

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
         {
            userData !== null ? <UserCard user={userData} /> : null
         }
      </div>
   );
}