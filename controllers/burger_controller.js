const express = require('express');
const burger = require('../models/burger');

// Express router
const router = express.Router();

// API routes
router.get('/api/burger', async (req, res) => {
  try {
    const data = await burger.selectAll();
    res.status(200).json(data);
  } catch (err) {
    console.error(
      `ERROR - burger_controller.js - .get('/api'): ${err}`.red.bold
    );
  }
});

module.exports = router;
