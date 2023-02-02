import React from 'react';
import { useParams } from "react-router-dom";

function TestComponent() {
  const {id} = useParams();
  return (
    <div className='construction'>
      <div>
        <h1>Em construção{id}</h1>
        <p>O timer está neste link <a href='https://igorsilvaj.github.io/timer/'>https://igorsilvaj.github.io/timer/</a></p>
      </div>
    </div>
  )
}

export default TestComponent;