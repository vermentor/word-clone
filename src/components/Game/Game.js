import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuessList from "../PreviousGuessList/PreviousGuessList";
import GameWonBanner from "../GameWonBanner";
import GameLostBanner from "../GameLostBanner/GameLostBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
let gameStatus = 'running';
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function newGuessHandler(newGuess) {
    const prevGuesses = [...guesses, checkGuess(newGuess, answer)];
    setGuesses(prevGuesses);
    if (newGuess === answer) {
      gameStatus = 'won';
    }
    else if (prevGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      gameStatus = 'lost';
    }
  }

  return (
    <>
      <PreviousGuessList previousGuesses={guesses} />
      {gameStatus === 'running' && <GuessInput setGuess={newGuessHandler} />}
      {gameStatus === 'won' && <GameWonBanner numGuesses={guesses.length} />}
      {gameStatus === 'lost' && <GameLostBanner answer={answer} />}
    </>
  );
}

export default Game;
