import React, { useState } from "react";

function App() {
  const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

  const [randomNumber, setRandomNumber] = useState(generateRandomNumber);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const userGuess = parseInt(guess);
    if (isNaN(userGuess)) {
      setMessage("❌ Please enter a valid number.");
      return;
    }

    setAttempts((prevAttempts) => prevAttempts + 1);

    if (userGuess === randomNumber) {
      setMessage(`🎉 Correct! You guessed it in ${attempts + 1} attempts.`);
    } else if (userGuess < randomNumber) {
      setMessage("📉 Too low! Try again.");
    } else {
      setMessage("📈 Too high! Try again.");
    }
  };

  const resetGame = () => {
    setRandomNumber(generateRandomNumber());
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-center w-96 border border-white/20">
        <h1 className="text-3xl font-bold mb-4">🎯 Guess the Number</h1>
        <p className="mb-4 text-lg font-light">
          Guess a number between <b>1 and 10</b>
        </p>

        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="p-3 w-full text-black rounded-md outline-none border-2 border-white/30 focus:border-blue-400 transition-all"
          placeholder="Enter your guess"
        />

        <button
          onClick={handleGuess}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-transform transform active:scale-95"
        >
          🎯 Submit Guess
        </button>

        <p className="mt-4 text-lg font-semibold">{message}</p>

        <button
          onClick={resetGame}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-transform transform active:scale-95"
        >
          🔄 Reset Game
        </button>
      </div>
    </div>
  );
}

export default App;
