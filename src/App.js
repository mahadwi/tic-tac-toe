
import * as React from 'react';
import { useState } from 'react';

function Square ({value, onSquareClick}) {
  

  return <button className="w-32 h-32 border text-6xl font-bold" onClick={onSquareClick}>{value}</button>
}

export default function Board() {
  const [squares, setSquares]= useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  function handleClick(i){
    if(squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXisNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = ''
  winner ? status = `Winner: ${winner}` : status = `Next Player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <>
      <div className='flex justify-center items-center font-bold text-xl'>{status}</div>
      <div className="flex justify-center items-center h-screen">
        <div className='flex flex-wrap w-96 h-96'>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
      </div>
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for(let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }

  return false;
}

