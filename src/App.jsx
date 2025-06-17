import { useState } from "react";
import ChuckButton from "./chucknorris/chuckButton";
import Joke from "./chucknorris/joke";
import "./app.scss";

const App = () => {
  const [jokeData, setJokeData] = useState("");

  // --- Fonction qui récupère une blague
  const fetchJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setJokeData(data.value);
      })
      .catch((err) => console.error(err));
  };

  return (
    <main>
      <header>
        <img
          src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png"
          alt="CHUCK NORRIS"
        />
      </header>
      <Joke jokeData={jokeData} />
      <ChuckButton fetchJoke={fetchJoke} />
    </main>
  );
};

export default App;