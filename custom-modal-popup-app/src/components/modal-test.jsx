import { useState } from "react";
import Modal from "./modal";



export default function ModalTest() { //This component for displaying the modal

   const [showModalPopup, setShowModalPoppup] = useState(false);

   function handleToggleModalPopup(){
      setShowModalPoppup(!showModalPopup);
   }

   return (
      <div>
         <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
         {
            showModalPopup && <Modal />
         }
      </div>
   );
}