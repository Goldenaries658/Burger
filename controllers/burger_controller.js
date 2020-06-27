const express = require('express');
const burger = require('../models/burger');

// Express router
const router = express.Router();

// API routes
router.get('/', (req, res) => {
  const data = burger.selectAll();
  res.status(200).json(data);
});
