const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ unix: Date.now(), utc: Date() });
});

router.get("/:date_string", (req, res) => {
  let dateString = req.params.date_string;

  //A 4 digit number is a valid ISO-8601 for the beginning of that year
  //5 digits or more must be a unix time, until we reach a year 10,000 problem
  if (/\d{5,}/.test(dateString)) {
    const dateInt = parseInt(dateString);
    //Date regards numbers as unix timestamps, strings are processed differently
    console.log(`input: ${dateString} - unix: ${dateInt} - utc; ${new Date(dateInt).toUTCString()}`);
    res.json({ unix: dateInt, utc: new Date(dateInt).toUTCString() });
  } else {
    let dateObject = new Date(dateString);

    if (dateObject.toString() === "Invalid Date") {
      console.log(`input ${dateString} - invalid date`);
      res.json({ error: "Invalid Date" });
    } else {
      console.log(`input: ${dateString} - unix: ${dateObject.valueOf()} - utc; ${dateObject.toUTCString()}`);
      res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() });
    }
  }
});

module.exports = router;