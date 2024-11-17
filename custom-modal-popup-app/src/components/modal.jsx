

export default function Modal({id, header, body, footer}){
   return (
      <div id= {id || 'Modal'} className="modal">Modal
        
         <div className="modal-content">
            <div className="header">
               <span className="close-modal-icon">&times;</span>
               <h2>{header ? header : 'Header'}</h2>
            </div>

            <div className="body">
               {
                  body ? body : 
                     <p>This is our Modal Body</p>
               }
            </div>

               <div className="footer">
                  {
                     footer ? footer : <h2>Footer</h2>
                  }
               </div>
         </div>
      </div>
   )
}