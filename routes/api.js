const express = require('express');
const convertToUTC = require('../util/convertToUTC');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ unix: Date.now(), utc: Date() });
});

router.get('/:date', (req, res) => {
  const dateString = parseInt(req.params.date);
  try {
    let dateObject = new Date(dateString);

    if (dateObject.toString() === 'Invalid Date') {
      throw 'Invalid Date';
    } else {
      res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() });
    }
  } catch (err) {
    if (err === 'Invalid Date') {
      res.json({ error: 'Invalid Date' });
    } else {
      console.log(err);
    }
  }
});

module.exports = router;