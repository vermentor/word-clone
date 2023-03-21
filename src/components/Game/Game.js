import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuessList from "../PreviousGuessList/PreviousGuessList";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function newGuessHandler(newGuess) {
    setGuesses([...guesses, checkGuess(newGuess, answer)]);
  }

  return (
    <>
      <PreviousGuessList previousGuesses={guesses} />
      <GuessInput setGuess={newGuessHandler} />
    </>
  );
}

export default Game;
