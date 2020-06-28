const express = require('express');
const burger = require('../models/burger');

// Express router
const router = express.Router();

// API routes
router.get('/', async (req, res, next) => {
  try {
    const data = await burger.selectAll();

    res.status(200).render('index', { burgers: data });
  } catch (err) {
    console.error(
      `ERROR - burger_controller.js - .get('/api/burgers'): ${err}`.red.bold
    );
    next(err);
  }
});

router.post('/api/burgers', async (req, res, next) => {
  const burgerName = req.body.name;
  try {
    await burger.insertOne(burgerName);
    res.sendStatus(200);
  } catch (err) {
    console.error(
      `ERROR - burger_controller.js - .post('/api/burgers'): ${err}`.red.bold
    );
    next(err);
  }
});

router.put('/api/burgers/:id', async (req, res, next) => {
  const burgerId = req.params.id;
  const col = !!req.body.name ? 'burger_name' : 'devoured';
  const value = !!req.body.name ? req.body.name : req.body.devoured;
  console.log(value, burgerId);

  try {
    const result = await burger.updateOne(col, value, burgerId);
    if (result.changedRows === 0) {
      throw new Error('0 Rows Changed: An unknown error occurred.');
    }
    res.sendStatus(200);
  } catch (err) {
    console.error(
      `ERROR - burger_controller.js - .put('/api/burgers'): ${err}`.red.bold
    );
    next(err);
  }
});

module.exports = router;
