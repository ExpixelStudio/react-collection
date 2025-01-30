import { useRef } from "react"


export default function ScrollToSection(){

   const sectionRef = useRef();

   const data = [
      {
         label : 'First Card',
         style : {
            width : '100%',
            height : '600px',
            background : 'red',
         }
      },
      {
         label : 'Second Card',
         style : {
            width : '100%',
            height : '600px',
            background : 'purple',
         }
      },
      {
         label : 'Third Card',
         style : {
            width : '100%',
            height : '600px',
            background : 'green',
         }
      },
      {
         label : 'Forth Card',
         style : {
            width : '100%',
            height : '600px',
            background : 'blue',
         }
      },
      {
         label : 'Fifth Card',
         style : {
            width : '100%',
            height : '600px',
            background : 'wheat',
         }
      }
   ]

   function handleScrollToSection(){
      let pos = sectionRef.current.getBoundingClientRect().top;

      window.scrollTo({
         top : pos,
         behavior: 'smooth',
      });
   }

   return(
      <div>
         <h1>Scroll to a particular section.</h1>
         <button onClick={handleScrollToSection}>Click to Scroll</button>
         {
            data.map((dataItem, index) => <div ref={index === 3 ? sectionRef : null} style={dataItem.style}>
               <h3>{dataItem.label}</h3>
            </div>)
         }
      
      </div>
   )
}