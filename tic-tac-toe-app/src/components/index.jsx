

/* 0 1 2
   3 4 6
   6 7 8 */

function Square(){
   return <button>1</button>
}

export default function TicTacToe(){
   return (
      <div className="tic-tac-toe-container">
         <div className="row-1">
            <Square />
            <Square />
            <Square />
         </div>

         <div className="row-2">
            <Square />
            <Square />         
            <Square />
         </div>

         <div className="row-3">
            <Square />
            <Square />
            <Square />
         </div>        
      </div>
   )
}