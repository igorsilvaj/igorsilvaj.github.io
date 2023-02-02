const fetchJoke = async () => {
  const API_URL = 'https://icanhazdadjoke.com/';
  const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };
  const response = await fetch(API_URL, REQUEST_CONFIG);
  const joke = await response.json();
  return joke.joke;
}

export default fetchJoke;
