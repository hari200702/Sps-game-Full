const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    player1Name: String,
    player2Name: String,
    winner: String,
    round: Number
  });


const Game = mongoose.model('Game', gameSchema);

module.exports=Game

