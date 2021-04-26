require('dotenv').config();
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

const APIRoutes = require('./routes/api');

app.use('/api', APIRoutes);

app.listen(parseInt(process.env.PORT), () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});