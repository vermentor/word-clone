import React from "react";

function GameWonBanner({ numGuesses }) {
  return (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numGuesses} guesses</strong>.
      </p>
    </div>
  );
}

export default GameWonBanner;
