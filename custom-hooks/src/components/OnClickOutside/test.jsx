import { useState } from "react";



export default function OnClickOutideTest(){
   
   const [showContent, setShowContent] = useState(false);
   
   return (
      <div>
         {
            showContent ? <div></div> : <button></button>
         }
      </div>
   )
   }
}