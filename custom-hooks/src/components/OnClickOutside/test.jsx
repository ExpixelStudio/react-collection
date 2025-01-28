import { useState, useRef} from "react";
import './style.css';
import OnClickOutside from ".";




export default function OnClickOutideTest(){

   const ref = useRef();   
   OnClickOutside(ref, ()=> setShowContent(false));
   const [showContent, setShowContent] = useState(false);
   console.log({ref});
   
   return (
      <div>
         {
            showContent ? (
             <div className="inContent" ref={ref}>
                <h1>This is a random content</h1>
                <p>Please click outside of this to close window. It wont close if you click inside of this content.</p>
             </div> 
           ) : (
            <button onClick={()=> setShowContent(true)}>Show Content</button>
           )
         }
      </div>
   )
}  