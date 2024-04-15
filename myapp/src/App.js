<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { FaRegHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import './App.css';

const Game = () => {
  const [round, setRound] = useState(1);
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const [winner, setWinner] = useState(null);

  const choices = ['stone', 'paper', 'scissors'];

  const determineWinner = useCallback(() => {
    if (player1Choice === player2Choice) {
      setWinner('It\'s a tie!');
    } else if (
      (player1Choice === 'stone' && player2Choice === 'scissors') ||
      (player1Choice === 'scissors' && player2Choice === 'paper') ||
      (player1Choice === 'paper' && player2Choice === 'stone')
    ) {
      setWinner('Player 1 wins!');
    } else {
      setWinner('Player 2 wins!');
    }
  }, [player1Choice, player2Choice]);

  useEffect(() => {
    if (player1Choice && player2Choice) {
      determineWinner();
    }
  }, [player1Choice, player2Choice, determineWinner]);

  const handlePlayer1Choice = (choice) => {
    setPlayer1Choice(choice);
  };

  const handlePlayer2Choice = (choice) => {
    setPlayer2Choice(choice);
  };

  const handleNextRound = () => {
    if (round < 6) {
      setRound(round + 1);
      setPlayer1Choice(null);
      setPlayer2Choice(null);
      setWinner(null);
    }
  };

  return (
    <div>
      <h1>Round {round}</h1>
      <div>
        <h2>Player 1</h2>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handlePlayer1Choice(choice)} disabled={player1Choice || winner}>
             {choice === 'stone' ? <FaRegHandPaper /> : choice === 'paper' ? <IoNewspaperOutline /> : <FaHandScissors />}
          </button>
        ))}
      </div>
      <div>
        <h2>Player 2</h2>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handlePlayer2Choice(choice)} disabled={player2Choice || winner}>
            {choice === 'stone' ? <FaRegHandPaper /> : choice === 'paper' ? <IoNewspaperOutline /> : <FaHandScissors />}
          </button>
        ))}
      </div>
      {winner && <h2>{winner}</h2>}
      {round < 6 && <button onClick={handleNextRound}>Next Round</button>}
    </div>
  );
};

export default Game;
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Game from './components/Game';
import GameResults from './components/GameResults';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/results" element={<GameResults />} />
        <Route path="/" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
>>>>>>> d76fcd6 (Server Files Added)
