import React from "react";

function PreviousGuessList({ previousGuesses }) {
  return (
    <div className="guess-results">
      {previousGuesses.map((guess, index) => (
        <p key={index} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuessList;
