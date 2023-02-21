import React from "react";

function GuessInput({ setGuess }) {
  const [guessInput, setGuessInput] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        setGuess(guessInput);
        setGuessInput("");
      }}
    >
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        minLength="5"
        maxLength="5"
        pattern="[a-zA-Z]{5}"
        title="Word must be exactly 5 letters"
        value={guessInput}
        onChange={(event) => setGuessInput(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
