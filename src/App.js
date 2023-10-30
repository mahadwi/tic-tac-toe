
import * as React from 'react';
import { useState } from 'react';

function Square () {
  const [value, setValue] = useState('');

  function handlClick() {
    setValue('X');
  }

  return <button className="w-32 h-32 border text-6xl font-bold" onClick={handlClick}>{value}</button>
}

export default function Board() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className='flex flex-wrap w-96 h-96'>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}

