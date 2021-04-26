require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello freecodecamp' });
});

const APIRoutes = require('./routes/api');

app.use('/api', APIRoutes);

app.listen(parseInt(process.env.PORT), () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});