import "./styles.css";
import useFetch from './useFetch';

export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  // Use the custom hook here
  const { data, loading, error, getJoke } = useFetch(url);
  // Display loading text here

  if (loading) {
    return <p>Loading...</p>;
  }

  // Display something went wrong here
  if (error) {
    console.log(error)
    return <p>Something went wrong...</p>;
  }
  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <h2>{data.joke}</h2>
      <button className="btn" onClick={getJoke}>New Joke</button>
    </div>
  );
}
