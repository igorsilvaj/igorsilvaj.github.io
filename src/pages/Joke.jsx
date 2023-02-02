import React, { useState } from 'react'
import fetchJoke from '../components/fetchJoke';

export const Joke = () => {
  const [joke, setJoke] = useState('');

  return (
    <div className='jokeContainer'>
        <h2>Piada: <span>{joke}</span></h2>
        <button 
          onClick={async () => {
          const joke = await fetchJoke();
          setJoke(joke);
          }}>
          New Joke
        </button>
      </div>
  )
}
