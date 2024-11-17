import { useState } from "react";
import Modal from "./modal";
import './modal.css';


export default function ModalTest() { //This component for displaying the modal

   const [showModalPopup, setShowModalPoppup] = useState(false);

   function handleToggleModalPopup(){
      setShowModalPoppup(!showModalPopup);
   }

   function onClose(){
      setShowModalPoppup(false);
   }

   return (
      <div>
         <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
         {
            showModalPopup && (
            <Modal 
            onClose={onClose} 
            header= {<h1>Customized Header</h1>}
            body={<div>Customized Body <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsa!.</div>} 
            
            />
            
         )}
      </div>
   );
}