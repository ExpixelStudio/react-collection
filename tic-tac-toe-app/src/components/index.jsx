import { useState } from 'react';
import './style.css';
import { useEffect } from 'react';

/* 0 1 2
   3 4 6
   6 7 8 */

   
function Square({value, onClick}){
   return <button onClick={onClick} className="square">{value}</button>
}

export default function TicTacToe(){

   const [squares,setSquares] = useState(Array(9).fill(''));
   const [isXTurn, setIsXTurn] = useState(true);
   const [status, setStatus] = useState('');
   console.log(squares);

   function getWinner(squares) {
      const winningPatterns = [
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,6,8],
         [0,4,8],
         [2,4,6],
      ];

      console.log(winningPatterns.length);
   for (let i = 0; i <winningPatterns.length; i++ ) {
      const [x,y,z] = winningPatterns[i];

      if(squares[x] && squares[x] === squares[y] && squares[x] === squares[z]){
            return squares[x];
         }
      }

      return null;
   }

   function handleClick(getCurrentSquare){
      let copySquares = [...squares]; //so not to directly mutate the state
      if(getWinner(copySquares) || copySquares[getCurrentSquare]) return; // prevent from toggling to next symbol after one is already played

      copySquares[getCurrentSquare] = isXTurn ? 'X' : 'O';
      setIsXTurn(!isXTurn);  
      setSquares(copySquares);
   }

   function handleRestart(){
      setSquares(Array(9).fill(''));
      setIsXTurn(true);
   }

useEffect(()=>{
   if(!getWinner(squares) && squares.every(item=> item !== '')){
      setStatus('Its a Draw! Please reset to try again.')
   } else if(getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)} Please reset the game.`);
   } else {
      setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`);
   }
},[squares,isXTurn]);

   return (
      <div className="tic-tac-toe-container">
         <div className="row-1">
            <Square value={squares[0]} onClick={()=> handleClick(0)}/>
            <Square value={squares[1]} onClick={()=> handleClick(1)}/>
            <Square value={squares[2]} onClick={()=> handleClick(2)}/>
         </div>

         <div className="row-2">
            <Square value={squares[3]} onClick={()=> handleClick(3)}/>
            <Square value={squares[4]} onClick={()=> handleClick(4)}/>         
            <Square value={squares[5]} onClick={()=> handleClick(5)}/>
         </div>

         <div className="row-3">
            <Square value={squares[6]} onClick={()=> handleClick(6)}/>
            <Square value={squares[7]} onClick={()=> handleClick(7)}/>
            <Square value={squares[8]} onClick={()=> handleClick(8)}/>
         </div>        
         <h1>{status}</h1>
         <button onClick={handleRestart}>Restart</button>
      </div>
   )
}