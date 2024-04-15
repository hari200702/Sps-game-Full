const express = require('express');
const router = express.Router();
const Game=require('../models/model')


router.post('/game', async (req, res) => { 
    console.log(req.body);
    const game = new Game(req.body);
    await game.save();
    res.send(game);
  });
  
  


  router.post('/', async (req, res) => { 
    const games = await Game.find();
    res.send(games);
  });


  router.get('/', async (req, res) => {
    try {
      const games = await Game.find();
      res.json(games);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

module.exports=router