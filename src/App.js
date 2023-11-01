
import * as React from 'react';
import { useState } from 'react';
import Board from './components/Boards';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
  }

  const moves = history.map((squares, move) => {
    let description = '';

    if(move > 0) {
      description = `Go to move ${move}`;
    }else {
      description = `Go to game start`;
    }

    return (
      <li key={move}>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3' onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  });

  return (
    <div className='flex justify-center items-center h-screen gap-5'>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <ol>{moves}</ol>
    </div>
  )
}

