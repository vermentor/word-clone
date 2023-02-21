import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuessList from "../PreviousGuessList/PreviousGuessList";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function newGuessHandler(newGuess) {
    setGuesses([...guesses, newGuess]);
  }

  return (
    <>
      <PreviousGuessList previousGuesses={guesses} />
      <GuessInput setGuess={newGuessHandler} />
    </>
  );
}

export default Game;
