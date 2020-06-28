const express = require('express');
const burger = require('../models/burger');

// Express router
const router = express.Router();

// API routes
router.get('/api/burgers', async (req, res) => {
  try {
    const data = await burger.selectAll();
    res.status(200).json(data);
  } catch (err) {
    console.error(
      `ERROR - burger_controller.js - .get('/api/burgers'): ${err}`.red.bold
    );
  }
});

router.post('/api/burgers', async (req, res) => {
  const burgerName = req.body.name;
  try {
    await burger.insertOne(burgerName);
    res.sendStatus(200);
  } catch (err) {
    console.error(
      `ERROR - burger_controller.js - .post('/api/burgers'): ${err}`.red.bold
    );
  }
});

module.exports = router;
