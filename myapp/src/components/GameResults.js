import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GameResults = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/games/')
      .then(response => {
        setGames(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Game Results</h1>
      {games.map((game, index) => (
        <div key={index}>
          <h2>Round {game.round}</h2>
          <p>Player 1: {game.player1Name}</p>
          <p>Player 2: {game.player2Name}</p>
          <p>Winner: {game.winner}</p>
        </div>
      ))}
    </div>
  );
};

export default GameResults;
